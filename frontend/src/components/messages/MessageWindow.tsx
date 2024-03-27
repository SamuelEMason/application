import {
	ChangeEvent,
	KeyboardEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { ConnectionType } from '../../data/MockConnections';
import Message from './Message';

interface MessageWindowProps {
	connection: ConnectionType;
}

export default function MessageWindow({ connection }: MessageWindowProps) {
	const [messages, setMessages] = useState<string[]>([]);
	const [currMessage, setCurrMessage] = useState<string>('');
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [scrollToBottom, setScrollToBottom] = useState<boolean>(false);
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const messageEndRef = useRef<HTMLDivElement>(null);

	const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		// TODO: Dynamically change TextArea height to:
		// 		min(number of entered lines or max allowed number of lines)

		setCurrMessage(e.target.value);
	};

	const handleMessageSend = useCallback(() => {
		if (currMessage.trim() !== '') {
			setMessages([...messages, currMessage.trim()]);
		}
		if (inputRef.current) inputRef.current.focus();
		setScrollToBottom(true);
		setCurrMessage('');
	}, [currMessage, messages]);

	const handleSendOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter' && !e.shiftKey && isFocused) {
			e.preventDefault();
			handleMessageSend();
		}
	};

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus();
	}, []);

	useEffect(() => {
		if (scrollToBottom && messageEndRef.current) {
			messageEndRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
			});
			setScrollToBottom(false);
		}
	}, [scrollToBottom]);

	useEffect(() => {
		if (connection.connection) {
			setMessages([connection.connection]);
		}
	}, [connection.connection]);

	return (
		<div className='flex flex-col justify-between w-full h-[30rem] bg-slate-400 ring-1 ring-black'>
			<div className='flex flex-col h-full gap-2 p-4 overflow-scroll'>
				{messages.map((message: string) => {
					return <Message key={message} message={message} />;
				})}
				<div ref={messageEndRef}></div>
			</div>
			<div className='inset-x-0 bottom-0 flex flex-col '>
				<textarea
					ref={inputRef}
					rows={2}
					placeholder='Enter message...'
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
						handleTextAreaChange(e)
					}
					onKeyDown={handleSendOnEnter}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					value={currMessage}
					className='w-full text-white bg-black outline-none resize-none min-h-4'
				/>
				<button
					onClick={handleMessageSend}
					className='w-full bg-slate-800 hover:bg-slate-700 active:bg-black'
				>
					Send
				</button>
			</div>
		</div>
	);
}
