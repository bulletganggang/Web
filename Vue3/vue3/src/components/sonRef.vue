<script setup>
const count = 123
const name = '778'

defineExpose({
  count,
  name
})
</script>

<template>
  <div>
    <h1>this is son ref {{ count }} - {{ name }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>