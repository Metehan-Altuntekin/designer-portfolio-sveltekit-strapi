<script lang="ts">
  import 'swiper/css'
  import 'swiper/css/autoplay'
  import 'swiper/css/pagination'
  import { Swiper, SwiperSlide } from 'swiper/svelte'
  import { Pagination, Autoplay } from 'swiper'

  import { selectedProject, closeModal } from '$lib/stores/projectDetailsModal'
  import { getService } from '$lib/stores/services'
  import { getSkill } from '$lib/stores/skills'
</script>

{#if $selectedProject}
  <div class="wrapper" on:click|self={closeModal}>
    <div class="container">
      <figure>
        <div class="slider">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, type: 'bullets' }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
          >
            {#each $selectedProject.images as image}
              <SwiperSlide><img src={image} alt="" style="width: 100%;" /></SwiperSlide>
            {/each}
            {#each $selectedProject.videos as video}
              <SwiperSlide>
                <video controls>
                  <source src={video} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </SwiperSlide>
            {/each}
          </Swiper>
        </div>

        <figcaption>
          <h1 class="name">{$selectedProject.name}</h1>
          <h2 class="services">
            {#each $selectedProject.relatedServices as serviceId (serviceId)}
              <span>{getService(serviceId)?.name}</span>
            {/each}
          </h2>
          <ul class="skills-list">
            {#each $selectedProject.relatedSkills as skillId (skillId)}
              {@const { name, icon } = getSkill(skillId)}
              <li>
                <img src={icon} alt={name} title={name} />
              </li>
            {/each}
          </ul>
          <ul class="tags-list">
            {#each $selectedProject.relatedTags as tag (tag)}
              <li><span class="chip">{tag}</span></li>
            {/each}
          </ul>
          <p class="description">{$selectedProject.description}</p>
        </figcaption>
      </figure>
    </div>
  </div>
{/if}

<style lang="scss">
  // wrapper covers the entire screen
  .wrapper {
    --bg-color: #222228;
    --slider-aspect-ratio-desktop: 2 / 1;
    --slider-aspect-ratio-mobile: 1;

    --project-name-font-size: clamp(1.5rem, 2vw, 2rem);
    --services-font-size: clamp(1rem, 1.5vw, 1.5rem);
    --skill-icon-size: clamp(1.5rem, 2vw, 2.5rem);

    position: fixed;
    inset: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #0007;
  }

  // Container is for the modal
  .container {
    background-color: var(--bg-color);
    width: 90%;
    max-height: 90%;
    @include lg {
      width: auto;
      height: auto;
      max-width: 1000px;
    }
    overflow: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #0007;
  }

  // slider
  .slider :global(.swiper-slide) {
    margin-bottom: 36px; // margin for pagination to be visible
    width: 100%;
    aspect-ratio: var(--slider-aspect-ratio-mobile);

    @include sm {
      aspect-ratio: var(--slider-aspect-ratio-desktop);
    }
  }

  .slider video,
  .slider img {
    width: 100%;
    height: 100%;
  }

  .slider :global(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 0.5;
  }
  .slider :global(.swiper-pagination-bullet-active) {
    opacity: 1;
  }

  // text content
  figcaption {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      'name name'
      'desc desc'
      'serv serv'
      'skil tags';
    align-content: space-between;

    padding: clamp(1rem, 4vw, 2rem);
    padding-top: 16px;

    @include sm {
      grid-template-rows: repeat(3, auto);
      grid-template-columns: repeat(2, auto) 50%;
      grid-template-areas:
        'name name desc'
        'serv serv desc'
        'skil tags desc';
      column-gap: 24px;
    }
  }

  .name {
    grid-area: name;
    margin-bottom: 1em;

    @include title();
    font-size: var(--project-name-font-size);
    font-weight: 500;

    @include sm {
      margin-bottom: 0;
    }
  }
  .services {
    grid-area: serv;
    display: flex;
    gap: 1em;
    margin-bottom: 1rem;

    font-size: var(--services-font-size);
    font-weight: 500;
    color: #999;

    span {
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
    }
  }
  .skills-list {
    grid-area: skil;
    display: flex;
    align-items: end;
    gap: 0.5em;

    li {
      display: block;
      height: var(--skill-icon-size);
    }
  }
  .tags-list {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;

    justify-content: end;
    align-items: end;
  }
  .description {
    grid-area: desc;
    @include paragraph(2, Poppins);
    @include sm {
      margin-bottom: 0;
    }
  }
</style>
