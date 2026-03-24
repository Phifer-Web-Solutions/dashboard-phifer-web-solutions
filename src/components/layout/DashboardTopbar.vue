<script setup lang="ts">
import { LogOut, User } from 'lucide-vue-next';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAuth0 } from '@auth0/auth0-vue';

defineProps<{
  pageTitle?: string;
}>();

const auth = useAuthStore();
const { logout } = useAuth0();

function handleLogout() {
  auth.clearUser();
  logout({ logoutParams: { returnTo: window.location.origin } });
}
</script>

<template>
  <header class="topbar">
    <h1 class="topbar__title">{{ pageTitle || 'Dashboard' }}</h1>

    <div class="topbar__user">
      <div class="topbar__avatar">
        <img v-if="auth.user?.picture" :src="auth.user.picture" :alt="auth.displayName" />
        <User v-else :size="20" />
      </div>
      <span class="topbar__name">{{ auth.displayName }}</span>
      <button class="topbar__logout" aria-label="Log out" @click="handleLogout">
        <LogOut :size="18" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1.5rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.topbar__title {
  font-size: 1.25rem;
  font-family: var(--font-heading);
  color: var(--color-text);
}

.topbar__user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.topbar__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-border);
  color: var(--color-text);
}

.topbar__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.topbar__name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
}

.topbar__logout {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: 0.375rem;
  border-radius: var(--border-radius);
  transition: background-color 0.15s ease;
}

.topbar__logout:hover {
  background-color: var(--color-border);
}
</style>
