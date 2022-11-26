<script setup lang="ts">
import { NotificationProvider } from './components/Notification'
import { store } from './components/Notification/store'
import { getUniqueId } from './components/Notification/utils/getUniqueId';

const addNotification = () => {
  const id = getUniqueId();
  const notifications = [{ id }, ...store.notifications];
  store.notifications = notifications;
  setTimeout(() => {
    store.notifications = store.notifications.filter(notification => notification.id !== id);
  }, 3000);
}
</script>

<template>
  <main class="font-sans antialiased text-gray-900 bg-gray-100 h-screen">
    <NotificationProvider>
      <div class="m-4">
        <button
          @click="addNotification"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
          </svg>
          <span>Add notification</span>
        </button>
      </div>
    </NotificationProvider>
  </main>
</template>
