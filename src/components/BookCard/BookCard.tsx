import styles from './BookCard.module.css'

export interface iBookCard {
	isbn:  string
	title: string,
	subtitle: string,
	author: string,
	published: string,
	image: string,
	description: string,
	genres: string,
}

const BookCard = (props : iBookCard) => {
	return (
		<div data-testid="book-card" className={styles.card}>
			<img className={styles.cardImg} src={props.image} alt="Book Image" />

			<div className={styles.cardTitle}>
				<h1 className={styles.title}>{props.title}</h1>
			</div>

			<div className={styles.cardBottom}>
				<p className={styles.author}>{props.author}</p>

				<p className={styles.published}>{props.published}</p>
			</div>
		</div>
	)
}

export default BookCard