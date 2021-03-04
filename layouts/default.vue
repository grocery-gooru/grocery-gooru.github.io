<template>
  <div>
    <index-navbar />
    <Nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.grocery-guru.com' + this.$route.path + '/'
        }
      ]
    }
  }
}
</script>
