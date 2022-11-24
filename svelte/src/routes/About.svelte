<script lang="ts">
  import { OWNER } from '$lib/config'
  import content from '$lib/stores/content'

  const fullName = OWNER.name + ' ' + OWNER.surname
  $: heading = $content.sections.about.heading
  $: paragraph = $content.sections.about.paragraph
  $: image = $content.sections.about.image
</script>

<section id="about">
  <h1 class="heading">{heading}</h1>
  <div class="image"><img src={image} alt={fullName} title={fullName} /></div>
  <p class="paragraph">{paragraph}</p>
</section>

<style lang="scss">
  section {
    --about-heading-size: clamp(2rem, 5vw, 5rem);
    --about-image-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0));

    @include section;

    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    row-gap: 1rem;

    @include lg {
      flex-wrap: nowrap;

      @include flex(true, start, center);
    }
  }

  .heading {
    color: #fffa;
    width: 60%;
    line-height: 1;
    font-size: var(--about-heading-size);

    @include lg {
      width: unset;
    }
  }

  .image {
    // sided on the right on mobile
    width: 40%;

    // mask the image with a gradient opacity
    // to make it look like faded out in the background
    mask-image: var(--about-image-mask);
    -webkit-mask-image: var(--about-image-mask);

    // centered on desktop
    @include lg {
      width: unset;
    }
  }

  .paragraph {
    @include paragraph(1);

    text-align: center;

    @include lg {
      text-align: end;
    }
  }
</style>
