<script setup lang="ts"></script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h2>Ajouter un(e) argonaute</h2>
    <div class="d-flex flex-row m-30">
      <input class="mr-40" type="text" placeholder="Ulysse" />
      <button class="btn" type="submit">Envoyer</button>
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
</style>
