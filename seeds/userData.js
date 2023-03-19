const { User } = require('../models');

const userData = [{
    username: "monalisa",
    password: "hiphop1973",
},
{
    username: "technica",
    password: "bboy1973",
},
{
    username: "seqel",
    password: "toprock"
}];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
