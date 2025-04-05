import files from '../res/data'
import { Directory } from './types'

const getTree = (): Array<Directory> => {
	const root: Array<Directory> = []

	files.forEach((file: any) => {
		const parts = file.split('/')
		let current: Directory[] = root
		// removes the file name from path
		// parts.splice(-1, 1)

		parts.forEach((part: string, index: number) => {
			let existing = current.find(
				(dir: Directory) => dir.name === part
			)

			if (!existing) {
				existing = { name: part }

				if (index < parts.length - 1) {
					existing.children = []
				}

				current.push(existing)
			}

			if (existing.children) current = existing.children
		})
	})

	return root
}

export default getTree
