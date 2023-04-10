import { Node } from '@tiptap/core'
import { VueNodeViewRenderer, mergeAttributes, nodeInputRule } from '@tiptap/vue-3'
import vkVideo from './vkVideo.vue'

export interface vkVideoOptions {
  src: string
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    vkvideo: {
      setVkVideo: (options: { [key: string]: string }) => ReturnType
    }
  }
}

export default Node.create<vkVideoOptions>({
  name: 'vkvideo',
  draggable: true,
  inline: false,
  group: 'block',
  atom: true,
  addAttributes() {
    return {
      src: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-vk-video] iframe',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { 'data-vk-video': '' }, ['iframe', mergeAttributes(HTMLAttributes)]]
  },

  addCommands() {
    return {
      setVkVideo:
        (options) =>
        ({ commands }) => {
          return commands.insertContent([
            {
              type: this.name,
              attrs: options,
            },
          ])
        },
    }
  },

  addNodeView() {
    return VueNodeViewRenderer(vkVideo)
  },
})
