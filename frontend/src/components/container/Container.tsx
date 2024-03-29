import { PropsWithChildren } from "react"
import styles from './Container.module.css';

export default function Container({children}: PropsWithChildren) {
	return (
		<main
			className={
				'overflow-y-auto' +
				styles.container
			}
		>
			<div className={styles.gutters + ' py-8'}>{children}</div>
		</main>
	);
}