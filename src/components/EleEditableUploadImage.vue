<template>
  <ele-upload-image
    :isShowTip="false"
    :size="60"
    @input="handleChange"
    class="editable-upload-image"
    v-bind="attrs"
    v-model="newValue"
  />
</template>

<script>
import EleUploadImage from 'vue-ele-upload-image'
import EleEditableMixin from '../EleEditableMixin'

export default {
  name: 'EleEditableUploadImage',
  mixins: [EleEditableMixin],
  components: {
    EleUploadImage
  }
}
</script>

<style>
.editable-upload-image
  .el-upload-list--picture-card
  .el-upload-list__item-actions
  span
  + span {
  margin-left: 8px;
}
</style>
