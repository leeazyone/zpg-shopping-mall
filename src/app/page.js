'use client';

//메인 홈 화면

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  const [products] = useState([]);
  const router = useRouter();

  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-100">

      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-black xl:text-6xl">
              Best Shopping Website
            </h1>
            <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Z.P.G is a humble group of enthusiasts hoping to assist the
              journey of seizing your passion with fashion.
            </p>

            <button
              type="button"
              onClick={() => router.push('/product/products')}
              className="mt-30 inline-block bg-gray-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              go shopping
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="1.jpg" className="h-1500 w-1500 mx-4 my-4" />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-5xl">
              CATEGORY
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="man.jpg"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">MAN</h3>
                  <button
                    onClick={() => router.push('/product/man')}
                    className="mt-1.5 inline-block bg-gray-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="woman.jpg"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">WOMAN</h3>
                  <button
                    onClick={() => router.push('/product/woman')}
                    className="mt-1.5 inline-block bg-gray-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="2.jpg"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">PRODUCT</h3>
                  <button
                    onClick={() => router.push('/product/products')}
                    className="mt-1.5 inline-block bg-gray-700 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
