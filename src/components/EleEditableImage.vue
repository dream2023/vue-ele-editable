<template>
  <ele-gallery
    :sliceSingle="true"
    :source="displayValue"
    :title="title"
    style="line-height:1em"
    v-bind="attrs"
  />
</template>

<script>
import EleEditableMixin from '../EleEditableMixin'
import EleGallery from 'vue-ele-gallery'

export default {
  name: 'EleEditableImage',
  components: {
    EleGallery
  },
  mixins: [EleEditableMixin],
  data () {
    return {
      defaultAttrs: {
        size: 50
      }
    }
  }
}
</script>
