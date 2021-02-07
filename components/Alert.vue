<template>
  <div
    :class='`bg-${color}-200 border-t-4 border-${color} rounded-b text-${color}-600 px-4 py-3 shadow-md my-2 z-10 transition ease-in duration-700`'
    role='alert'>
    <div class='flex'>
      <div>
        <slot>
          <p class='font-bold'>Our privacy policy has changed</p>
          <p class='text-sm'>Make sure you know how these changes affect you.</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: { color: { type: String, default: 'teal' } }
}
</script>

<style scoped>

</style>
