<script setup lang="ts">
import { Zap } from 'lucide-vue-next';
import config from '@/config/dashboard';
</script>

<template>
  <div class="widget">
    <h2 class="widget__title"><Zap :size="18" /> Quick Actions</h2>
    <div class="widget__actions">
      <a
        v-for="action in config.quickActions"
        :key="action.label"
        :href="action.url"
        target="_blank"
        rel="noopener"
        class="widget__action-btn"
      >
        {{ action.label }}
      </a>
      <p v-if="config.quickActions.length === 0" class="widget__empty">
        No quick actions configured.
      </p>
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

.widget__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.widget__action-btn {
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--border-radius);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.widget__action-btn:hover {
  background-color: var(--color-secondary);
}

.widget__empty {
  font-size: 0.875rem;
  color: var(--color-text-secondary, var(--color-text));
}
</style>
