import LastNews from '@/app/common/components/LastNews'
import style from './aboutUs.module.scss'

const About = () => {
	return (
		<>
			<h1>About us</h1>

			<p className={style.text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fugiat, quidem non hic doloribus dolorum id
				maxime qui libero corporis nemo perspiciatis debitis saepe illum pariatur tenetur, officiis laboriosam
				sapiente!Loremloremx20
			</p>
			<LastNews/>
			<p className={`${style.text} ${style.second}`}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fugiat, quidem non hic doloribus dolorum id
				maxime qui libero corporis nemo perspiciatis debitis saepe illum pariatur tenetur, officiis laboriosam
				sapiente!Loremloremx20
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fugiat, quidem non hic doloribus dolorum id
				maxime qui libero corporis nemo perspiciatis debitis saepe illum pariatur tenetur, officiis laboriosam
				sapiente!Loremloremx20
			</p>
		</>
	)
}

export default About
