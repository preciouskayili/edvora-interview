import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import Head from 'next/head'
import RideCard from '../components/RideCard'
import { GetServerSideProps } from 'next'
import { v4 as uuidv4 } from 'uuid'
interface Ride {
  data: Array<{
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

const UpcomingRides = ({ data }: Ride) => {
  const rideProps = {
    rideData: data,
  }
  return (
    <div className=" bg-[#292929]">
      <Head>
        <title>Edvora Internship Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="mt-4">
        <Tabs />
        <div className="mt-5 mb-5">
          {data.map((ride) => (
            <div className="mb-3" key={uuidv4()}>
              <RideCard rideProps={[ride]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingRides

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://assessment.api.vweb.app/rides')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
