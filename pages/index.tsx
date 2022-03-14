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
  user: {
    station_code: number
    name: string
    url: string
  }
}

const Home = ({ data, user }: Ride) => {
  let states: string[]
  let city: string[]

  states = []
  city = []
  console.log(user)
  return (
    <div className=" bg-[#292929]">
      <Head>
        <title>Edvora Internship Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar user={user} />

      <div className="mt-4">
        <Tabs state={states} city={city} />
        <div className="mt-5 mb-5">
          {data.map((ride) => (
            <>
              <div className="hidden">
                {city.push(ride.city)}
                {states.push(ride.state)}
                {console.log(states)}
              </div>
              <div className="mb-3" key={uuidv4()}>
                <RideCard rideProps={[ride]} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://assessment.api.vweb.app/rides')
  const data = await res.json()

  const second_res = await fetch('https://assessment.api.vweb.app/user')
  const user = await second_res.json()
  console.log(user)

  return {
    props: {
      data,
      user,
    },
  }
}
