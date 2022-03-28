<script setup>
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  const locale = zhCN
  const store = useStore()
  let spinning = computed(() => store.state.spinning)
</script>

<template>
  <a-config-provider :locale="locale">
    <a-button type="primary">Primary Button</a-button>
    <a-spin :spinning="spinning">
      <router-view />
    </a-spin>    
  </a-config-provider>
  
</template>

