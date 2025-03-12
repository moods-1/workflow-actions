import Link from 'next/link';
import React from 'react';

export default function ClientHeader() {
	return (
		<div className='flex-between px-8 w-full h-14 bg-black text-white'>
			<Link href='/'>Public Site</Link>
			<nav className='flex gap-4'>
				<Link href='/client/accounts'>Accounts</Link>
			</nav>
		</div>
	);
}
