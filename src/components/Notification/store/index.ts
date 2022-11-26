import type { NotificationsState } from './NotificationsState.interface';
import { reactive } from 'vue';

export const store = reactive<NotificationsState>({
  notifications: [],
})