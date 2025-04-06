import styles from '../styles/Viewer.module.css'
import { Directory } from '../utils/types'
import { useAppContext } from './AppProvider'

const Viewer = ({
	directories,
}: {
	directories: Directory[]
}) => {
	const { workingDirectory } = useAppContext()
	console.log(workingDirectory)

	const renderRoot = (directories: Directory[]) => {}

	return (
		<main className={styles.viewer}>
			{workingDirectory ? null : null}
		</main>
	)
}

export default Viewer
