export interface Directory {
	name: string
	children?: Directory[]
}
export interface WorkingDirectoryContext {
	workingDirectory?: Directory
	setWorkingDirectory: (dir: Directory) => void
}
export interface Node {
	name: string
}

export interface File extends Node {
	type: 'file'
	content?: string
}

export interface Folder extends Node {
	type: 'folder'
	children: NodeType[]
}

export type NodeType = File | Folder
