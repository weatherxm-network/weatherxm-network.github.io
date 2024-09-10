import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "weatherxm.network",
  description: "Weather 3.0",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn more', link: '/docs/association' },
      { text: 'News', link: 'https://paragraph.xyz/@weatherxm' },
    ],
    footer: {
      message: '2024 <span style="color: red;">&hearts;</span> WeatherXM Network Association',
    },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Association',
        items: [
          { text: 'About', link: '/docs/association' },
          { text: 'Governance', link: '/docs/governance' },
        ]
      },
      {
        text: 'Token',
        items: [
          { text: 'Tokenomics', link: '/docs/wxm-token' },
          { text: 'Smart Contracts', link: '/docs/smart-contracts' },
          { text: 'Station Rewards', link: '/docs/station-rewards' },
          { text: 'Rewards Claim', link: '/docs/rewards-claim' },
        ]
      },
      {
        text: 'Weather Data',
        items: [
          { text: 'Data Access', link: '/docs/data-access' },
          { text: 'Data Licensing', link: '/docs/data-licensing' },
        ]
      },
      {
        text: 'Hardware',
        items: [
          { text: 'Weather Stations', link: '/docs/weather-stations' },
          { text: 'Manufacturers', link: '/docs/manufacturers' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/weatherxm-network' },
      { icon: 'discord', link: 'https://weatherxm.com/discord' }
    ]
  }
})
