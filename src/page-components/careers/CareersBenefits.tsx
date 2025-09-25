import React from 'react'

type Benefit = {
	icon: React.ReactNode
	title: string
	description: string
}

const benefits: Benefit[] = [
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sky-600">➕</span>,
		title: 'Health & Wellness Coverage',
		description:
			"Your well-being comes first. We provide comprehensive medical insurance for you and your family, so you feel secure and supported at every stage of life.",
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">ℹ</span>,
		title: 'Continuous Learning',
		description:
			"We invest in your growth. Through workshops, training, and hands‑on learning opportunities, you'll stay at the forefront of healthcare and innovation.",
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">🏆</span>,
		title: 'Recognition & Rewards',
		description:
			'Every effort counts. Your hard work and contributions are appreciated and celebrated — because every role has an impact.',
	},
	{
		icon: <span className="inline-flex h-10 w-10 items-center justify-center text-sky-600">🏷</span>,
		title: 'Purpose-Driven Environment',
		description:
			'Be part of something bigger than a career. Join a team where compassion, innovation, and science come together to bring joy to families worldwide.',
	},
]

const CareersBenefits = () => {
	return (
		<section className="section-spacing mx-auto px-4 py-16 bg-[#FAFAFA]">
			<div className="max-w-4xl pb-20">
				<span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">We Take Care of You</span>
				<h2 className="mt-4 font-manrope font-semibold csLg:text-[56px] text-[32px] leading-tight text-gray-900 tracking-[-0.02em]">
					Grow personally, professionally, purposefully.
				</h2>
			</div>

			<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
				{benefits.map((benefit, idx) => (
					<div key={idx} className="rounded-2xl bg-[#F2F2F2] border border-gray-100 p-3">
						<div className="flex flex-col items-start gap-3">
							<div>{benefit.icon}</div>
							<h3 className="font-manrope text-[20px] md:text-[22px] font-semibold text-gray-900">{benefit.title}</h3>
							<p className="text-[14px] leading-6 text-gray-600">{benefit.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default CareersBenefits


