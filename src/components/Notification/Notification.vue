<script setup lang="ts">
  import store from './store';
  import type { Notification } from './interfaces';
  import { ErrorIcon, InfoIcon, WarningIcon, SuccessIcon, CloseIcon } from './icons';

  defineProps<{
    notification: Notification,
  }>();

  const closeNotification = (id: string) => {
    store.actions.removeNotification(id);
  }
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg pointer-events-auto">
    <div class="rounded-lg shadow-xl overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0" v-if="notification.type">
            <SuccessIcon v-if="notification.type === 'success'" />
            <InfoIcon v-else-if="notification.type === 'info'" />
            <WarningIcon v-else-if="notification.type === 'warning'" />
            <ErrorIcon v-else-if="notification.type === 'error'" />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm leading-5 font-medium text-gray-900" v-if="notification.title">
              {{ notification.title }}
            </p>
            <p :class="`${notification.title ? 'mt-1' : ''} text-sm leading-5 text-gray-500`">
              {{ notification.content }}
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button
              @click="() => closeNotification(notification.id)"
              class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition-all ease-in-out duration-150"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

