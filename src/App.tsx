import Header from './components/Header'
import FileBrowser from './components/FileBrowser'
import styles from './styles/App.module.css'
import getTree from './utils/getTree'
import { useEffect, useState } from 'react'
import { Directory } from './utils/types'

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<FileBrowser />
		</div>
	)
}

export default App
