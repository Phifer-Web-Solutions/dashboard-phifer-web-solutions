<script setup lang="ts">
import DashboardSidebar from './DashboardSidebar.vue';
import DashboardTopbar from './DashboardTopbar.vue';

defineProps<{
  pageTitle?: string;
}>();
</script>

<template>
  <div class="dashboard-layout">
    <DashboardSidebar />
    <div class="dashboard-layout__main">
      <DashboardTopbar :page-title="pageTitle" />
      <main class="dashboard-layout__content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100dvh;
}

.dashboard-layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.dashboard-layout__content {
  flex: 1;
  padding: 1.5rem;
}
</style>
