<script setup>
// import sonProp from './components/sonProp.vue'
// reactive 接收对象类型数据
// import { reactive } from 'vue';
// const state = reactive({
//   count:100
// })

// ref 接收简单/复杂类型
// import { ref } from 'vue';
// const count = ref(100)
// console.log(count.value);

// computed
// import { computed } from 'vue';
// import { ref } from 'vue';
// const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
// const num = computed(() => {
//   return list.value.filter(item => item >= 3)
// })
// console.log(num.value);

// watch
// import { ref, watch } from 'vue';

// const count = ref(0)
// const name = ref('name')

// // 监视单个对象
// // watch(count, (newValue, oldValue) => {
// //   console.log(newValue, oldValue);
// // })

// // 监视多个对象
// // watch([count, name], ([newName, oldName], [newCount, oldCount]) => {
// //   console.log(newName, oldName, newCount, oldCount);
// // })

// // 监视对象
// const user = ref({
//   name: '778',
//   age: 123
// })

// watch(() => user.value.age, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// })

// 父传子 & 子传父
// import { ref } from 'vue';

// const count = ref(100)

// const getCount = (value) => {
//   count.value = value
// }

// 模板引用
// import { onMounted, ref } from 'vue';
// import sonRef from './components/sonRef.vue';
// const text = ref(null)
// const son = ref(sonRef)
// onMounted(() => {
//   // text.value.focus()
// })

// provide & inject
// import sonInject from './components/sonInject.vue';
// import { provide, ref } from 'vue';
// const count = ref(100)
// const changeCount = (newCount) => {
//   count.value = newCount
// }
// provide('test', 778)
// provide('count', count)
// provide('changeCount', changeCount)

// defineOptions
// defineOptions({
//   name: 'defineOptions'
// })

</script>

<template>
  <!-- ref -->
  <!-- <div>
    {{ count }}
    <button @click="count++">+</button>
  </div> -->

  <!-- computed -->
  <!-- <div>
    <h1>{{ num }}</h1>
  </div> -->

  <!-- watch -->
  <!-- <div>
    <h1>{{ name }}</h1>
    <button @click="name = 'test'">changeName</button>
    <br>
    <h1>{{ count }}</h1>
    <button @click="count++">changeCount</button>
    <br>
    <h1>{{ user }}</h1>
    <button @click="user.age++">changeUser</button>
  </div> -->

  <!-- 父传子 -->
  <!-- <div>
    <sonProp test="778" :count="count" @getCount="getCount"></sonProp>
  </div> -->

  <!-- 模板引用 -->
  <!-- <div>
    <input type="text" name="" id="" ref="text">
    <button @click="text.focus()">tap here to focus</button>
    <sonRef ref="son"></sonRef>
    <button @click="console.log(son)">tap here to change sonRef</button>
  </div> -->

  <!-- provide & inject -->
  <!-- <div>
    <sonInject />
  </div> -->

  <!-- Pinia -->
  <div>

  </div>
</template>

<style lang="scss" scoped></style>