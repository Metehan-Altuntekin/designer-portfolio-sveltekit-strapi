<script lang="ts">
  import { CONTENT } from '../config'

  const { name, surname } = CONTENT.owner
  const { heading, text, image } = CONTENT.sections.about
</script>

<section id="about">
  <h1>{heading}</h1>
  <div class="image"><img src={image} alt={name + ' ' + surname} title={name + ' ' + surname} /></div>
  <p>{text}</p>
</section>

<style lang="scss">
  section {
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

  h1 {
    color: #fffa;
    width: 60%;
    line-height: 1;
    font-size: clamp(2rem, 5vw, 5rem);

    @include lg {
      width: unset;
    }
  }

  .image {
    width: 40%;

    @include lg {
      width: unset;
    }
  }

  p {
    @include paragraph(1);

    text-align: center;

    @include lg {
      text-align: end;
    }
  }
</style>
