import { ref } from '@vue/composition-api'
import { socket } from '@/utils/socket'

const messages = ref([])
const cached = localStorage.getItem('areLogsActive')
const areLogsActive = ref(cached ? cached === 'true' : false)

const saveLogsSettings = () => {
	localStorage.setItem('areLogsActive', areLogsActive.value)
}

socket.addEventListener('message', event => {
	if (!areLogsActive.value) {
		return
	}

	const newMessage = JSON.parse(event.data)
	messages.value.push(Object.freeze(newMessage))
})

export const useLogs = () => {
	return {
		messages,
		areLogsActive,
		saveLogsSettings
	}
}
