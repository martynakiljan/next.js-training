import { notFound } from 'next/dist/client/components/not-found'

type FetchClinetOptions = {
	revalidate: number
}

export async function fetchClient<P = unknown>(url: string, options: FetchClinetOptions = { revalidate: 10 }) {
	const { revalidate } = options
	const response = await fetch(url, { next: { revalidate } })

	if (!response.ok && response.status === 400) {
		throw notFound()
	}

	if (!response.ok) {
		throw new Error('problem with getting post')
	}

	const post: P = await response.json()
	return post
}

export async function updateClient(method: 'POST' | 'PATCH', url: string, data: unknown) {
	const res = await fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'appllication/json',
		},
	})

	if (!res.ok) {
		throw new Error(`problem with update data, status code: ${res.status}`)
	}
}
