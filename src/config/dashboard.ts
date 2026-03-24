import type { DashboardConfig } from '@/types/dashboard';

const config: DashboardConfig = {
  "clientName": "Phifer Web Solutions",
  "clientDomain": "phiferwebsolutions.com",
  "clientEmail": "eric@ericphiferllc.com",
  "enabledWidgets": [
    "quickActions",
    "siteAnalytics",
    "helpfulLinks"
  ],
  "quickActions": [
    {
      "label": "View Live Site",
      "url": "https://phiferwebsolutions.com",
      "icon": "Globe"
    },
    {
      "label": "Open Studio",
      "url": "https://studio.phiferwebsolutions.com",
      "icon": "PencilLine"
    }
  ],
  "tutorialVideos": [],
  "helpfulLinks": [],
  "contentEditors": [],
  "billing": {
    "stripeCustomerId": "cus_UB2yvhSOkjwmQc",
    "showPendingCharges": true,
    "showOfflineInvoices": true
  },
  "analytics": {
    "provider": "simple-analytics",
    "simpleAnalyticsId": "phiferwebsolutions.com"
  }
};

export default config;
