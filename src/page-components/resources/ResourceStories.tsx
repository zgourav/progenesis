import React from 'react'

const stories = [
  {
    title: 'Because Dreams Do Come True | A Journey with Progenesis',
    img: '/images/Rvid1.png',
  },
  {
    title: 'Our IVF Journey | with Progenesis | Love Finds a Way',
    img: '/images/Rvid3.png',
  },
  {
    title: 'The Mehta Story | with Progenesis | New Beginnings',
    img: '/images/Rvid2.png',
  },
]

const ResourceStories = () => {
  return (
    <section className="section-spacing px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4">
          <div>
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">First Person. Real Stories.</span>
            <h3 className="mt-1 text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px] font-semibold text-gray-900">
              Inspiring stories of strength & Victories
            </h3>
          </div>
          <button className="w-auto h-[32px] inline-flex items-center px-4 py-2 rounded-[8px] bg-blue-600 text-white text-sm shadow-sm hover:bg-blue-700 mt-3 md:mt-0 md:ml-auto p-2">
            See all
          </button>
        </div>

        {/* Mobile: horizontal scroll with three side-by-side cards; Desktop: original grid */}
        <div className="mt-6 flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible">
          {stories.map((s, i) => (
            <article
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] w-[60%] flex-none md:w-auto p-2"
            >
              {/* Meta above the video */}
              <div className="px-3 pt-3">
                <p className="text-[11px] md:text-[13px] text-gray-400">2k views • 1 month ago</p>
              </div>

              {/* Video thumbnail: taller/wider on mobile, aspect on desktop */}
              <div className="relative w-full h-[260px] sm:h-[280px] md:aspect-[16/11] bg-gray-100 rounded-2xl" >
                <img src={s.img} alt={s.title} className="w-full rounded-[12px] h-full object-cover" loading="lazy" />
                <button
                  aria-label="Play"
                  className=" absolute left-3 bottom-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 shadow"
                >
                  ▶
                </button>
                <span className="absolute right-3 bottom-3 text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-white">5:20</span>
              </div>

              {/* Title */}
              <div className="p-3">
                <h4 className="mt-1 text-[14px] md:text-[15px] font-medium text-gray-900 leading-snug">
                  {s.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourceStories
