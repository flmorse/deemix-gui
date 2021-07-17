// const SERVER_ENDPOINT = window.location.origin
export const SERVER_ENDPOINT = 'http://localhost:6595'
export const SERVER_HOST = 'localhost:6595'

const commonOptions = {
	credentials: 'include'
}

export function fetchData(key, data = {}, method = 'GET') {
	const url = new URL(`${SERVER_ENDPOINT}/api/${key}`)

	Object.keys(data).forEach(key => {
		url.searchParams.append(key, data[key])
	})

	return fetch(url.href, { ...commonOptions, method })
		.then(response => response.json())
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error)
			return Promise.reject(error)
		})
}

export function sendToServer(key, data) {
	const url = new URL(`${SERVER_ENDPOINT}/api/${key}`)

	Object.keys(data).forEach(key => {
		url.searchParams.append(key, data[key])
	})

	fetch(url.href).catch(error => {
		console.error('There has been a problem with your fetch operation:', error)
	})
}

export const postToServer = (endpoint, data) => {
	const url = new URL(`${SERVER_ENDPOINT}/api/${endpoint}`)

	return fetch(url, {
		...commonOptions,
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			return response.json()
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error)
		})
}
