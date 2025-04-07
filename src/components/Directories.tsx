import styles from '../styles/Directory.module.css'
import { Directory } from '../utils/types'
import { useEffect, useState } from 'react'
import Chevron from './Chevron'
import { useAppContext } from './AppProvider'

export const Directories = ({
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

	const renderParentDirectory = (
		expanded: boolean,
		name: string,
		children: Directory[]
	) => {
		const hasChildren = children.some(dir => dir.children)
		return (
			<>
				{hasChildren && <Chevron isExpanded={expanded} />}
				{name}
			</>
		)
	}

	return (
		<section className={styles.directory}>
			<div
				onClick={handleClick}
				className={styles.directoryHeader}
				data-testid={`folder-${name}`}
			>
				{children &&
					renderParentDirectory(isExpanded, name, children)}
			</div>
			{isExpanded && children && (
				<div>
					{children.map(dir => (
						<Directories
							key={dir.name}
							name={dir.name}
							children={dir.children}
						/>
					))}
				</div>
			)}
		</section>
	)
}

export default Directories
