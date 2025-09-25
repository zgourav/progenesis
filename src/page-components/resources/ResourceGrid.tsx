import React from 'react'


const cards = [
  {
    title: 'Breaking the Myths Around IVF',
    desc:
      'Discover the truth behind common misconceptions, so you can approach your fertility journey with clarity and confidence.',
    img: '/images/Rstory6.png',
    views: '2k',
    posted: '1 month ago',
  },
  {
    title: 'Nutrition for Fertility Success',
    desc:
      'Learn how small, mindful changes in your diet can create a healthier foundation for conception and IVF success.',
    img: '/images/Rstory4.png',
    views: '2k',
    posted: '1 month ago',
  },
  {
    title: 'Advanced Technology in IVF',
    desc:
      'Explore how innovations in reproductive science are transforming possibilities and bringing dreams to life.',
    img: '/images/Rstory3.png',
    views: '2k',
    posted: '1 month ago',
  },
  {
    title: 'Medicine Empowering Women',
    desc:
      'From early diagnosis to advanced treatments — explore how healthcare innovations are empowering women today.',
    img: '/images/Rstory1.png',
    views: '2k',
    posted: '1 month ago',
  },
  {
    title: 'Preparing for Parenthood',
    desc:
      'Steps you can take today to feel ready — emotionally, physically, and mentally — for the beautiful journey ahead.',
    img: '/images/Rstory2.png',
    views: '2k',
    posted: '1 month ago',
  },
  {
    title: 'Life After the Baby Arrives',
    desc:
      'Gentle guidance on adjusting to your new role, building routines, and cherishing every milestone.',
    img: '/images/Rstory5.png',
    views: '2k',
    posted: '1 month ago',
  },
]


const ResourceGrid = () => {
  return (
    <section className="section-spacing px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Insights</span>
        <h3 className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[38px] font-semibold text-gray-900 leading-snug max-w-3xl">
          Insights & Inspiration for Your Parenthood Journey
        </h3>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{paddingTop:'56px'}}>
          {cards.map((c, idx) => (
            <article key={idx} className="group">
              <p className="text-gray-400 text-[12px] md:text-[13px] mb-2">{c.views} views • {c.posted}</p>
              <div className="relative w-full aspect-[16/11] overflow-hidden rounded-xl bg-gray-100" style={{marginTop:'8px'}}>
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-3 md:mt-4 text-[16px] md:text-[18px] font-semibold text-gray-900">
                {c.title}
              </h4>
              <p className="mt-2 text-[12px] md:text-[13px] text-gray-600 leading-relaxed">
                {c.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourceGrid


