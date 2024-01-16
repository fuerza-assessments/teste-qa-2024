import type { SVGProps } from 'react'
const SvgDotPattern = (props: SVGProps<SVGSVGElement>) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg width={720} height={240} fill='none' className='absolute inset-0 -z-1' viewBox='0 0 720 240' {...props}>
		<defs>
			<pattern id='dot-pattern' width={10} height={10} x={0} y={0} patternUnits='userSpaceOnUse'>
				<circle cx={1} cy={1} r={1} fill='currentColor' className='text-gray-100 dark:text-gray-700' />
			</pattern>
		</defs>
		<path fill='url(#dot-pattern)' d='M0 0h720v240H0z' />
	</svg>
)
export default SvgDotPattern
