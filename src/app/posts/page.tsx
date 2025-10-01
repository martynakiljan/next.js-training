import { SearchParams } from '../types/NextTypes'
import Pagination from '../common/components/Pagination'
import style from './posts.module.scss'
import { fetchClient } from '../common/clientApi/fetchClient'
import { PostsType } from '../types/Posts'

type PostsPageProps = {} & SearchParams

export default async function PostsPage({ searchParams }: PostsPageProps) {
	// <-- tu czekamy na searchParams
	const params = await searchParams
	const page = Number(params?.page) || 1

	const POST_TOTAL = 60
	const POSTS_PER_PAGE = 10

	const posts = await fetchClient<PostsType>(`http://localhost:3004/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`, {
		revalidate: 5,
	})

	return (
		<div className={style.container}>
			{posts.length > 0 ? (
				<>
					{posts.map(post => (
						<div key={post.id}>{post.title}</div>
					))}
					<Pagination page={page} total={POST_TOTAL} perPage={POSTS_PER_PAGE} />
				</>
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}
