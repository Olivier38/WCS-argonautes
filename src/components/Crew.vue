<script setup lang="ts">
import type { NameInterface } from "@/name.interface";
import { db } from "@/firebase";

import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";
import CrewList from "./CrewList.vue";

const props = defineProps<{
  names: NameInterface[];
}>();
const nameText = ref<string>("");

const addName = () => {
  addDoc(collection(db, "crew"), {
    name: nameText.value,
  });
  nameText.value = "";
  console.log(props.names);
};
</script>

<template>
  <div class="full-w d-flex flex-column align-items-center">
    <div class="form-container d-flex align-items-center">
      <form action="" @submit.prevent="addName()">
        <input
          placeholder="Ulysse"
          type="text"
          v-model="nameText"
          class="mr-30"
        />
        <button class="btn" :disabled="!nameText">Envoyer</button>
      </form>
    </div>
    <div class="container mt-40">
      <CrewList :names="names" :nameText="nameText" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  font: 18px var(--font-family-1) 700;
  padding: 10px 50px;
  background-color: #f76c6c;
  color: white;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #f85959;
  }
}
input {
  height: 50px;
  width: 500px;
  border: 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 8px 0 rgba(32, 33, 36, 0.2);
}

input::placeholder {
  font-size: 14px;
  padding-left: 10px;
  color: #f76c6c;
}
.container {
  height: 100%;
  width: 100%;
  background-color: var(--gray-1);
}

.form-container {
  min-height: 200px;
}
</style>
