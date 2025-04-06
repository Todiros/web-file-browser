import styles from '../styles/Directory.module.css'
import { Directory } from '../utils/types'
import { useEffect, useState } from 'react'
import Chevron from './Chevron'

export const Directories = ({
	name,
	children,
}: {
	name: string
	children?: Directory[]
}) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)

	useEffect(() => {
		name === 'root' && setIsExpanded(true)
	}, [name])

	const handleClick = () => {
		setIsExpanded(!isExpanded)
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
