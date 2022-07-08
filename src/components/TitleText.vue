<template>
  <div class="title">
    <p class="title-text">
      <slot name="title-text"></slot>
    </p>
    <p class="go">
      <slot name="go"></slot>
      <span>
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </span>
    </p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.title {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px 0;
  .title-text {
    color: #666;
    font-size: 24px;
    padding-left: 15px;
    border-left: 5px solid #5685fe;
    cursor: pointer;
  }
  .go {
    display: flex;
    align-items: center;
    span {
      font-size: 12px;
      color: #666;
    }
    cursor: pointer;
  }
}
</style>