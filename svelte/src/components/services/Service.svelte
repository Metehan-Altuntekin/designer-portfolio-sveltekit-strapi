<script lang="ts">
  import type { Service } from '../../types'
  export let service: Service

  const { id, name, icon, textPrimary, textSecondary, relatedSkills, relatedTags }: Service = service

  import Skills from './Skills.svelte'
  import Tags from './Tags.svelte'
  import Project from './Project.svelte'

  import { sortedProjects } from '../../stores/projects'

  $: projects = $sortedProjects[id]
</script>

<article>
  <section class="content">
    <h1>
      <img src={icon} alt={name} />
      <span class="icon">{name}</span>
    </h1>
    <p class="primary">{textPrimary}</p>
    <p class="secondary">{textSecondary}</p>
    <Skills serviceId={service.id} skillIds={relatedSkills} />
    <Tags tags={relatedTags} />

    <div class="CTAs">
      <a class="button md" href="#contact">Get an Offer</a>
      <a class="button secondary md" href="#">Portfolio</a>
    </div>
  </section>

  <section class="portfolio">
    {#each projects as project}
      <Project {project} />
    {/each}
  </section>
</article>

<style lang="scss">
  article {
    gap: 5vw;
    margin-bottom: 10vh;

    @include flex(true, flex-start);

    > .content {
      position: sticky;
      top: 15vh;
      left: 0;
      display: flex;
      flex-direction: column;

      h1 {
        @include title;
        display: flex;
        align-items: center;
        justify-content: start;

        img {
          height: 1em;
        }
      }

      p {
        &.primary {
          @include paragraph(1);
        }
        &.secondary {
          @include paragraph(2, Montserrat);
        }
      }

      .CTAs {
        display: flex;
        justify-self: start;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;

        @include sm {
          flex-direction: row;
        }
      }
    }

    > .portfolio {
      background-color: #fff1;
      height: 200vh;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      right: 0;
    }
  }
</style>
