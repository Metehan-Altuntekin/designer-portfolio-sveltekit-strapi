<script lang="ts">
  import Icon from '@iconify/svelte'

  export let icon: string = ''
  export let label: string
  export let value: string = ''
  export let textarea: boolean = false
  export let rows: number = 5
</script>

<div title={label}>
  {#if textarea}
    <textarea cols="30" {rows} bind:value placeholder={label} />
  {:else}
    <div class="icon">
      <Icon {icon} />
    </div>
    <input type="text" placeholder={label} bind:value />
  {/if}
</div>

<style lang="scss">
  div {
    --text-color: #fff;
    --icon-color: #57a;
    --bg-color: #234;

    --icon-size: 2rem;
    --icon-padding: calc(var(--icon-size) * 0.2);

    --font-size: 1rem;
    --input-padding: calc(var(--font-size) * 0.8);

    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: var(--font-size);

    border-radius: 5px;
    overflow: clip;
    position: relative;
  }
  div > * {
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
</style>
