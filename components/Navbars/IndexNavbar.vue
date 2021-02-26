<template>
  <nav
    class="top-0 sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white bg-opacity-100 transition duration-300 ease-in-out shadow-xl"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <img
            class="w-56 hidden sm:block"
            src="@/assets/img/logo.png"
            alt="grocery-guru logo"
          />
          <img
            class="h-12 block sm:hidden"
            src="@/assets/img/logo-mobile.png"
            alt="grocery-guru logo"
          />
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <!--        <ul class="flex flex-col lg:flex-row list-none mr-auto">-->
        <!--          <li class="flex items-center">-->
        <!--            <a-->
        <!--              class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"-->
        <!--              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index-navbar"-->
        <!--            >-->
        <!--              <i-->
        <!--                class="text-gray-500 far fa-file-alt text-lg leading-lg mr-2"-->
        <!--              />-->
        <!--              Docs-->
        <!--            </a>-->
        <!--          </li>-->
        <!--        </ul>-->
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <!--            <index-dropdown />-->
          </li>
          <li class="flex items-center">
            <a
              class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://fb.me/grocery.guru.za"
              target="_blank"
            >
              <i class="text-gray-500 fab fa-facebook text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Facebook Page</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://api.whatsapp.com/send?phone=27768095108"
              target="_blank"
            >
              <i class="text-gray-500 fab fa-whatsapp text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">WhatsApp</span>
            </a>
          </li>

          <!--          <li class="flex items-center">-->
          <!--            <a-->
          <!--              class="hover:text-gray-600 text-gray-800 px-3 py-2 flex items-center text-xs uppercase font-bold"-->
          <!--              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index-navbar"-->
          <!--              target="_blank"-->
          <!--            >-->
          <!--              <i class="text-gray-500 fab fa-github text-lg leading-lg" />-->
          <!--              <span class="lg:hidden inline-block ml-2">Star</span>-->
          <!--            </a>-->
          <!--          </li>-->

          <li class="flex items-center">
            <!--            <button-->
            <!--              class='bg-everglade-500 text-white active:bg-everglade-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'-->
            <!--              type='button'-->
            <!--            >-->
            <!--              LOGIN-->
            <!--            </button>-->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from '@/components/Dropdowns/IndexDropdown.vue'

export default {
  name: 'IndexNavbar',

  components: {
    IndexDropdown,
  },

  props: { solid: { type: Boolean, default: false } },

  data() {
    return {
      view: {
        atTopOfPage: true,
      },

      navbarOpen: false,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
  },
}
</script>

<style scoped lang="postcss">
nav {
  z-index: 10;
}
</style>
