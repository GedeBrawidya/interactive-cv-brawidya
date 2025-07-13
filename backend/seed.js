const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.development.local') });

const { sql } = require('@vercel/postgres');
const { educationHistory, achievements, experiences, skills, projects } = require('./data');

async function clearExistingData() {
  const tables = ['projects', 'skills', 'experiences', 'achievements', 'education'];
  
  try {
    await Promise.all(tables.map(table => 
      sql`DROP TABLE IF EXISTS ${sql.identifier(table)} CASCADE`
    ));
    console.log('🗑️  Successfully dropped all tables');
  } catch (error) {
    console.error('❌ Error dropping tables:', error);
    throw error;
  }
}

async function createTables() {
  const tableDefinitions = [
    `CREATE TABLE education (
      id SERIAL PRIMARY KEY,
      institution VARCHAR(255) NOT NULL,
      major VARCHAR(255) NOT NULL,
      period VARCHAR(255) NOT NULL,
      description TEXT,
      additional TEXT,
      gpa VARCHAR(50),
      logo VARCHAR(255)
    )`,
    `CREATE TABLE achievements (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      year INTEGER NOT NULL,
      description TEXT,
      category VARCHAR(100),
      organizer VARCHAR(255),
      link VARCHAR(255),
      skills VARCHAR(255)[]
    )`,
    `CREATE TABLE experiences (
      id SERIAL PRIMARY KEY,
      position VARCHAR(255) NOT NULL,
      company VARCHAR(255) NOT NULL,
      period VARCHAR(255) NOT NULL,
      location VARCHAR(255),
      description TEXT,
      responsibilities TEXT[],
      skills VARCHAR(255)[],
      company_logo VARCHAR(255)
    )`,
    `CREATE TABLE skills (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      level VARCHAR(100) NOT NULL,
      icon VARCHAR(255),
      color VARCHAR(100),
      description TEXT,
      category VARCHAR(100),
      years_of_experience INTEGER,
      projects_used INTEGER
    )`,
    `CREATE TABLE projects (
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
    )`
  ];

  try {
    await Promise.all(tableDefinitions.map(query => sql.query(query)));
    console.log('✅ Tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
}

async function insertData() {
  const insertOperations = [
    {
      table: 'education',
      data: educationHistory,
      fields: ['institution', 'major', 'period', 'description', 'additional', 'gpa', 'logo']
    },
    {
      table: 'achievements',
      data: achievements,
      fields: ['title', 'year', 'description', 'category', 'organizer', 'link', 'skills']
    },
    {
      table: 'experiences',
      data: experiences,
      fields: ['position', 'company', 'period', 'location', 'description', 'responsibilities', 'skills', 'company_logo']
    },
    {
      table: 'skills',
      data: skills,
      fields: ['name', 'level', 'icon', 'color', 'description', 'category', 'years_of_experience', 'projects_used']
    },
    {
      table: 'projects',
      data: projects,
      fields: ['title', 'image', 'description', 'detailed_description', 'tech', 'link', 'github_link', 'category', 'year', 'features', 'screenshots']
    }
  ];

  try {
    for (const operation of insertOperations) {
      console.log(`🌱 Seeding ${operation.table}...`);
      await Promise.all(operation.data.map(item => {
        const values = operation.fields.map(field => {
          // Handle field name differences (like companyLogo vs company_logo)
          const fieldName = field.includes('_') ? 
            field.split('_').reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1)) :
            field;
          return item[fieldName] || null;
        });
        
        return sql.query(
          `INSERT INTO ${operation.table} (${operation.fields.join(', ')}) 
           VALUES (${operation.fields.map((_, i) => `$${i+1}`).join(', ')})`,
          values
        );
      }));
    }
    console.log('✅ Data seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  }
}

async function seedDatabase() {
  try {
    await clearExistingData();
    await createTables();
    await insertData();
    console.log('🎉 Database seeding completed!');
  } catch (error) {
    console.error('💥 Database seeding failed:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

seedDatabase();