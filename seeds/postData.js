const { Post } = require('../models');

const postData = [{
    title: "MongoDB",
    content: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    user_id: 1
},
{
    title: "JavaScript",
    content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    user_id: 2
},
{
    title: "Bootstrap",
    content: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    user_id:3
}];

seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;