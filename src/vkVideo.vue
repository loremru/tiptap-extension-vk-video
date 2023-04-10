<template>
  <node-view-wrapper>
    <iframe
      v-bind="props.node?.attrs"
      width="100%"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
      style="aspect-ratio: 16 / 9"
      allowfullscreen
      class="mb-6"
    />
  </node-view-wrapper>
</template>

<script lang="ts" setup>
import { ref, computed, watch, PropType } from 'vue'
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'

const props = defineProps(nodeViewProps)
const emit = defineEmits([])

</script>

<style scoped></style>
