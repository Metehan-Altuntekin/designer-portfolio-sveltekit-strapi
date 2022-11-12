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

<div class="notification {notification.type}" transition:fly={{ x: 200 }} class:progress={!!notification.progressStore}>
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
    --width: 350px;
    --progress-height: 14px;

    --message-size: clamp(1rem, 1.5vw, 1.5rem);
    --title-size: calc(var(--message-size) * 1.5);
    --close-button-size: clamp(1.5rem, 1.5vw, 2rem);

    --success-title-color: black;
    --success-message-color: #000a;
    --success-bg-color: var(--color-success);

    --info-title-color: black;
    --info-message-color: #000a;
    --info-bg-color: var(--color-info);

    --warning-title-color: black;
    --warning-message-color: #000a;
    --warning-bg-color: var(--color-warning);

    --error-title-color: black;
    --error-message-color: #000a;
    --error-bg-color: var(--color-danger);

    --progress-color: #006eff;
    --progress-bg-color: transparent;

    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    width: var(--width);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;

    border-radius: 7px;
    background-color: var(--info-bg-color);
    box-shadow: 0 0 12px #0007;
    color: #333;
    overflow: hidden;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;

    transition: all 0.3s ease-in-out;
    will-change: transform, opacity;
    z-index: 1;
  }

  .notification .title {
    margin: 0;
    margin-bottom: 0.5em;
    margin-right: var(--close-button-size); // margin to make room for the close button

    font-size: var(--title-size);
    font-weight: 600;
    line-height: 1;
    color: var(--info-title-color);
  }

  .notification .message {
    font-size: var(--message-size);
    // margin-bottom: 1em;
    color: var(--info-message-color);
    line-height: 1.05;
  }

  progress {
    --color: var(--progress-color);
    --background: var(--progress-bg-color);

    position: absolute;
    inset: auto 0 0 0;

    width: 100%;
    height: var(--progress-height);

    background-color: var(--background);

    &::-webkit-progress-bar {
      background-color: var(--background);
    }
    &::-webkit-progress-value {
      background-color: var(--color);
    }
    &::-moz-progress-bar {
      background-color: var(--color);
    }
    &::-ms-fill {
      background-color: var(--color);
    }
    &::-ms-fill-lower {
      background-color: var(--background);
    }
    &::-ms-fill-upper {
      background-color: var(--color);
    }
    &::-ms-backdrop {
      background-color: var(--background);
    }
    &::-ms-ticks-after {
      background-color: var(--color);
    }
    &::-ms-ticks-before {
      background-color: var(--color);
    }
    &::-ms-tooltip {
      background-color: var(--color);
    }
    &::-ms-track {
      background-color: var(--background);
    }
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

    font-size: var(--close-button-size);
    padding: 0.1em;

    :global(*) {
      color: inherit;
    }
  }

  .notification.progress {
    padding-bottom: calc(var(--progress-height) * 2);
  }

  // -- Type specific styles

  // success notifications
  .notification.success {
    background-color: var(--success-bg-color);
    color: var(--success-message-color);

    .title {
      color: var(--success-title-color);
    }

    .message {
      color: var(--success-message-color);
    }
  }

  // info notifications
  .notification.info {
    background-color: var(--info-bg-color);
    color: var(--info-message-color);

    .title {
      color: var(--info-title-color);
    }

    .message {
      color: var(--info-message-color);
    }
  }

  // warning notifications
  .notification.warning {
    background-color: var(--warning-bg-color);
    color: var(--warning-message-color);

    .title {
      color: var(--warning-title-color);
    }

    .message {
      color: var(--warning-message-color);
    }
  }

  // error notifications
  .notification.error {
    background-color: var(--error-bg-color);
    color: var(--error-message-color);

    .title {
      color: var(--error-title-color);
    }

    .message {
      color: var(--error-message-color);
    }
  }
</style>
