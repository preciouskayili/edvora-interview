import { useState } from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false)
  const hoverClass: string =
    'z-10 absolute right-0 mt-2 w-[200px] origin-top-right rounded-md bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'

  const activeClass: string = ' underline underline-offset-8 font-bold'

  const router: any = useRouter()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0">
                <Link href="/">
                  <a
                    className={
                      router.pathname === '/'
                        ? `text-md mr-10 text-white ${activeClass}`
                        : `text-md mr-10 text-white`
                    }
                  >
                    Nearest Rides
                  </a>
                </Link>

                <Link href="/upcoming-rides">
                  <a
                    className={
                      router.pathname === '/upcoming-rides'
                        ? `text-md mr-10 text-white ${activeClass}`
                        : `text-md mr-10 text-white`
                    }
                  >
                    Upcoming Rides
                  </a>
                </Link>

                <a className="text-md mr-10 cursor-not-allowed text-[#D0CBCB]">
                  Past Rides
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center text-white focus:outline-none"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_199)">
                        <path
                          d="M2.99994 18.0001H8.99994V16.0001H2.99994V18.0001ZM2.99994 6.00009V8.00009H20.9999V6.00009H2.99994ZM2.99994 13.0001H14.9999V11.0001H2.99994V13.0001Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_199">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="text-l ml-2 items-center justify-center text-[#F2F2F2]">
                      Filters
                    </p>
                  </button>
                </div>
                <div
                  className={
                    !isOpen
                      ? `${hoverClass} hidden bg-black`
                      : `${hoverClass} bg-black`
                  }
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <h1 className="text-2xl font-light text-white">Filters</h1>
                  <hr className="mt-[10px] text-[#CBCBCB]" />

                  <form className="mt-4" action="/">
                    <select
                      name="form_select_one"
                      className="w-full rounded border-0 bg-[#232323] text-white"
                      id="select_one"
                    >
                      <option value="State">State</option>
                    </select>

                    <select
                      name="form_select_one"
                      className="mt-3 w-full rounded border-0 bg-[#232323] text-white"
                      id="select_one"
                    >
                      <option value="City">City</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Tabs
