// FileBrowser.tsx
// This component is responsible for rendering the file browser layout.
// It includes the Directory and WorkingDir components.
import { useEffect, useState } from 'react'
import styles from '../styles/FileBrowser.module.css'
import DirectorySidebar from './DirectorySidebar'
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

	const parsedTree =
		tree.length === 1 ? tree[0] : { name: 'root', children: tree }

	return (
		<div className={styles.layout}>
			<DirectorySidebar {...parsedTree} />
			<Viewer directories={tree} />
		</div>
	)
}

export default FileBrowser
