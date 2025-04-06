const Chevron = ({
	width,
	height,
	fillColor,
	isExpanded,
}: {
	width?: string
	height?: string
	fillColor?: string
	isExpanded?: boolean
}) => {
	return (
		<svg
			width={width ?? '12px'}
			height={height ?? '12px'}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform={isExpanded ? 'rotate(90)' : 'rotate(0)'}
		>
			<path
				d="M9 6L15 12L9 18"
				stroke={fillColor ?? '#f4eee0'}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default Chevron
