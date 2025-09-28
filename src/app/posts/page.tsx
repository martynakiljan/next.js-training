import { SearchParams } from '../types/NextTypes'
import Pagination from '../common/components/Pagination'
import style from './posts.module.scss'
import Link from 'next/link'
import { fetchClient } from '../common/clientApi/fetchClient'
import { PostsType } from '../types/Posts'

type PostsPageProps = {} & SearchParams

export default async function PostsPage({ searchParams }: PostsPageProps) {
	let page = 1

	const POST_TOTAL = 60
	const POSTS_PER_PAGE = 10

	if (searchParams?.page) {
		page = Number(searchParams?.page) || 1
	}

	const posts = await fetchClient<PostsType>(`http://localhost:3004/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`, {
		revalidate: 5,
	})

	return (
		<div>
			<h1>Our Posts:</h1>
			{posts.map(post => (
				<div className={style.item} key={post.id}>
					{post.title} <br></br>
					{
						<Link className={style.link} href={`/posts/${post.id}`}>
							Read more ➡️{' '}
						</Link>
					}
				</div>
			))}
			<Pagination page={page} total={POST_TOTAL} perPage={POSTS_PER_PAGE} />
		</div>
	)
}
