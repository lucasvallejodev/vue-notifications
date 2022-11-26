import type { NotificationData, NotificationsState } from '../interfaces';
import { reactive, readonly } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const state = reactive<NotificationsState>({
  notifications: [],
});

const actions = {
  removeNotification(id: string) {
    state.notifications = state.notifications.filter(notification => notification.id !== id);
  },
  dispatchNotification() {
    const id = uuidv4();
    const notifications = [{ id }, ...state.notifications];
    state.notifications = notifications;
    setTimeout(() => {
      actions.removeNotification(id);
    }, 3000);
  }
}

const getters = {
  getNotifications() {
    return [...state.notifications].slice(0,4);
  },
  getNotificationsCount() {
    return state.notifications.length;
  }
}

export default {
  state: readonly(state),
  actions,
  getters,
}