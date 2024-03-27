interface MessageProps {
	message: string;
}

export default function Message({message}: MessageProps) {
	return <div className='p-2 text-sm text-black whitespace-pre-wrap bg-blue-200 border-b border-black rounded-sm shadow-lg w-fit'>{message}</div>;
}