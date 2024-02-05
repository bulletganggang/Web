<script setup>
import { inject } from 'vue';
const test = inject('test')
const count = inject('count')
const changeCount = inject('changeCount')
</script>

<template>
  <div>
    <h1>this is son inject {{ test }} - {{ count }}</h1>
    <button @click="changeCount(count + 100)">addCount</button>
  </div>
</template>