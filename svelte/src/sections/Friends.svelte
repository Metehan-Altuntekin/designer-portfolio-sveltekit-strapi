<script lang="ts">
  import { CONTENT } from '../config'

  const { heading, subheading, friendsList: friends } = CONTENT.sections.friends

  import Friend from '$lib/components/friends/Friend.svelte'
</script>

<section id="friends">
  <h1>{heading}</h1>
  <h2>{subheading}</h2>
  <ul class="friends-list">
    {#each friends as friend}
      <Friend {friend} />
    {/each}
  </ul>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .friends-list {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  h1 {
    @include title;
    font-size: clamp(2rem, 5vw, 4rem);
    // margin-top: 2em;
  }

  h2 {
    color: var(--color-primary);
    font-size: clamp(1rem, 2.5vw, 2rem);
    line-height: 1;
    margin-bottom: 2em;
  }
</style>
