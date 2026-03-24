export type WidgetType =
  | 'siteAnalytics'
  | 'quickActions'
  | 'tutorials'
  | 'helpfulLinks'
  | 'contentEditors';

export interface QuickAction {
  label: string;
  url: string;
  icon?: string;
}

export interface TutorialVideo {
  title: string;
  url: string;
  category?: string;
  description?: string;
}

export interface HelpfulLink {
  label: string;
  url: string;
  description?: string;
}

export interface ContentEditor {
  label: string;
  documentType: string;
  description?: string;
}

export interface BillingConfig {
  stripeCustomerId: string;
  showPendingCharges: boolean;
  showOfflineInvoices: boolean;
}

export interface AnalyticsConfig {
  provider: 'simple-analytics' | 'ga4';
  /** Simple Analytics: client domain (e.g. "acmeplumbing.com") */
  simpleAnalyticsId?: string;
  /** GA4: measurement ID (e.g. "G-XXXXXXXXXX") */
  analyticsId?: string;
}

export interface DashboardConfig {
  clientName: string;
  clientDomain: string;
  clientEmail: string;
  enabledWidgets: string[];
  quickActions: QuickAction[];
  tutorialVideos: TutorialVideo[];
  helpfulLinks: HelpfulLink[];
  contentEditors: ContentEditor[];
  billing?: BillingConfig;
  analytics?: AnalyticsConfig;
}
