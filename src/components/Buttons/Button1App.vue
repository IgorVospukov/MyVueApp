<script setup></script>
<template>
  <div class="button-left">
    <button type="button" class="btn btn-primary btn-lg myclass">
      <slot :title="title"></slot>
    </button>
  </div>
</template>
<style scoped>
.button-left {
  margin-right: 10px;
}
.myclass {
  width: 200px;
  height: 40px;
}
</style>
