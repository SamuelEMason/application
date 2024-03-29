import { useLayoutEffect, useRef, useState } from 'react';

interface EmojiProps {
	emoji: string;
	size?: string;
}

export default function Emoji({ emoji, size }: EmojiProps) {
	const [isReflectX, setIsReflectX] = useState<boolean>(false);
	const [isReflectY, setIsReflectY] = useState<boolean>(false);
	const emojiRef = useRef<HTMLDivElement>(null);

	const emojiClasses = `hover:cursor-pointer select-none ${
		isReflectY ? 'scale-y-[-1]' : 'scale-y-[1]'
	} ${isReflectX ? 'scale-x-[-1]' : 'scale-x-[1]'} ${size}`;

	useLayoutEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (e.ctrlKey) {
				setIsReflectY((prevState) => !prevState);
			} else {
				setIsReflectX((prevState) => !prevState);
			}
		};

		const currentRef = emojiRef.current;

		if (currentRef) {
			currentRef.addEventListener('click', handleClick);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener('click', handleClick);
			}
		};
	}, [emojiRef]);

	return (
		<div ref={emojiRef} className={emojiClasses}>
			{emoji}
		</div>
	);
}
