import Pagination from '../common/components/Pagination'
import { PostsType } from '../types/Posts'
import style from './posts.module.scss'

export default async function PostsPage() {

	
	const res = await fetch(`http://localhost:3004/posts?_limit=${POSTS_PER_PAGE}_`)

	if (!res.ok) {
		throw new Error('problem with getting posts')
	}

	const posts: PostsType = await res.json()
	const POST_TOTAL = 60
	const POSTS_PER_PAGE = 10

	return (
		<div>
			<h1>Post</h1>
			{posts.map(post => (
				<div className={style.item} key={post.id}>
					{post.title}{' '}
				</div>
			))}
			<Pagination page={1} total={POST_TOTAL} perPage={POSTS_PER_PAGE} />
		</div>
	)
}
