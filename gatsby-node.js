const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions // same as actions.createPage
    createPage({
        path: '/somefakepage',
        component: path.resolve('./src/components/postLayout.js')
    })
}