'use client'

import { FC, useCallback } from 'react'
import style from './post.module.scss'
import { likePost } from './actions'

type LikePostProps = { postId: number }

const LikePost: FC<LikePostProps> = ({ postId }) => {
	const onLike = useCallback(async () => {
		try {
			await likePost(postId)
		} catch (err) {
			console.error('Błąd podczas lajkowania:', err)
		}
	}, [postId])
	return (
		<div>
			<button onClick={onLike} className='button'>
				Like &nbsp;&nbsp;&nbsp;
				<img className={style.imgLike} src='/like.jpg' alt='like' height={16} width={16} />
			</button>
		</div>
	)
}

export default LikePost
