<script lang="ts">
  export let value: (File | undefined)[] = []

  export let files: FileList | null = null
  export let error: string | undefined = undefined

  let input: HTMLInputElement

  let id = `${(Math.random() * 1000000).toFixed()}`

  // get files from input element and update value
  $: value = Array.from(files ?? [])
</script>

<div>
  <label for={id} class="button secondary xs" class:error>Browse Files</label>
  <input type="file" {id} bind:this={input} multiple bind:files />
  <div class="files">
    {#each Array.from(files ?? []) as file (file.name)}
      <span class="chip">{file.name}</span>
    {/each}
  </div>
  {#if error}
    <div class="error-helper">{error}</div>
  {/if}
</div>

<style lang="scss">
  input {
    display: none;
  }

  label.error {
    border: 2px solid var(--error-color);
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
