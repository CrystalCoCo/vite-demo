<template>
  <a-button type="primary">{{text}}</a-button>
  <a-table :dataSource="dataSource" :columns="columns" />
  <a-pagination v-model:current="current" show-quick-jumper :total="500" />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { getArticleList, getArticleList1, getArticleList2, login, getInfo } from '../api/home'
  const text = ref('哈哈哈')
  const current = ref(1)
  onMounted(async() => {
    //await getArticleList({ flag: 'knowledge', pageSize: 8 })
    //await getArticleList1({ category: 'YI_MARKET' })
    await getArticleList2()
    //await getInfo()
    //await login({ username: 'root', password: 'yqy123321' })
    console.log(1111111111111111111111)
  })
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  
</script>