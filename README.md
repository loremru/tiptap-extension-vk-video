# Vk video extension for TipTap and Vue

[npm package](https://www.npmjs.com/package/tiptap-extension-vk-video)

```js
import vkVideoExtension from 'tiptap-extension-vk-video'

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
