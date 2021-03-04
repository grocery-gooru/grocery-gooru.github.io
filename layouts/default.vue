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
          href: this.canonicalUrl
        }
      ]
    }
  },
  computed: {
    canonicalUrl(){
      const baseUrl = 'https://grocery-guru.com'
      if (this.$route.path === '/'){
        return baseUrl
      }
      return baseUrl + this.$route.path + "/"
    }
  }
}
</script>
