import styles from '../styles/DirectoryTree.module.css'
import { Directory } from '../utils/types'
import { useEffect, useState } from 'react'
import Chevron from './Chevron'
import { useAppContext } from './AppProvider'

export const DirectoryTree = ({
	name,
	children,
}: {
	name: string
	children?: Directory[]
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const { setWorkingDirectory } = useAppContext()

	useEffect(() => {
		name === 'root' && setIsExpanded(true)
	}, [name])

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		switch (e.detail) {
			case 1:
				setIsExpanded(!isExpanded)
				break
			case 2:
				setWorkingDirectory({ name, children })
				break
		}
	}

	const hasChildren = (children: Directory[]) => {
		return children.some(dir => dir.children)
	}

	const renderParentDirectory = (
		expanded: boolean,
		name: string,
		children: Directory[]
	) => {
		return (
			<>
				{hasChildren(children) && <Chevron isExpanded={expanded} />}
				{
					<span
						className={
							!hasChildren(children)
								? styles.lightFont
								: styles.heavyFont
						}
					>
						{name}
					</span>
				}
			</>
		)
	}

	return (
		<div className={styles.directory}>
			{children && (
				<>
					<div
						onClick={handleClick}
						className={styles.directoryHeader}
						data-testid={`folder-${name}`}
					>
						{renderParentDirectory(isExpanded, name, children)}
					</div>
					{isExpanded && hasChildren(children) && (
						<>
							{children.map(
								dir =>
									dir.children && (
										<DirectoryTree
											key={dir.name}
											name={dir.name}
											children={dir.children}
										/>
									)
							)}
						</>
					)}
				</>
			)}
		</div>
	)
}

export default DirectoryTree
