import { EnhanceAppContext } from 'vitepress'
import mixpanel from 'mixpanel-browser'

export default ({ app, router }: EnhanceAppContext) => {
    // Only run on client-side and in production mode
    if (typeof window !== 'undefined') {
        const mixpanelToken = import.meta.env.VITE_MIXPANEL_TOKEN as string
        if (!mixpanelToken || mixpanelToken.length === 0) {
            return
        }

        // Initialize Mixpanel with your project token
        mixpanel.init(mixpanelToken, {
            debug: false,
            track_pageview: true,
            persistence: 'localStorage'
        })

        // Track page views
        if (router) {
            router.onAfterRouteChange = (to) => {
                mixpanel.track('Page View', {
                    page: to
                })
            }
        }

        // Track the initial page load
        mixpanel.track('Page View', {
            page: window.location.pathname
        })

        // Make mixpanel available globally
        app.config.globalProperties.$mixpanel = mixpanel
        app.provide('mixpanel', mixpanel)
    }
}
