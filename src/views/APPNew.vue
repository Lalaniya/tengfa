<template>
  <div v-if="obj" class="boxz">
    <div v-html="obj.content"></div>
  </div>
</template>

<script setup>
import { onBeforeMount , computed} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const route = useRoute()
const store = useStore()
const obj = computed(()=>{
    return store.state.getAppNew
})
onBeforeMount( () => {
    store.dispatch('reqgetAppNew',route.params.id)
})
</script>

<style lang="scss" scoped>
.boxz{
    width: 1200px;
    margin: 0 auto;
}
</style>