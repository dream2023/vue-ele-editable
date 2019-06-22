<template>
  <!-- newValue 和 handleChange 和 attrs 都已经在mixin中实现, 直接引用即可 -->
  <el-rate
    :colors="colors"
    @input="handleChange"
    v-bind="attrs"
    v-model="newValue"
  ></el-rate>
</template>

<script>
// 自定义组件
// 正式环境下, 应该这样引用:
// import EleEditableMixin from 'vue-ele-editable/src/EleEditableMixin'
import EleEditableMixin from '../src/EleEditableMixin'

export default {
  name: 'CustomRate',
  mixins: [EleEditableMixin],
  data () {
    return {
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  }
}
</script>
