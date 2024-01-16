import type { SVGProps } from 'react'
const SvgHeartFilledIcon = (props: SVGProps<SVGSVGElement>) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
		<path
			fill='currentColor'
			stroke='currentColor'
			d='M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 0 0 1.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z'
			strokeLinejoin='round'
		/>
	</svg>
)
export default SvgHeartFilledIcon
