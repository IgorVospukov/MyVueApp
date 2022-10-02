<script setup></script>
<template>
  <div class="button-right">
    <button type="button" class="btn btn-secondary btn-lg myclass2">
      <slot :title="title"></slot>
    </button>
  </div>
</template>
<style scoped>
.myclass2 {
  width: 200px;
  height: 40px;
  background-color: #ffffff;
  color: #3d3d3d;
}
</style>
