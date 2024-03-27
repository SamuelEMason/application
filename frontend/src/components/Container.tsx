import { PropsWithChildren } from "react"


export default function Container({children}: PropsWithChildren) {
	return (
		<main className='max-w-full overflow-y-auto'>
			<div className="py-8">{children}</div>
		</main>
	);
}