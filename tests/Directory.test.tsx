import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Directories from '../src/components/Directories'

describe('Directory Component', () => {
	it('renders the directory name', () => {
		render(<Directories name="images" />)
		const directory = screen.getByText(/Directory/i)
		expect(directory).toBeInTheDocument()
	})

	// it('renders a list of files', () => {
	// 	const files = ['file1.txt', 'file2.txt']
	// 	render(
	// 		<Directory
	// 			name="Test Directory"
	// 			files={files}
	// 		/>
	// 	)
	// 	files.forEach(file => {
	// 		expect(screen.getByText(file)).toBeInTheDocument()
	// 	})
	// })
})
