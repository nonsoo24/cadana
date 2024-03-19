<template>
  <section class="flex justify-center items-center mt-60">
    <div class="w-[400px] h-[400px]">
      <p class="text-textColor-1 font-bold text-size1">
        {{ $route.meta.pageTitle }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppDashboard",
};
</script>
