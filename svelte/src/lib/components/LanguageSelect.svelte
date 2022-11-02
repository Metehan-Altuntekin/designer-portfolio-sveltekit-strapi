<script lang="ts">
  import { LANGUAGES, language, setLanguage } from '$lib/stores/language'

  $: options = Object.entries(LANGUAGES).map(([key, lang]) => ({
    ...lang,
    key,
    isSelected: $language === key,
  }))
</script>

<div class="language-select">
  {#each options as option}
    <button class:active={option.isSelected} on:click={() => setLanguage(option.key)}>
      {option.name}
    </button>
  {/each}
  <div class="dropdown">
    {#each options as option}
      {@const id = `language-select-${option.key}`}
      <input
        type="radio"
        name="lang"
        bind:value={$language}
        {id}
        class:selected={option.isSelected}
        on:click={() => setLanguage(option.key)}
        checked={option.isSelected}
      />
      <label for={id}>{@html option.flag}</label>
    {/each}
  </div>
</div>

<style lang="scss">
  .language-select {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
  }

  .language-select .dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    top: 100%;
  }
  .language-select input {
    display: none;
  }

  .language-select input:checked + label {
    background-color: #444;
  }
  .language-select label {
    display: flex;
    padding: 4px;
    background-color: #888;

    :global(svg) {
      height: 30px;
      aspect-ratio: 3/2;
      max-width: unset;
      max-height: unset;
      background-color: yellow;
    }
  }
</style>
