import React from 'react'

type Opening = {
	title: string
	meta: string[]
	primary?: boolean
}

const openings: Opening[] = [
	{
		title: 'Fellowship in Reproductive Medicine',
		meta: ['Full‑Time', 'Pune', 'Some Text'],
		primary: true,
	},
	{
		title: 'Senior / Junior IVF Consultant',
		meta: ['Full‑Time', 'Pune', 'Some Text'],
	},
	{
		title: 'Fellowship in Reproductive Medicine',
		meta: ['Full‑Time', 'Pune', 'Some Text'],
	},
]

const CareersOpenings = () => {
	return (
		<section className="section-spacing mx-auto px-4 py-16">
			<div className="max-w-5xl" style={{paddingBottom:'48px'}}>
				<span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Current Openings</span>
				<h2 className="mt-4 font-manrope font-semibold csLg:text-[56px] text-[32px] leading-tight text-gray-900 tracking-[-0.02em]">
					Find the right role and begin your journey at Progenesis.
				</h2>
			</div>

			<div className="mt-12 divide-y divide-gray-200/60 rounded-2xl overflow-hidden">
				{openings.map((job, idx) => (
					<div key={idx} className="flex items-start justify-between gap-6 py-8 carr-opp-padd">
						<div style={{marginBottom:'12px'}}>
							<h3 className="font-manrope text-[24px] md:text-[28px] font-semibold text-gray-900">{job.title}</h3>
							<div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
								{job.meta.map((m, i) => (
									<React.Fragment key={i}>
										<span>{m}</span>
										{i < job.meta.length - 1 && <span className="mx-1">•</span>}
									</React.Fragment>
								))}
							</div>
						</div>
						<button
							aria-label="Open role"
							className={
								(job.primary
									? 'bg-[#135EC9] text-white'
									: 'bg-white text-gray-700 border border-gray-300') +
								' h-10 w-10 rounded-full flex items-center justify-center hover:shadow-sm'
							}
						>
							<span className="translate-x-[1px] translate-y-[-1px]">↗</span>
						</button>
					</div>
				))}
			</div>
		</section>
	)
}

export default CareersOpenings


