import files from '../res/filePaths'
import { Directory } from './types'

const getTree = (paths?: Array<string>): Array<Directory> => {
	const root: Array<Directory> = []

	files.forEach((file: any) => {
		const parts = file.split('/')
		let current: Directory[] = root

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
