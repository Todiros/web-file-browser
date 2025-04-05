import styles from '../styles/DirectoryTree.module.css'
import { Directory } from '../utils/types'
import Directories from './Directories'

export const DirectoryTree = ({
	name,
	children,
}: {
	name: string
	children?: Directory[]
}) => {
	return (
		<aside className={styles.directoryTree}>
			<Directories
				name={name}
				children={children}
			/>
		</aside>
	)
}

export default DirectoryTree
