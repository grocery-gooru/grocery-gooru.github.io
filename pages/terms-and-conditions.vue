<template>
  <div class='text-xl'>
    <index-navbar :solid='true' />

    <section class='py-20 pb-5 bg-gradient-to-r from-everglade-500 to-cherrywood-500 overflow-hidden mb-5'>
      <div class='container mx-auto mt-10'>
        <h1 class='text-white text-6xl'>Terms & Conditions</h1>
      </div>
    </section>
    <section class='min-h-screen'>
      <div class='container mx-auto pb-64'>
        <h2 class='font-bold'>TGG SERVICE AGREEMENT DECLARATION.</h2>
        <p>
          The following serves as an official Memorandum Of Understanding
          Agreed upon by. ( client ) and The <b>Grocery Guru Pty Ltd.</b>
        </p>
        <p>
          The Client agrees to enter into a business agreement with The <b>Grocery Guru Pty Ltd</b> for a
          minimum term of 3 months.
          The client hereby agrees to be enrolled into the membership program.
          Each Membership Program is tailored to suit the best interests of each client. Each Membership
          is Subscription based.
        </p>
        <p>
          The monthly Subscription fees for the above mentioned membership program are as follows:<br />
          1) Fixed installment due in advance for each month by no later than the 28th of
          the previous month.<br />
          2) Fixed Point Of Destination Delivery / Collection fee.
          All errands and other specific client requests are personally managed by a designated client
          liaison expert.
        </p>
        <p>
          The management of client funds is done solely by the company and with full transparency.
          The Company hereby confirms that it holds active loyalty agreements with various retail outlets
          across all sectors which means that in many instances due solely to the extensive amount of
          financial transactions taking place we often are rewarded with promotional discounts and other
          such benefits.
        </p>
        <p>
          These loyalty discounts are randomly allocated by the retailer and as such these amounts will
          serve to cover various and essential administration costs including but not limited to; secured
          parking fees; master/Visa card transaction fees; merchant fees; petrol price escalation. Any
          other fees incurred as a result of day to day running of the business.
          Due to certain Tax laws it is imperative that the Company should at all times be able to provide
          a clear and reliable account of any movement of funds and as such; The company will retain
          the receipt of purchase; and the Company will issue the client an official Tax invoice for the
          service rendered in the acquisition of goods purchased for and on behalf of the client.
          This invoice will be sent via email and is for the clients reference.
          This Invoice will be made out according to the full cost of the goods acquired before any loyalty
          discounts are issued.
        </p>
        <p>
          In accord with this, the Company hereby declares that; Each membership program subscription
          fee that is agreed upon between both parties will be fully inclusive, with no additional fees
          charged for the service.
        </p>
        The Client will derive no benefit from the loyalty rewards. These rewards will serve as the
        buffer mechanism specifically purposed to pay for the various banking and administrative
        expenses which will be incurred by the Company.
        <p>
          In the event that the Company for whatever reason undertakes to pay in advance for the
          acquisition of goods as requested by the Client, either by way of cash or credit / debit card
          transaction; the Client then hereby agrees that an additional levy of 20 percent be added to the
          final cost and paid immediately upon the delivery of acquired goods.
          The Company hereby declares that all persons represented by the Company are fully endorsed
          by the Company and therefore are fully responsible and will be held accountable in every way
          possible according to the rule of law.
        </p>
        <p>
          The Company further assures that it will act at all times in such a way that preserves and
          protects the integrity and the best interest of its Clients financially and otherwise.
          This Memorandum of Understanding is to be signed by the Client and is deemed thereafter to
          be legally binding.
        </p>
        <p>
          I, ( Client ) hereby acknowledge that I have read and
          agreed to the terms and conditions as set out here above.
          Signed. On. Day of. (Month) .
          (Year).
        </p>

      </div>
    </section>

    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from '@/components/Navbars/IndexNavbar.vue'
import FooterComponent from '@/components/Footers/Footer.vue'

import patternVue from '@/assets/img/pattern_vue.png'
import backgroundImagePath from '@/assets/img/grocery-guru-concierge.webp'
import componentBtn from '@/assets/img/component-btn.png'
import componentProfileCard from '@/assets/img/component-profile-card.png'
import componentInfoCard from '@/assets/img/component-info-card.png'
import componentInfo2 from '@/assets/img/component-info-2.png'
import componentMenu from '@/assets/img/component-menu.png'
import componentBtnPink from '@/assets/img/component-btn-pink.png'
import documentation from '@/assets/img/documentation.png'
import login from '@/assets/img/login.jpg'
import profile from '@/assets/img/profile.jpg'
import landing from '@/assets/img/landing.jpg'

export default {
  data() {
    return {
      patternVue,
      backgroundImagePath,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing
    }
  },
  components: {
    IndexNavbar,
    FooterComponent
  },
  head() {
    return {
      title: 'Terms & Conditions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Service Agreement Declaration.The following serves as an official Memorandum Of Understanding Agreed upon by the ( client ) and The Grocery Guru Pty Ltd.'
        }
      ]
    }
  }
}
</script>

<style lang='postcss'>
p {
  padding-bottom: 1rem;
  padding-top: 1rem;
}
</style>
