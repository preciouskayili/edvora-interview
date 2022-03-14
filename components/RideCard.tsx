interface Ride {
  rideProps: Array<{
    id: number
    origin_station_code: number
    station_path: number[]
    destination_station_code: number
    date: Date
    map_url: string
    state: string
    city: string
  }>
}
const RideCard = ({ rideProps }: Ride) => {
  return (
    <>
      <div className="mx-auto w-[95%]">
        <div className="relative flex rounded-lg bg-[#171717] p-4 shadow-lg transition duration-500 hover:shadow-2xl">
          <div className="flex items-center">
            <img
              src={rideProps[0].map_url}
              className="h-[200px] w-[270px] rounded object-cover"
              alt="Map"
            />

            <div className="ml-[45px] flex-col">
              <p className="mb-2 text-lg leading-6 text-white">Ride Id: 002</p>
              <p className="mb-2 text-lg leading-6 text-white">
                Origin Station : {rideProps[0].origin_station_code}
              </p>
              <p className="mb-2 text-lg leading-6 text-white">
                station_path : {`[${rideProps[0].station_path}]`}
              </p>
              <p className="mb-2 text-lg leading-6 text-white">
                Date : {rideProps[0].date}
              </p>
              <p className="mb-2 text-lg leading-6 text-white">Distance : 0</p>
            </div>
          </div>
          <div className="ml-auto flex flex-col">
            <div className="flex">
              <span className="inline-flex items-center justify-center rounded-full bg-[#0000008F] px-2 py-1 text-sm font-semibold leading-none text-white">
                {rideProps[0].city}
              </span>

              <span className="ml-2 inline-flex items-center justify-center rounded-full bg-[#0000008F] px-2 py-1 text-sm font-semibold leading-none text-white">
                {rideProps[0].state}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RideCard
