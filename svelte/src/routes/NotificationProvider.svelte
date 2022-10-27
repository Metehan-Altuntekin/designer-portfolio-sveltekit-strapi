<script lang="ts">
  import {
    type Notification as NotificationType,
    notifications,
    createNotification,
    deleteNotification,
  } from '$lib/stores/notification'

  import Notification from '$lib/components/Notification.svelte'
</script>

<div class="notification-provider">
  {#each $notifications as notification (notification)}
    <Notification {notification} />
  {/each}
</div>

<style lang="scss">
  .notification-provider {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999999;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding: clamp(10px, 4vw, 100px);
  }
</style>
