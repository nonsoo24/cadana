<template>
    <div :class="wrapperClasses">
      <div :class="dotClasses"></div>
    </div>
  </template>

  <script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: "bg-secondary",
      },
      dotColor: {
        type: String,
        default: "bg-white",
      },
      dotSize: {
        type: String,
        default: "w-5 h-5",
      },
      size: {
        type: String,
        default: "w-[19.2px] h-[19.2px]",
      },
      position: {
        type: String,
        default: "right-8 top-10",
      },
    },
    computed: {
      wrapperClasses() {
        return [
          this.backgroundColor,
          this.size,
          "rounded-full",
          "flex",
          "items-center",
          "justify-center",
          "absolute",
          this.position,
        ];
      },
      dotClasses() {
        return [
          this.dotColor,
          this.dotSize,
          "rounded-full",
        ];
      },
    },
  };
  </script>
