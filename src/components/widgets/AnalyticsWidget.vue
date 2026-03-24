<script setup lang="ts">
import { BarChart3 } from 'lucide-vue-next';
import config from '@/config/dashboard';

const analytics = config.analytics;
const isSimple = analytics?.provider === 'simple-analytics';
const isGA4 = analytics?.provider === 'ga4';
</script>

<template>
  <div class="widget">
    <h2 class="widget__title"><BarChart3 :size="18" /> Site Analytics</h2>

    <div v-if="isSimple" class="widget__content">
      <p class="widget__provider">Simple Analytics (cookieless)</p>
      <a
        :href="`https://simpleanalytics.com/${analytics?.simpleAnalyticsId}`"
        target="_blank"
        rel="noopener"
        class="widget__link"
      >
        View dashboard &rarr;
      </a>
    </div>

    <div v-else-if="isGA4" class="widget__content">
      <p class="widget__provider">Google Analytics 4</p>
      <a
        :href="`https://analytics.google.com/analytics/web/?authuser=0#/p${analytics?.analyticsId}/`"
        target="_blank"
        rel="noopener"
        class="widget__link"
      >
        View GA4 dashboard &rarr;
      </a>
    </div>

    <div v-else class="widget__placeholder">
      <p>Analytics integration will be connected during setup.</p>
    </div>
  </div>
</template>

<style scoped>
.widget {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1.25rem;
}

.widget__title {
  font-size: 1rem;
  font-family: var(--font-heading);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.widget__content {
  padding: 1rem;
}

.widget__provider {
  font-size: 0.875rem;
  color: var(--color-text-secondary, var(--color-text));
  margin-bottom: 0.75rem;
}

.widget__link {
  display: inline-block;
  color: var(--color-primary);
  font-size: 0.875rem;
  text-decoration: none;
}

.widget__link:hover {
  text-decoration: underline;
}

.widget__placeholder {
  padding: 2rem;
  text-align: center;
  color: var(--color-text-secondary, var(--color-text));
  font-size: 0.875rem;
  border: 1px dashed var(--color-border);
  border-radius: var(--border-radius);
}
</style>
