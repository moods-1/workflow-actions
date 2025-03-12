'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export default function Button({
	children,
	className,
	...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...rest}
			className={cn('px-6 py-1 rounded cursor-pointer', className)}
		>
			{children}
		</button>
	);
}
