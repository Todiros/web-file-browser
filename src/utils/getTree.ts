import files from '../res/data'

const getTree = () => {
	files.map((file: any) => {
		const splitUrl = file.split('/')

		// get last element of the array
		const fileName = splitUrl.splice(-1, 1)[0]
	})

	return files
}

export default getTree
