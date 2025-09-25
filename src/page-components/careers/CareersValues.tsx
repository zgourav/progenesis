import React from 'react'
import '../about/AboutMain.css'


type ValueItem = {
	icon: React.ReactNode
	title: string
	description: string
}

const items: ValueItem[] = [
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">◎</span>,
		title: 'Driven by Purpose',
		description:
			'We exist to give hope and solutions to couples who dream of parenthood.',
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">♡</span>,
		title: 'Patient-First',
		description:
			'Empathy and expertise ensure every patient feels cared for at every step.',
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">💡</span>,
		title: 'Innovation in Action',
		description:
			'With advancing tech and personalized solutions, we deliver evolving fertility care.',
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">✦</span>,
		title: 'Excellence Every Day',
		description:
			'From labs to consultations, we set and uphold world‑class standards.',
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">🤝</span>,
		title: 'Teamwork that Inspires',
		description:
			'Collaboration drives our success — we grow stronger by trusting and respecting each other.',
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">🏛</span>,
		title: 'Integrity Always',
		description:
			'We practice honesty and transparency to build trust with patients and partners.',
	},
]

const CareersValues = () => {
	return (
		<section className="section-spacing bg-[#FFFFFF]">
			<div className="max-w-5xl carr-opp-padd" >
				<span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>What Defines Us</span>
				<h2 className="mt-4 font-manrope font-semibold csLg:text-[48px] text-[32px] leading-tight text-gray-900 tracking-[-0.02em]">
					Every company has its unique <br/> DNA. Here’s ours
				</h2>
			</div>

			<div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-12" style={{marginTop:'56px'}}>
				{items.map((item, idx) => (
					<div key={idx} className="pr-6">
						<div className="flex items-start gap-4">
							{item.icon}
							<div>
								<h3 className="font-manrope text-[22px] md:text-[24px] font-semibold text-gray-900">{item.title}</h3>
								<p className="mt-2 text-[14px] leading-6 text-gray-600 max-w-md">{item.description}</p>
							</div>
						</div>
						<div style={{marginTop:'32px'}} className="mt-8 h-px w-full bg-gray-200/70" />
					</div>
				))}
			</div>
		</section>
	)
}

export default CareersValues


