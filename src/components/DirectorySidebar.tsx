import styles from '../styles/DirectorySidebar.module.css'
import { Directory } from '../utils/types'
import DirectoryTree from './DirectoryTree'

export const DirectorySidebar = ({
	name,
	children,
}: {
	name: string
	children?: Directory[]
}) => {
	return (
		<aside className={styles.directorySidebar}>
			<DirectoryTree
				name={name}
				children={children}
			/>
		</aside>
	)
}

export default DirectorySidebar
