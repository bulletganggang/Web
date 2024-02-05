<script setup>
const props = defineProps({
  test: String,
  count: Number
})
const emit = defineEmits(['getCount'])

</script>

<template>
  <div>
    <h1>this is son prop</h1>
    {{ test }}
    {{ count }}
    <button @click="emit('getCount', count - 1)">Count--</button>
  </div>
</template>

<style lang="scss" scoped></style>