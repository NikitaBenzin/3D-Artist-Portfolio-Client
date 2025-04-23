import Image from 'next/image'

export default function Page() {
	return (
		<section className="grid grid-cols-1 gap-12 mt-12 px-12 w-full justify-items-center lg:grid-cols-2 ">
			<div className="flex flex-col gap-8 max-w-[500px]">
				<div>
					<h1 className="font-extrabold">Portfolio page</h1>
					<p>3D Artist & Visual Designer</p>
				</div>
				<Image
					alt="Portfolio image"
					src="/Lake.png"
					width={500}
					height={500}
					className="object-cover rounded-2xl"
				/>
				<div>
					<h3 className="font-extrabold mb-2">About Me</h3>
					<p>
						I create stylized and atmospheric 3D content — from environments and
						props to motion graphics and cinematic animations. My workflow is
						rooted in Blender, Substance Painter, Unreal Engine 5, Photoshop,
						and After Effects.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-8 justify-between max-w-[500px] w-full">
				<div>
					<h2 className="font-extrabold mb-6 uppercase tracking-widest">
						education
					</h2>
					<div>
						<div className="flex justify-between gap-4 flex-col lg:flex-row">
							<div>
								<h3 className="font-bold">Institute</h3>
								<p>ADAS asdas asdada</p>
							</div>
							<span className="font-bold self-end md:self-start">
								2022-2029
							</span>
						</div>
					</div>
				</div>
				<div>
					<h2 className="font-extrabold mb-6 uppercase tracking-widest">
						software skills
					</h2>
					<div className="flex justify-between gap-6 flex-col lg:flex-row">
						<ul>
							<li>Blender</li>
							<li>Substance painter</li>
							<li>Unreal Engine 5</li>
						</ul>
						<ul>
							<li>After Effects</li>
							<li>Photoshop</li>
						</ul>
					</div>
				</div>
				<div>
					<h2 className="font-extrabold mb-6 uppercase tracking-widest">
						analogoues skills
					</h2>
					<div className="flex justify-between gap-6 flex-col lg:flex-row">
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
