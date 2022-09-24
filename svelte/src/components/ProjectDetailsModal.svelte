<script lang="ts">
  import { identity } from 'svelte/internal'
  import { Swiper, SwiperSlide } from 'swiper/svelte'

  import { selectedProject, closeModal } from '../stores/projectDetailsModal'
  import { getService } from '../stores/services'
  import skills, { getSkill } from '../stores/skills'
</script>

{#if $selectedProject}
  <div class="bg-wrapper" on:click|self={closeModal}>
    <div class="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        on:slideChange={() => console.log('slide change')}
        on:swiper={(e) => console.log(e.detail[0])}
      >
        <SwiperSlide>a</SwiperSlide>
        <SwiperSlide>b</SwiperSlide>
        <SwiperSlide>c</SwiperSlide>
        <SwiperSlide>d</SwiperSlide>
        <SwiperSlide>e</SwiperSlide>
      </Swiper>

      <figure>
        <figcaption>
          <div class="left-col">
            <h1>{$selectedProject.name}</h1>
            <h2>
              {#each $selectedProject.relatedServices as serviceId (serviceId)}
                <span>{getService(serviceId).name}</span>
              {/each}
            </h2>
            <ul class="skills-list">
              {#each $selectedProject.relatedSkills as skillId (skillId)}
                {@const { name, icon } = getSkill(skillId)}
                <li>
                  <img src={icon} alt={name} />
                </li>
              {/each}
            </ul>
            <ul class="tags-list">
              {#each $selectedProject.relatedTags as tag (tag)}
                <li><span class="chip">{tag}</span></li>
              {/each}
            </ul>
          </div>
          <div class="right-col">
            <p>{$selectedProject.description}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
{/if}

<style lang="scss">
  .bg-wrapper {
    background-color: #0007;
    position: fixed;
    inset: 0;
  }
</style>
