<script lang="ts">
  import 'swiper/css'
  import 'swiper/css/autoplay'
  import 'swiper/css/pagination'
  import { Swiper, SwiperSlide } from 'swiper/svelte'
  import { Pagination, Autoplay } from 'swiper'

  import { selectedProject, closeModal } from '../stores/projectDetailsModal'
  import { getService } from '../stores/services'
  import skills, { getSkill } from '../stores/skills'

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
          </Swiper>
        </div>

        <figcaption>
          <h1 class="name">{$selectedProject.name}</h1>
          <h2 class="services">
            {#each $selectedProject.relatedServices as serviceId (serviceId)}
              <span>{getService(serviceId).name}</span>
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
  .wrapper {
    background-color: #0007;
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  // Container is for the modal
  .container {
    background-color: #222228;
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

    // Make the scrollbar style match the rest of the modal
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-track {
      background: #0006;
    }
    &::-webkit-scrollbar-thumb {
      background: #fff7;
      border-radius: 99px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #0007;
    }
    // Scrollbar for Firefox
    scrollbar-color: #fff7 #0006;
    scrollbar-width: thin;
  }

  .slider :global(.swiper-slide) {
    margin-bottom: 36px; // margin for pagination to be visible
    width: 100%;
    aspect-ratio: 1/1;

    @include sm {
      aspect-ratio: 2 / 1;
    }
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

  figcaption {
    padding: clamp(1rem, 4vw, 2rem);
    padding-top: 16px;
    display: grid;

    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      'name name'
      'desc desc'
      'serv serv'
      'skil tags';
    align-content: space-between;

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
    @include title();
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 500;
    margin-bottom: 1em;
    @include sm {
      margin-bottom: 0;
    }
  }
  .services {
    grid-area: serv;
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    font-weight: 500;
    margin-bottom: 1rem;
    color: #999;
    display: flex;
    gap: 1em;

    span {
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
    }
  }
  .skills-list {
    grid-area: skil;
    display: flex;
    gap: 0.5em;

    li {
      display: block;
      height: 2em;
    }
    align-items: end;
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
