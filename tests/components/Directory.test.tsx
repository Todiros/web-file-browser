import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Directories from '../../src/components/Directories'
import AppProvider from '../../src/components/AppProvider'
import { directoryTree } from '../../src/res/mockDirectoryTree'

describe('Directory Tree Component', () => {
	const { name, children } = directoryTree
	it('renders the top level directories', () => {
		render(
			<AppProvider>
				<Directories
					name={name}
					children={children}
				/>
			</AppProvider>
		)
		expect(screen.getByText('root')).toBeInTheDocument()
		expect(screen.getByText('folder1')).toBeInTheDocument()
		expect(screen.getByText('configs')).toBeInTheDocument()
		expect(screen.getByText('folderMain')).toBeInTheDocument()
	})

	it('does not render subdirectories upon load', () => {
		render(
			<AppProvider>
				<Directories
					name={name}
					children={children}
				/>
			</AppProvider>
		)
		expect(screen.queryByText('folder2')).not.toBeInTheDocument()
		expect(screen.queryByText('folderB')).not.toBeInTheDocument()
		expect(screen.queryByText('year2023')).not.toBeInTheDocument()
		expect(screen.queryByText('folderSub')).not.toBeInTheDocument()
	})

	it('does not render files', () => {
		render(
			<AppProvider>
				<Directories
					name={name}
					children={children}
				/>
			</AppProvider>
		)
		expect(
			screen.queryByText('data_log.txt')
		).not.toBeInTheDocument()
		expect(
			screen.queryByText('roadmap.txt')
		).not.toBeInTheDocument()
		expect(
			screen.queryByText('development_log.txt')
		).not.toBeInTheDocument()
		expect(
			screen.queryByText('letters.txt')
		).not.toBeInTheDocument()
	})

	// it('renders correct number of top level directories', async () => {
	// 	render(
	// 		<AppProvider>
	// 			<Directories
	// 				name={name}
	// 				children={children}
	// 			/>
	// 		</AppProvider>
	// 	)
	// 	const dirCount = await screen.findAllByRole('article')
	// 	expect(dirCount.length).toBe(12)
	// })
})
