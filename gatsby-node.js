const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query GetVersenyzok {
      competitors: allContentfulVersenyzok {
        nodes {
          slug
        }
      },
      story: allContentfulTortenetek {
        nodes {
          slug
        }
      },
      galery: allContentfulFotoMappak {
        nodes {
          slug
        }
      },
      animals: allContentfulAllataink {
        nodes {
            slug
        }
      }
    }
  `)
    result.data.competitors.nodes.forEach(person => {
        createPage({
            path: `/Competitors/${person.slug}`,
            component: path.resolve(`src/templates/competitors-template.js`),
            context: {
                slug: person.slug,
            },
        })
    })
    result.data.story.nodes.forEach(story => {
        createPage({
            path: `/Pictures/${story.slug}`,
            component: path.resolve(`src/templates/pictures-template.js`),
            context: {
                slug: story.slug,
            },
        })
    })
    result.data.galery.nodes.forEach(galery => {
        createPage({
            path: `/Galery/${galery.slug}`,
            component: path.resolve(`src/templates/galery-template.js`),
            context: {
                slug: galery.slug,
            },
        })
    })
    result.data.animals.nodes.forEach(animal => {
        createPage({
            path: `/Horses/${animal.slug}`,
            component: path.resolve(`src/templates/horses-template.js`),
            context: {
                slug: animal.slug,
            },
        })
    })
}
