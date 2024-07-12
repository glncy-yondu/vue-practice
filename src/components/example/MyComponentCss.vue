<template>
  <article>
    <header>
      <img src="@/assets/announcement.svg" />
      <div>
        <h2>Campaigns</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, consequatur, autem maiores
          odio voluptatum iure perspiciatis temporibus cupiditate aliquam magni deleniti? Beatae
          deleniti, iusto quo quam ea quae incidunt amet.
        </p>
      </div>
      <img src="@/assets/right-arrow.svg" />
    </header>
    <section>
      <div>
        <p>100m</p>
        <p>Running</p>
      </div>
      <div>
        <p>9m</p>
        <p>Scheduled</p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped>
article {
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border: 1px solid #e8e8e8;
  border-radius: 12px 12px 24px 12px;
  max-width: 396px;
}

header {
  display: flex;
  align-items: center;
  gap: 0.5em;

  h2 {
    font-size: 1.5em;
    font-weight: 900;
    line-height: 30px;
    letter-spacing: -2%;
  }

  p {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-width: 260px;
  }
}

section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  --tw-border-opacity: 1;
  border-color: rgb(232 232 232 / var(--tw-border-opacity));

  div {
    display: flex;
    flex-direction: column;

    &:nth-child(2) {
      padding-left: 1.5em;
      --tw-divide-x-reverse: 0;
      border-right-width: calc(1px * var(--tw-divide-x-reverse));
      border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }

    p {
      font-size: 14px;

      &:nth-child(1) {
        font-size: 39px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-weight: 500;
      }
    }
  }
}
</style>
