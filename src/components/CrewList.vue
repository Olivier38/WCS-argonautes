<script setup lang="ts">
import type { NameInterface } from "@/name.interface";

defineProps<{
  names: NameInterface[];
  nameText: string;
}>();
</script>

<template>
  <h2 class="full-w d-flex justify-content-center mt-40 mb-20">
    Membres de l'équipage
  </h2>
  <div class="container d-flex flex-rows justify-content-center pb-30">
    <div v-for="n in names">
      <p>{{ n.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-auto-rows: 30px;
  grid-gap: 10px;
  text-align: center;
  max-width: 50%;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
