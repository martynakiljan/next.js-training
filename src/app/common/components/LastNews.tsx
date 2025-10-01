// app/components/LastNewsClient.tsx
'use client'

import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import style from './lastnews.module.scss'
import { PostType } from '@/app/types/Posts'
import { POSTS_TOTAL } from '@/app/config'

const POST_LIMIT = 3

const LastNewsClient = () => {
	const [posts, setPosts] = useState<PostType[]>([])
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(true)

	const fetchNews = useCallback(async () => {
		setLoading(true)
		try {
			const resp = await axios.get<PostType[]>('http://localhost:3004/posts', {
				params: { _limit: POST_LIMIT, _page: page },
			})
			setPosts(resp.data)
		} catch (e) {
			console.error('Failed to load last news', e)
			setPosts([])
		} finally {
			setLoading(false)
		}
	}, [page])

	useEffect(() => {
		fetchNews()
	}, [fetchNews])

	const onNextNews = useCallback(() => {
		setPage(prevPage => {
			const totalPages = Math.max(1, Math.ceil(POSTS_TOTAL / POST_LIMIT))
			if (prevPage + 1 <= totalPages) {
				const next = prevPage + 1
				return next > totalPages ? 1 : next
			}
			return 1
		})
	}, [])

	return (
		<div className={style.container}>
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					{posts.map(post => (
						<div className={`${style.lastnews} ${style.post}`} key={String(post.id)}>
							<div>{post.title}</div>
							<div>
								<Link className={style.lastnewsLink} href={`/posts/${post.id}`}>
									Read more &rarr;
								</Link>
							</div>
						</div>
					))}
				</>
			)}

			<button className={style.nextButton} onClick={onNextNews}>
				Next News
			</button>
		</div>
	)
}

export default LastNewsClient
