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
      { text: 'Documents', link: '/docs/association' },
      { text: 'News', link: 'https://paragraph.xyz/@weatherxm' }
    ],
    footer: {
      message: '2024 <span style="color: red;">&hearts;</span> WeatherXM Network Association',
    },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Documents',
        items: [
          { text: 'Association', link: '/docs/association' },
          { text: '$WXM Token', link: '/docs/wxm-token' },
          { text: 'Governance', link: '/docs/governance' },
          { text: 'Weather Stations', link: '/docs/weather-stations' },
          { text: 'Data Licensing', link: '/docs/data-licensing' },
          { text: 'Station Rewards', link: '/docs/station-rewards' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/weatherxm-network' },
      { icon: 'discord', link: 'https://weatherxm.com/discord' }
    ]
  }
})
