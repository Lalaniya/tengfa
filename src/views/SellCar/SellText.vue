<template>
  <div class="text">
    <slot name="text-title"></slot>
    <slot name="incar"></slot>
    <div class="box-ol">
        <slot name="caiol"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.text{
    width: 590px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 0 10px #eff1fa;
    background-color: #fff;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 30px 50px;
    .box-ol{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>