import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DirectoryTree from '../../src/components/DirectoryTree'
import AppProvider from '../../src/components/AppProvider'
import { directoryTree } from '../../src/res/mockDirectoryTree'

describe('Directory Tree Component', () => {
	const { name, children } = directoryTree
	it('renders the top level directories', () => {
		render(
			<AppProvider>
				<DirectoryTree
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
				<DirectoryTree
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
				<DirectoryTree
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
})
