<script lang="ts">
  import { fly } from 'svelte/transition'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  import Icon from '@iconify/svelte'

  import { type Notification, deleteNotification } from '$lib/stores/notification'

  export let notification: Notification

  // if it's a progress notification, we want to animate the progress bar
  $: tweenedProgress = tweened(0, { easing: cubicOut })
  $: if (notification.progress) tweenedProgress.set(notification.progress)
</script>

<div class="notification {notification.type}" transition:fly={{ x: 200 }}>
  <h3 class="title">{notification.title}</h3>

  {#if notification.message}
    <p class="message">{notification.message}</p>
  {/if}

  {#if notification.progress !== undefined}
    <progress value={$tweenedProgress} />
  {/if}

  <button class="close" on:click={() => deleteNotification(notification.id)}>
    <Icon icon="eva:close-fill" />
  </button>
</div>

<style lang="scss">
  .notification {
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;

    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 12px #0007;
    color: #333;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;

    transition: all 0.3s ease-in-out;
    will-change: transform, opacity;
    z-index: 1;
  }

  .notification .content {
    flex: 1;
  }

  .notification .title {
    margin: 0;
    margin-bottom: 0.5rem;

    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.4;
    color: #333;
  }

  .notification .message {
    margin: 0;
    color: #333;
  }

  .notification .close {
    position: absolute;
    top: 0;
    right: 0;

    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: #333;
    cursor: pointer;
    outline: none;

    font-size: 1.5rem;
    padding: 0.1em;

    :global(*) {
      color: inherit;
    }
  }

  // success notifications
  .notification.success {
    background-color: #e6ffed;
    color: #2c974b;
  }

  .notification.success .title {
    color: #2c974b;
  }

  .notification.success .message {
    color: #2c974b;
  }

  // error notifications
  .notification.error {
    background-color: #fff1f0;
    color: #f5222d;
  }

  .notification.error .title {
    color: #f5222d;
  }

  .notification.error .message {
    color: #f5222d;
  }

  // info notifications
  .notification.info {
    background-color: #e6f7ff;
    color: #1890ff;
  }

  .notification.info .title {
    color: #1890ff;
  }

  .notification.info .message {
    color: #1890ff;
  }
</style>
