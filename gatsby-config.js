require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Dhwaneet Bhatt`,
    // Default title of the page
    siteTitleAlt: `Home | Dhwaneet Bhatt`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Dhwaneet Bhatt`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://dhwaneetbhatt.com`,
    // Used for SEO
    siteDescription: `About Dhwaneet Bhatt`,
    // Will be set on the <html /> tag
    siteLanguage: `en-in`,
    // Twitter Handle
    author: '@dhwaneetbhatt',
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: 'MMM DD, YYYY',
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Musings`,
            slug: `/musings`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Books`,
            slug: `/books`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/dhwaneetbhatt`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/dhwaneetbhatt`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/dhwaneetbhatt`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dhwaneet Bhatt's Blog`,
        short_name: `dhwaneet-bhatt`,
        description: `About Dhwaneet Bhatt`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-966GYR5CMJ'],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `musings`,
        path: `${__dirname}/content/musings`,
      },
    },
  ].filter(Boolean),
};
