/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Solar Clean Colorado`,
    siteUrl: `https://www.solarcleancolorado.com`
  },
  plugins: [{
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-P01REGS3Y0", // Google Analytics / GA
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        anonymize_ip: false,
        cookie_expires: 0,
        send_page_view: true // default appears to be false.
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: false
      },
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      develop: true, // Enable while using `gatsby develop`
      // tailwind: true, // Enable tailwindcss support
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      purgeCSSOptions: {
        // https://purgecss.com/configuration.html#options
        // safelist: ['safelist'], // Don't remove this selector
      },
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "./src/pages/",
    },
  },
  "gatsby-transformer-gitinfo",
  "gatsby-plugin-sass", 
  "gatsby-plugin-image", 
  {
  resolve: "gatsby-plugin-sitemap",
  options: {
    query: `{
      site {
        siteMetadata {
          siteUrl
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
      allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
        edges {
          node {
            fields {
              gitLogLatestDate
            }
            name
          }
        }
      }
    }`,
    resolvePages: ({
      allSitePage: { nodes: sitePages },
      allFile: { edges: pageFiles }
    }) => {
      return sitePages.map(page => {
        const pageFile = pageFiles.find(({ node }) => {
          const fileName = node.name === 'index' ? '/' : `/${node.name}/`;
          return page.path === fileName;
        });

        return { ...page, ...pageFile?.node?.fields }
      })
    },
    serialize: ({ path, gitLogLatestDate }) => {
      return {
        url: path,
        lastmod: gitLogLatestDate
      }
    },
    createLinkInHead: true,
  },
},
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "static/icon.webp"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};