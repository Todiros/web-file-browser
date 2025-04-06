import Header from './components/Header'
import FileBrowser from './components/FileBrowser'
import styles from './styles/App.module.css'
import AppProvider from './components/AppProvider'

function App() {
	return (
		<div className={styles.app}>
			<AppProvider>
				<Header />
				<FileBrowser />
			</AppProvider>
		</div>
	)
}

export default App
