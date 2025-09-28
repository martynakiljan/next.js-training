import Link from 'next/link'
import style from './pagination.module.scss'

type PaginationType = {
	page: number
	total: number
	perPage: number
}

const Pagination = ({ page, total, perPage }: PaginationType) => {
	const isNextPage = (page + 1) * perPage < total

	return (
		<div className={style.pagination}>
			{page > 1 && <Link href={`/posts?page=${page - 1}`}>Prev</Link>}
			<div>page: {page}</div>
			{isNextPage && <Link href={`/posts?page=${page + 1}`}>Next</Link>}
		</div>
	)
}

export default Pagination
