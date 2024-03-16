<template>
  <div :class="[wrapperClass, 'rounded-full']">
    <figure>
      <img :src="image" :alt="alt" :class="imgClass" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    image: String,
    alt: String,
    imgClass: String,
    wrapperClass: String,
  },
};
</script>
