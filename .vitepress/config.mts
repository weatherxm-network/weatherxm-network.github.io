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
      message: '<a href="/public/terms-of-use.pdf">Terms of Use</a> | <a href="/public/privacy-policy.pdf">Privacy Policy</a>',
      copyright: '2025 <span style="color: red;">&hearts;</span> WeatherXM Network Association',
    },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Association',
        items: [
          { text: 'About', link: '/docs/association' },
          { text: 'Revenue', link: '/docs/association-revenue' },
          { text: 'Governance', link: '/docs/governance' },
          { text: 'Financials', link: '/docs/association-financials' },
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
      },
      {
        text: 'Legal',
        items: [
          { text: 'Terms of Use', link: '/public/terms-of-use.pdf' },
          { text: 'Privacy Policy', link: '/public/privacy-policy.pdf' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/weatherxm-network' },
      { icon: 'discord', link: 'https://weatherxm.com/discord' },
      { icon: {svg: '<svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" version="1.1" id="svg3" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <path d="M 256.7885,152.91734 742.222,155.556 739.76611,745.77422 670.609,747.55827 671.111,528.889 h -0.697 C 662.554,441.677 589.258,373.333 500,373.333 c -89.258,0 -162.554,68.344 -170.414,155.556 h -0.697 l -1.61188,217.78953 -69.20657,-1.02678 z" id="path1" /> <path d="m 128.889,253.333 28.889,97.778 h 24.444 v 395.556 c -12.273,0 -22.222,9.949 -22.222,22.222 v 26.667 h -4.444 c -12.273,0 -22.223,9.949 -22.223,22.222 v 26.666 h 248.889 v -26.666 c 0,-12.273 -9.949,-22.222 -22.222,-22.222 h -4.444 v -26.667 c 0,-12.273 -9.95,-22.222 -22.223,-22.222 l -74.9268,-1.63596 0.19759,-490.58029 z" id="path2" /> <path d="m 675.556,746.667 c -12.26435,0.46074 -22.223,9.949 -22.223,22.222 v 26.667 h -4.444 c -12.273,0 -22.222,9.949 -22.222,22.222 v 26.666 h 248.889 v -26.666 c 0,-12.273 -9.95,-22.222 -22.223,-22.222 h -4.444 v -26.667 c 0,-12.273 -9.949,-22.222 -22.222,-22.222 V 351.111 h 24.444 L 880,253.333 l -140.71888,0.22751 0.1552,490.70669 z" id="path3" /> </svg>'}, link: 'https://warpcast.com/weatherxm'}
    ]
  },
  vite: {
    ssr: {
      noExternal: ['pdfjs-dist', '@vue-pdf-viewer/viewer']
    }
  }
})
