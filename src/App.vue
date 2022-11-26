<script setup lang="ts">
import { NotificationProvider, dispatchNotification } from './components/Notification';
import Button from './components/Button.vue';

const addNotification = () => {
  dispatchNotification({ title: 'Success!', content: 'Your action was successfully submitted', type: 'success' });
}
</script>

<template>
  <main class="font-sans antialiased text-gray-900 bg-gray-100 h-screen">
    <NotificationProvider>
      <div class="m-4">
        <Button @click="addNotification" text="Add notification" />
      </div>
    </NotificationProvider>
  </main>
</template>
