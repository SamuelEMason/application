import { useState } from 'react';

interface EmojiProps {
	emoji: string;
	size?: string;
}

export default function Emoji({ emoji, size = 'lg' }: EmojiProps) {
	const [isRotated, setIsRotated] = useState<boolean>(false);

	return (
		<div
			onClick={() => setIsRotated((prevState) => !prevState)}
			className={`text-${size} hover:cursor-pointer select-none ${
				isRotated ? 'scale-x-[-1]' : 'scale-x-[1]'
			}`}
		>
			{emoji}
		</div>
	);
}
