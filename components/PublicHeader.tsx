import Link from 'next/link';
import React from 'react';

export default function PublicHeader() {
	return (
		<div className='flex-between px-8 w-full h-14 bg-black text-white'>
			<Link href='/'>Public Header</Link>
			<nav className='flex gap-4'>
				<Link href='/about'>About</Link>
				<Link href='/client'>Client</Link>
			</nav>
		</div>
	);
}
