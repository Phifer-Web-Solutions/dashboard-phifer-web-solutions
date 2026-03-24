<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';
import config from '@/config/dashboard';
</script>

<template>
  <div class="widget">
    <h2 class="widget__title"><ExternalLink :size="18" /> Helpful Links</h2>
    <ul v-if="config.helpfulLinks.length" class="widget__list">
      <li v-for="link in config.helpfulLinks" :key="link.url">
        <a :href="link.url" target="_blank" rel="noopener" class="widget__link">
          {{ link.label }}
        </a>
      </li>
    </ul>
    <p v-else class="widget__empty">No links configured.</p>
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

.widget__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.widget__link {
  font-size: 0.875rem;
  color: var(--color-primary);
}

.widget__link:hover {
  color: var(--color-secondary);
}

.widget__empty {
  font-size: 0.875rem;
  color: var(--color-text-secondary, var(--color-text));
}
</style>
