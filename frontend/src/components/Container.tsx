import { PropsWithChildren } from "react"


export default function Container({children}: PropsWithChildren) {
	return (
		<main className='max-w-full overflow-y-auto md:px-24 xl:px-48'>
			<div className="py-8">{children}</div>
		</main>
	);
}