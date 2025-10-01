import { PostType } from '@/app/types/Posts'
import style from './post.module.scss'
import { fetchClient } from '@/app/common/clientApi/fetchClient'
import LikePost from './LikePost'

type PostPageProps = {
	params: {
		postId: string
	}
}

const fetchPost = async (postId: number) => {
	return await fetchClient<PostType>(`http://localhost:3004/posts/${postId}`)
}

export const generateMetadata = async ({ params }: PostPageProps) => {
	const post = await fetchPost(+params.postId)
	return {
		title: post.title,
		description: `read about ${post.title}`,
	}
}

const PostPage = async ({ params }: PostPageProps) => {
	const post = await fetchPost(+params.postId)

	return (
		<div>
			<h2>{post.title}</h2>
			TUT
			<h5>POST ID: {params.postId}</h5>
			<p>{post.body}</p>
			{post.tags && post.tags.length > 0 && (
				<div className={style.tags}>
					{post.tags.map(tag => (
						<em key={tag}>{tag}</em>
					))}
				</div>
			)}
			<div className={style.likes}>Likes: {post.reactions}</div>
			<LikePost postId={post.id} />
		</div>
	)
}

export default PostPage
