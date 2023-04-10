# Vk video extension for TipTap and Vue

```js
import tiptapImageExtension from '@/components/ui/tiptap/tiptapImageExtension'

const editor = ref()

onMounted(() => {
	editor.value = new Editor({
		extensions: [
			vkVideoExtension,
		]
	})	
})

/// path is src attribute from iframe tag!
const addVkVideo = (path: string) => {
	editor.value?.chain().focus().setVkVideo({ src: path }).run()
}
```
