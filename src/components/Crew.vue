<script setup lang="ts"></script>

<template>
  <div class="bg">
    <h2 class="d-flex justify-content-center pt-30">Membres de l'équipage</h2>
    <div class="container">
      <div class="crew-container d-flex align-items-center pt-30">
        <p>John Doe</p>
        <p>John Doe</p>
        <p>John Doe</p>
        <p>John Doe</p>
        <p>John Doe</p>
        <p>John Doe</p>
        <p>John Doe</p>
        <p>John Doe</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.crew-container {
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  text-align: center;
}
.container {
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  margin: 0 auto;
  max-width: 80%;
  width: 100%;
}
.bg {
  background-color: var(--gray-1);
}
</style>
