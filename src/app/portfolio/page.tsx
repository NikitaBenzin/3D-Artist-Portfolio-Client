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
					src="/StarWars.png"
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
					<div className="flex flex-col gap-6">
						<div className="flex justify-between gap-2 flex-col lg:flex-row">
							<div>
								<h3 className="font-medium">
									Małopolska State University in Oświęcim Engineer's degree
								</h3>
							</div>
							<span className="font-bold text-start md:text-end">
								2022-2026 (expected)
							</span>
						</div>
						<div className="flex justify-between gap-2 flex-col lg:flex-row">
							<div>
								<h3 className="font-medium">IT Step Academy</h3>
							</div>
							<span className="font-bold text-start md:text-end">
								2016-2021
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
						Technical Skills
					</h2>
					<div className="flex justify-between gap-6 flex-col lg:flex-row">
						<ul className="flex flex-col gap-2">
							<li>Low/High Poly Workflow</li>
							<li>UV Mapping & Baking</li>
						</ul>
						<ul className="flex flex-col gap-2">
							<li>PBR Texturing</li>
							<li>Lighting & Rendering</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
