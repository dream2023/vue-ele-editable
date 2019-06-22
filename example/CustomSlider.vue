<template>
  <!-- newValue 和 handleChange 和 attrs 都已经在mixin中实现, 直接引用即可 -->
  <el-slider
    @change="handleChange"
    style="min-width: 100px"
    v-model="newValue"
  ></el-slider>
</template>

<script>
// 自定义组件
// 正式环境下, 应该这样引用:
// import EleEditableMixin from 'vue-ele-editable/src/EleEditableMixin'
import EleEditableMixin from '../src/EleEditableMixin'

export default {
  name: 'CustomSlider',
  mixins: [EleEditableMixin]
}
</script>
