const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack' , {
    logging: false
});

const Page = db.define('pages' , {
    title: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

function slugify (title) {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
};

Page.beforeValidate((page) => {page.slug = slugify(page.title)})

const User = db.define('users' , {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = {
  db,
  Page,
  User
}