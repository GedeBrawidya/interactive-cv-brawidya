const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.development.local') });

const { sql } = require('@vercel/postgres');
const { educationHistory, achievements, experiences, skills, projects } = require('./data');

async function clearExistingTables() {
  try {
    await sql`DROP TABLE IF EXISTS projects;`;
    await sql`DROP TABLE IF EXISTS skills;`;
    await sql`DROP TABLE IF EXISTS experiences;`;
    await sql`DROP TABLE IF EXISTS achievements;`;
    await sql`DROP TABLE IF EXISTS education;`;
    console.log('🗑️  Existing tables dropped successfully');
  } catch (error) {
    console.error('❌ Error dropping tables:', error);
    throw error;
  }
}

async function createTables() {
  try {
    await sql`
      CREATE TABLE education (
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
      CREATE TABLE achievements (
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
      CREATE TABLE experiences (
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
      CREATE TABLE skills (
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
      CREATE TABLE projects (
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
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
}

async function insertData() {
  try {
    // Insert education data with null checks
    await Promise.all(
      educationHistory.map(edu => 
        sql`
          INSERT INTO education 
            (institution, major, period, description, additional, gpa, logo)
          VALUES 
            (${edu.institution}, ${edu.major}, ${edu.period}, 
             ${edu.description || null}, 
             ${edu.additional || null}, 
             ${edu.gpa || null}, 
             ${edu.logo || null})
        `
      )
    );

    // Insert other data
    await Promise.all(
      achievements.map(ach => 
        sql`
          INSERT INTO achievements 
            (title, year, description, category, organizer, link, skills)
          VALUES 
            (${ach.title}, ${ach.year}, ${ach.description || null}, 
             ${ach.category || null}, ${ach.organizer || null}, 
             ${ach.link || null}, ${ach.skills || null})
        `
      )
    );

    await Promise.all(
      experiences.map(exp => 
        sql`
          INSERT INTO experiences 
            (position, company, period, location, description, responsibilities, skills, company_logo)
          VALUES 
            (${exp.position}, ${exp.company}, ${exp.period}, 
             ${exp.location || null}, ${exp.description || null}, 
             ${exp.responsibilities || null}, 
             ${exp.skills || null}, 
             ${exp.companyLogo || null})
        `
      )
    );

    await Promise.all(
      skills.map(skill => 
        sql`
          INSERT INTO skills 
            (name, level, icon, color, description, category, years_of_experience, projects_used)
          VALUES 
            (${skill.name}, ${skill.level}, ${skill.icon || null}, 
             ${skill.color || null}, ${skill.description || null}, 
             ${skill.category || null}, 
             ${skill.yearsOfExperience || null}, 
             ${skill.projectsUsed || null})
        `
      )
    );

    await Promise.all(
      projects.map(proj => 
        sql`
          INSERT INTO projects 
            (title, image, description, detailed_description, tech, link, github_link, category, year, features, screenshots)
          VALUES 
            (${proj.title}, ${proj.image}, ${proj.description}, 
             ${proj.detailedDescription || null}, ${proj.tech}, 
             ${proj.link || null}, ${proj.githubLink || null}, 
             ${proj.category}, ${proj.year || null}, 
             ${proj.features || null}, ${proj.screenshots || null})
        `
      )
    );

    console.log('🌱 Data seeded successfully');
  } catch (error) {
    console.error('❌ Error inserting data:', error);
    throw error;
  }
}

async function seed() {
  try {
    // Clear existing data
    await clearExistingTables();
    
    // Create fresh tables
    await createTables();
    
    // Insert new data
    await insertData();
    
    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    process.exit(1);
  }
}

seed();