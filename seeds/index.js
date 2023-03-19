const seedComments = require('./comment-data');
const seedPosts = require('./post-data');
const seedUsers = require('./user-data');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force:true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();