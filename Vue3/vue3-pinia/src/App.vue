<script setup>
import { useCounterStore } from './stores/counter'

const CounterStore = useCounterStore()

// import { storeToRefs } from 'pinia';
// import { useChannelStore } from './stores/channel'
// const ChannelStore = useChannelStore()
// const { channelList } = storeToRefs(ChannelStore)
// const { getchannelList } = ChannelStore

</script>

<template>
  <div>
    <h1>{{ CounterStore.count }} - {{ CounterStore.doubleCount }}</h1>
    <button @click="CounterStore.increment()">+++</button>
  </div>

  <!-- <div>
    <button @click="getchannelList()">tap here to get list</button>
    <ul>
      <li v-for="item in channelList.channels" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div> -->
</template>

<style scoped></style>
