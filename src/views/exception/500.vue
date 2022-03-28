<template>
  <a-result status="500" title="500" sub-title="抱歉，服务器出错了">
    <template #extra>
      <a-button type="primary" @click="toHome">
        返回首页
      </a-button>
    </template>
  </a-result>
</template>

<script setup>
  const router = useRouter()
  const toHome  = () => {
    router.push({ path: '/' })
  }
</script>