import Header from './components/Header'
import FileBrowser from './components/FileBrowser'
import styles from './styles/App.module.css'
import getTree from './utils/getTree'
import { useEffect, useState } from 'react'

function App() {
	const [tree, setTree] = useState<Array<String>>([])
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
	console.log(tree)
	return (
		<div className={styles.app}>
			<Header />
			<FileBrowser />
		</div>
	)
}

export default App
