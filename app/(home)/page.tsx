'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Home() {
	const [inputValue, setInputValue] = useState('');

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInputValue(value);
		console.log({ value });
	};
	return (
		<div className=''>
			<Button
				onClick={() => alert('Button clicked!')}
				className='w-full max-w-44 bg-slate-800 text-white hover:opacity-85'
			>
				TypeScript Tester
			</Button>

			<p className='mt-5'>Details and Summary Tags</p>
			<details className='border px-3 mt-1'>
				<summary>Summary</summary>
				<hr />
				<p>Hello there!</p>
			</details>
			<p className='mt-5'>Time Tag</p>
			<time dateTime='2024-03-15'>March 15, 2025</time>
			<div className='mt-5'>
				<Input placeholder='Search' value={inputValue} onChange={handleInput} />
			</div>
		</div>
	);
}
