<script lang="ts">
  import Icon from '@iconify/svelte'

  export let icon: string = ''
  export let label: string

  export let value: string = ''
  export let required: boolean = false
  export let error: string | undefined = undefined

  export let textarea: boolean = false
  export let rows: number = 5
</script>

<div class="container">
  <div class="field" title={label}>
    {#if textarea}
      <!-- Textarea doesn't have icon -->
      <textarea cols="30" {rows} bind:value placeholder={label} class:error />
    {:else}
      <div class="icon">
        <Icon {icon} />
      </div>
      <input type="text" placeholder={label} bind:value class:error />
    {/if}
  </div>
  {#if error}
    <div class="error-helper">{error}</div>
  {/if}
</div>

<style lang="scss">
  .field {
    --text-color: #fff;
    --icon-color: #57a;
    --bg-color: #234;

    --icon-size: 2rem;
    --icon-padding: calc(var(--icon-size) * 0.2);

    --font-size: 1rem;
    --input-padding: calc(var(--font-size) * 0.6);

    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: var(--font-size);

    border-radius: 5px;
    overflow: clip;
    position: relative;
  }
  .field > * {
    font-size: inherit;
    background-color: inherit;
  }

  .icon {
    flex-basis: 1;
    color: var(--icon-color);
    display: flex;
    align-items: start;
    font-size: var(--icon-size);
    padding: var(--icon-padding);
    background-color: transparent;

    position: absolute;
    inset: 0 auto 0 0;

    :global(*) {
      color: inherit;
    }
  }

  input,
  textarea {
    font-size: var(--font-size);
    padding: var(--input-padding);
    flex-basis: 4;
    background-color: inherit;
    width: 100%;
  }

  input {
    text-indent: 2.5em;
  }

  textarea {
    resize: vertical;
  }

  input.error,
  textarea.error {
    border: 2px solid #f00;
  }

  .error-helper {
    color: #f26;
    font-weight: 400;
    font-family: Poppins, Kanit, Segoe UI, sans-serif;
    font-size: 0.85rem;
    line-height: 1;
    padding: 0.5em 1em 0 1em;
  }
</style>
