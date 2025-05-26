// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './mixpanel'
import './style.css'
import mixpanel from './mixpanel'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    mixpanel({app, router} as EnhanceAppContext)
  }
} satisfies Theme
