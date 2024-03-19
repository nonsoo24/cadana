<template>
    <nav className="fixed h-12 p-5 bg-white w-auto border border-b-2 border-grey-200 flex  justify-between items-center">
        <p>{{$route.meta.pageTitle || 'Not Found'}}</p>
        <!-- <div>
            <AppIcon name="moon" />
        </div> -->
      </nav>
</template>

<script>
// import AppIcon from './AppIcon.vue'
export default {
  name: 'NavBar',
  components: {
    // AppIcon
  },
  props: {
    msg: String
  }
}
</script>

