const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME || process.env.DATABASE || 'aba_platform',
    process.env.DB_USER || process.env.USERNAME || 'root',
    process.env.DB_PASSWORD || process.env.PASSWORD || process.env.DB_PASS || '',
    {
        host: process.env.DB_HOST || process.env.HOST || 'localhost',
        port: process.env.DB_PORT || process.env.PORT || 3306,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false
    }
);

const connectDB = async () => {
    try {
        console.log(`Debug: DB_HOST=${process.env.DB_HOST || process.env.HOST}, DB_USER=${process.env.DB_USER || process.env.USERNAME}`);
        await sequelize.authenticate();
        console.log('MySQL Connected via Sequelize');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
