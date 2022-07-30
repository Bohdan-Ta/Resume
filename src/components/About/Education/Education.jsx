import s from './Education.module.css'

export const Education = () => {
	return (
		<div className={s.timeline}>
			<h1 className={s.heading}>education and experience</h1>
			<div className={s.card}>
				<div className={s.cardBody}>
					<h2 className={s.title}>2000-2006</h2>
					<p class='card-detail'>
						Studying at universities, that gave the opportunity to gain knowledge in the fields of economics, management
						and law.
					</p>
				</div>
			</div>
			<div className={s.card}>
				<div className={s.cardBody}>
					<h2 className={s.title}>2004-2016</h2>
					<p class='card-detail'>
						Work in various positions in the central authorities (Ministry). Leadership positions while working at
						state-owned enterprises. Experience in managing both small and large teams.
					</p>
				</div>
			</div>
			<div className={s.card}>
				<div className={s.cardBody}>
					<h2 className={s.title}>2016-2022</h2>
					<p class='card-detail'>Head of own private business.</p>
				</div>
			</div>
			<div className={s.card}>
				<div className={s.cardBody}>
					<h2 className={s.title}>2021-2022</h2>
					<p class='card-detail'>
						Study HTML, CSS, JS, React, Node.js and etc in GoIT. Received a full stack developer certificate.
					</p>
				</div>
			</div>
			<div className={s.card}>
				<div className={s.cardBody}>
					<h2 className={s.title}>2020-2022</h2>
					<p class='card-detail'>
						Learning English with the help of tutors and mobile applications allows me constantly to improve language
						learning.
					</p>
				</div>
			</div>
		</div>
	)
}
