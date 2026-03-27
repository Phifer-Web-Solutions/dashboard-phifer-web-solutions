import type { DashboardConfig } from '@/types/dashboard';

const config: DashboardConfig = {
  "clientId": "7b36f1fc92d0591a38a3d9a77fc6d6d5",
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
  "helpfulLinks": [
    { "label": "Live Site", "url": "https://phiferwebsolutions.com", "description": "View your published website" },
    { "label": "Sanity Studio", "url": "https://studio.phiferwebsolutions.com", "description": "Edit your site content" }
  ],
  "contentEditors": [],
  "billing": {
    "stripeCustomerId": "cus_UB2yvhSOkjwmQc",
    "showPendingCharges": true,
    "showOfflineInvoices": true
  },
  "analytics": {
    "provider": "simple-analytics",
    "simpleAnalyticsId": "phiferwebsolutions.com",
    "internalRoutes": ["/analytics", "/billing", "/content-kit", "/support"],
    "conversionPage": "/contact"
  },
  "contentKit": {
    "enabled": true,
    "sections": [
      { "id": "your_business", "label": "Your Business", "description": "Business name, tagline, industry, location, years in business", "enabled": true, "required": true },
      { "id": "services_products", "label": "Services / Products", "description": "What you offer — repeatable entries with name, description, price range", "enabled": true, "required": true },
      { "id": "your_story", "label": "Your Story", "description": "Origin story, mission statement, values, team members", "enabled": true, "required": false },
      { "id": "your_customers", "label": "Your Customers", "description": "Testimonials, client logos, case studies", "enabled": true, "required": false },
      { "id": "brand_style", "label": "Brand & Style", "description": "Logo upload, brand personality, inspiration photos", "enabled": true, "required": true },
      { "id": "practical_details", "label": "Practical Details", "description": "Phone, email, address, hours, social links", "enabled": true, "required": true },
      { "id": "your_goals", "label": "Your Goals", "description": "Primary website goal, secondary goals, target audience", "enabled": true, "required": true }
    ],
    "maxPersonalityPicks": 4,
    "welcomeMessage": "",
    "completionEmailNotify": true
  }
};

export default config;
