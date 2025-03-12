import { cn } from '@/lib/utils';
import React from 'react';

export default function Input({
	className,
	...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			{...rest}
			className={cn(
				'w-full border border-gray-300 outline-0 px-3 py-1 rounded',
				className
			)}
		/>
	);
}
