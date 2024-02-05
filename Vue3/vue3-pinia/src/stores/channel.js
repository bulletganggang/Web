import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useChannelStore = defineStore('counter', () => {

  const channelList = ref([])

  const getchannelList = () => {
    axios.get('http://geek.itheima.net/v1_0/channels')
      .then(res => {
        console.log(res.data.data)
        channelList.value = res.data.data
      })
      .catch(err => {
        console.error(err);
      })
  }

  return {
    channelList,
    getchannelList
  }
})
