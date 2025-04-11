import Image from 'next/image'

export default function Page() {
	return (
		<section className="grid grid-cols-2 gap-12 mt-12">
			<div className="flex flex-col gap-8">
				<div>
					<h1>Portfolio page</h1>
					<p>3D Design</p>
				</div>
				<Image
					alt="Portfolio image"
					src="/Lake.png"
					width={500}
					height={500}
					objectFit="cover"
					className="object-cover rounded-2xl"
				/>
				<div>
					<h3>Design For Me</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						doloribus suscipit quidem illo voluptatem mollitia non tenetur,
						impedit eveniet harum eaque consectetur sunt laudantium molestiae,
						ullam quod, natus deserunt commodi. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Ut id et veniam quis tempore
						blanditiis. Ea quisquam reprehenderit deserunt eos, illo pariatur
						quaerat sed mollitia vero ab quasi, facilis odit!
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-8">
				<div>
					<h2>education</h2>
					<div>
						<div>
							<div>
								<h3>Institute</h3>
								<p>ADAS asdas asdada</p>
							</div>
							<span>2022-2029</span>
						</div>
					</div>
				</div>
				<div>
					<h2>software skills</h2>
					<div className="flex justify-between">
						<ul>
							<li>Blender</li>
							<li>Substance painter</li>
							<li>Unreal Engine 5</li>
							<li>Fusion 360</li>
						</ul>
						<ul>
							<li>Blender</li>
							<li>Substance painter</li>
							<li>Unreal Engine 5</li>
							<li>Fusion 360</li>
						</ul>
					</div>
				</div>
				<div>
					<h2>analogoues skills</h2>
					<div className="flex justify-between">
						<ul>
							<li>Blender</li>
							<li>Substance painter</li>
							<li>Unreal Engine 5</li>
							<li>Fusion 360</li>
						</ul>
						<ul>
							<li>Blender</li>
							<li>Substance painter</li>
							<li>Unreal Engine 5</li>
							<li>Fusion 360</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
