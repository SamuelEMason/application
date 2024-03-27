import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Portal from '../Portal';

interface ModalProps {
	children?: ReactNode;
	className?: string;
	isOpen: boolean;
	handleClose: () => void;
}

export default function Modal({
	children,
	className,
	isOpen,
	handleClose,
	...rest
}: ModalProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				handleClose();
			}
		};
		document.addEventListener('keydown', handleEscape);

		return () => document.removeEventListener('keydown', handleEscape);
	}, [handleClose]);

	return (
		<Portal wrapperId='portal'>
			<AnimatePresence>
				{isOpen && (
					<div {...rest}>
						<Link to='/'>
							<motion.div
								onClick={handleClose}
								key='overlay'
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.6 }}
								exit={{ opacity: 0 }}
								className={
									className +
									' fixed inset-0 w-[100vw] h-[100vh] z-50 flex justify-center items-end opacity-50 bg-neutral-800 text-white'
								}
							></motion.div>
						</Link>
						<motion.div
							key='menu'
							initial={{ width: 0 }}
							animate={{ width: '60%' }}
							exit={{ width: 0 }}
							className='fixed bottom-0 z-50 flex flex-col w-full h-full gap-8 p-4 border-t border-red-950 bg-neutral-950 text-neutral-100'
						>
							<motion.button
								onClick={handleClose}
								exit={{ opacity: 0 }}
							>
								<IoCloseOutline color='white' size={40} />
							</motion.button>
							<motion.div
								key='overlay'
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.6 }}
								exit={{ opacity: 0 }}
								className='flex flex-col gap-4 h-[15rem]'
							>
								{children}
							</motion.div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</Portal>
	);
}
