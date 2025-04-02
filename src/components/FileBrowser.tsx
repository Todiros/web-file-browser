// FileBrowser.tsx
// This component is responsible for rendering the file browser layout.
// It includes the Directory and WorkingDir components.
import styles from '../styles/FileBrowser.module.css'
import Directory from './Directory'
import Viewer from './Viewer'

const FileBrowser = () => {
	return (
		<main className={styles.layout}>
			<Directory />
			<Viewer />
		</main>
	)
}

export default FileBrowser
