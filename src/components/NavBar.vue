<template>
    <nav className="fixed h-6 py-9 px-7 bg-white w-full border border-b border-grey-1 flex justify-between items-center ">
        <p class=" font-semibold text-size1 text-textColor-1">{{$route.meta.pageTitle || ''}}</p>
        <div class="flex items-center gap-11">
          <img :src="Moon" alt="dropdown-icon" width="25px" height="25px" class="cursor-pointer" />
          <AppDropdown :options="dropdownOptions" />
        </div>
      </nav>
</template>

<script>
import {ref} from 'vue'
import AppDropdown from '../components/AppDropdown.vue'
import Moon from  '../assets/moon.png'
export default {
  name: 'NavBar',
  components: {
    AppDropdown
  },
  setup() {
    const dropdownOptions = ref([
      {
        label: 'Profile',
        route: '/'
      },
      {
        label: 'Settings',
        route: '/'
      },
    ])

    return {
      dropdownOptions,
      Moon
    }
  }
}
</script>

