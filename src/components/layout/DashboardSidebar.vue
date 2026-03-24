<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { LayoutDashboard, CreditCard, PanelLeftClose, PanelLeft } from 'lucide-vue-next';
import config from '@/config/dashboard';

const collapsed = ref(false);
</script>

<template>
  <aside class="sidebar" :class="{ 'sidebar--collapsed': collapsed }">
    <div class="sidebar__header">
      <span v-if="!collapsed" class="sidebar__brand">{{ config.clientName }}</span>
      <button
        class="sidebar__toggle"
        :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'"
        @click="collapsed = !collapsed"
      >
        <PanelLeftClose v-if="!collapsed" :size="18" />
        <PanelLeft v-else :size="18" />
      </button>
    </div>

    <nav class="sidebar__nav">
      <RouterLink to="/" class="sidebar__link">
        <LayoutDashboard :size="20" />
        <span v-if="!collapsed">Dashboard</span>
      </RouterLink>
      <RouterLink v-if="config.billing?.stripeCustomerId" to="/billing" class="sidebar__link">
        <CreditCard :size="20" />
        <span v-if="!collapsed">Billing</span>
      </RouterLink>
    </nav>

    <div v-if="!collapsed" class="sidebar__footer">
      <a :href="`https://${config.clientDomain}`" target="_blank" rel="noopener" class="sidebar__domain">
        {{ config.clientDomain }}
      </a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  height: 100dvh;
  position: sticky;
  top: 0;
  transition: width 0.2s ease;
}

.sidebar--collapsed {
  width: 60px;
}

.sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  min-height: 4rem;
}

.sidebar__brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--color-primary);
  white-space: nowrap;
  overflow: hidden;
}

.sidebar__toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: 0.25rem;
  border-radius: var(--border-radius);
  flex-shrink: 0;
}

.sidebar__toggle:hover {
  background-color: var(--color-border);
}

.sidebar__nav {
  flex: 1;
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.15s ease;
  white-space: nowrap;
}

.sidebar__link:hover,
.sidebar__link.router-link-active {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
}

.sidebar__footer {
  padding: 1rem;
  border-top: 1px solid var(--color-border);
}

.sidebar__domain {
  font-size: 0.75rem;
  color: var(--color-text-secondary, var(--color-text));
}
</style>
