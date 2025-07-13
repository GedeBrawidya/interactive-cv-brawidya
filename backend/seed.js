// seed.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.development.local') });

const { sql } = require('@vercel/postgres');
const { educationHistory, achievements, experiences, skills, projects } = require('./data');

async function seed() {
  try {
    // Create tables
    await sql`
      CREATE TABLE IF NOT EXISTS education (
        id SERIAL PRIMARY KEY,
        institution VARCHAR(255) NOT NULL,
        major VARCHAR(255) NOT NULL,
        period VARCHAR(255) NOT NULL,
        description TEXT,
        additional TEXT,
        gpa VARCHAR(50),
        logo VARCHAR(255)
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS achievements (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        year INTEGER NOT NULL,
        description TEXT,
        category VARCHAR(100),
        organizer VARCHAR(255),
        link VARCHAR(255),
        skills VARCHAR(255)[]
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS experiences (
        id SERIAL PRIMARY KEY,
        position VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        period VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        description TEXT,
        responsibilities TEXT[],
        skills VARCHAR(255)[],
        company_logo VARCHAR(255)
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        level VARCHAR(100) NOT NULL,
        icon VARCHAR(255),
        color VARCHAR(100),
        description TEXT,
        category VARCHAR(100),
        years_of_experience INTEGER,
        projects_used INTEGER
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        detailed_description TEXT,
        tech VARCHAR(255)[] NOT NULL,
        link VARCHAR(255),
        github_link VARCHAR(255),
        category VARCHAR(100) NOT NULL,
        year INTEGER,
        features TEXT[],
        screenshots VARCHAR(255)[]
      );
    `;

    console.log('✅ Tables created successfully');

    // Insert data
    await Promise.all(
      educationHistory.map(edu => 
        sql`
          INSERT INTO education 
            (institution, major, period, description, additional, gpa, logo)
          VALUES 
            (${edu.institution}, ${edu.major}, ${edu.period}, ${edu.description}, 
             ${edu.additional}, ${edu.gpa}, ${edu.logo})
        `
      )
    );

    await Promise.all(
      achievements.map(ach => 
        sql`
          INSERT INTO achievements 
            (title, year, description, category, organizer, link, skills)
          VALUES 
            (${ach.title}, ${ach.year}, ${ach.description}, ${ach.category}, 
             ${ach.organizer}, ${ach.link}, ${ach.skills})
        `
      )
    );

    await Promise.all(
      experiences.map(exp => 
        sql`
          INSERT INTO experiences 
            (position, company, period, location, description, responsibilities, skills, company_logo)
          VALUES 
            (${exp.position}, ${exp.company}, ${exp.period}, ${exp.location}, 
             ${exp.description}, ${exp.responsibilities}, ${exp.skills}, ${exp.companyLogo})
        `
      )
    );

    await Promise.all(
      skills.map(skill => 
        sql`
          INSERT INTO skills 
            (name, level, icon, color, description, category, years_of_experience, projects_used)
          VALUES 
            (${skill.name}, ${skill.level}, ${skill.icon}, ${skill.color}, 
             ${skill.description}, ${skill.category}, ${skill.yearsOfExperience}, ${skill.projectsUsed})
        `
      )
    );

    await Promise.all(
      projects.map(proj => 
        sql`
          INSERT INTO projects 
            (title, image, description, detailed_description, tech, link, github_link, category, year, features, screenshots)
          VALUES 
            (${proj.title}, ${proj.image}, ${proj.description}, ${proj.detailedDescription}, 
             ${proj.tech}, ${proj.link}, ${proj.githubLink}, ${proj.category}, 
             ${proj.year}, ${proj.features}, ${proj.screenshots})
        `
      )
    );

    console.log('✅ Data seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();