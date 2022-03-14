interface User {
  user: {
    station_code: number
    name: string
    url: string
  }
}
const Navbar = ({ user }: User) => {
  return (
    <>
      <nav className="bg-[#101010]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0">
                <a className="text-2xl font-bold text-white" href="/">
                  Edvora
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
                  >
                    <p className="text-l mr-3 items-center justify-center font-bold text-white">
                      {user.name}
                    </p>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.url}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
