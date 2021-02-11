<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: process.env.VUE_APP_NAME,
    }
  }
}
</script>
