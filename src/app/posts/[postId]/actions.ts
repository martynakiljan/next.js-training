'use server'

import { fetchClient, updateClient } from '@/app/common/clientApi/fetchClient'
import { PostType } from '@/app/types/Posts'

export const likePost = async (postId: number) => {
	// /pobieramy artykul
	const post = await fetchClient<PostType>(`http://localhost:3004/post/${postId}`)

	//wyslac do servwea z iloscia reactions +1
	await updateClient('PATCH', `http://localhost:3004/post/${postId}`, { reactions: (await post).reactions + 1 })
}
