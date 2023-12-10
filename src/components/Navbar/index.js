//로그인 전 / 후 두 개의 화면으로 보일 수 있도록 코드 작성해보았으나 아직 로그인 화면이 만들어지지 않아서 생략

'use client';

import { navOptions } from '@/utils';
import { Fragment } from 'react';
import { usePathname, useRouter } from 'next/navigation';

function NavItems({ isModalView = false, isAdminView, router }) {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${
        isModalView ? '' : 'hidden'
      }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? 'border-none' : 'border border-gray-100'
        }`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}


export default function Navbar() {
  

  const pathName = usePathname();
  const router = useRouter();


  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove('token');
    localStorage.clear();
    router.push('/');
  }

  //cart랑 account만 페이지 생성하기 나머지는 백앤드가(로그인/로그아웃)
  const isAdminView = pathName.includes('admin-view');

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            onClick={() => router.push('/')}
            className="flex items-center cursor-pointer"
          >
            <span className="slef-center text-3xl text-black font-semibold whitespace-nowrap">
              Z.P.G
            </span>
          </div>
          <div className="flex md:order-2 gap-2">

              <Fragment>
                <button
                  className={
                    'mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                  }
                  onClick={() => router.push('/header/info')} 
                >
                  info
                </button>
                <button
                  className={
                    'mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                  }
                  onClick={() => router.push('/pages/basket')} 
                >
                  Cart
                </button>
              </Fragment>
              <button
                onClick={() => router.push('/header/logout')}
                className={
                  'mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                }
              >
                Logout
              </button>

              <button
                onClick={() => router.push('/header/login')}
                className={
                  'mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white'
                }
              >
                Login
              </button>
            
          </div>
          <NavItems router={router} isAdminView={isAdminView} />
        </div>
      </nav>

    </>
  );
}