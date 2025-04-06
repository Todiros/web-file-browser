import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
} from 'react'
import {
	Directory,
	WorkingDirectoryContext,
} from '../utils/types'

const AppContext = createContext<
	WorkingDirectoryContext | undefined
>(undefined)

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [workingDirectory, setWorkingDirectory] = useState<
		Directory | undefined
	>()
	return (
		<AppContext.Provider
			value={{ workingDirectory, setWorkingDirectory }}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = (): WorkingDirectoryContext => {
	const context = useContext(AppContext)

	return context!
}

export default AppProvider
