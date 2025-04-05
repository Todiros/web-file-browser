// FileBrowser.tsx
// This component is responsible for rendering the file browser layout.
// It includes the Directory and WorkingDir components.
import { useEffect, useState } from 'react'
import styles from '../styles/FileBrowser.module.css'
import DirectoryTree from './DirectoryTree'
import Viewer from './Viewer'
import { Directory } from '../utils/types'
import getTree from '../utils/getTree'

const FileBrowser = () => {
	const [tree, setTree] = useState<Directory[]>([])
	// Fetch data tree from the server
	useEffect(() => {
		const fetchFiles = async () => {
			try {
				const currentTree = await getTree()
				setTree(currentTree)
			} catch (error) {
				console.error('Error fetching data tree:', error)
			}
		}

		fetchFiles()
	}, [])

	return (
		<main className={styles.layout}>
			<DirectoryTree {...(tree[0] as Directory)} />
			<Viewer />
		</main>
	)
}

export default FileBrowser
