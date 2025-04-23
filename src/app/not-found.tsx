import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center h-60 w-full self-center justify-self-center gap-3">
			<h1 className="font-semibold">Not Found</h1>
			<p>Could not find requested resource</p>
			<Link className="mt-4 text-zinc-400 underline" href="/">
				Return Home
			</Link>
		</div>
	)
}
