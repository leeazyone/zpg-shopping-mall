// 'use client'는 Next.js에서 사용되지 않습니다.

export default function Info() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-20 lg:-mt-8 pb-40">
        <a href="/product/info/page1" className="w-full block col-span-3 shadow-2xl">
          <div className="relative overflow-hidden">
            <img
              src="/event2.jpg"
              alt="event1"
              className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
              Information
            </h1>
          </div>
        </a>

        {/* 다른 이미지에 대한 링크 */}
        <a href="/app/header/info/content/page2" className="w-full block col-span-3 shadow-2xl">
          <div className="relative overflow-hidden">
            <img
              src="/event.jpg"
              alt="event1"
              className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
              Event: 1
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}
