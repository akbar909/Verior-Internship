import React from 'react'
import Header from '../components/Header'
import Repository from '../components/Repository'
import HomeFeed from '../components/HomeFeed'
import LatestChanges from '../components/LatestChanges'

const Home = () => {
  return (
    <div>
        <Header />
        <div className='justify-center px-4 flex flex-row gap-2'>
            <Repository className="hidden md:flex" />
            <div className='flex flex-row gap-4 w-full '>
            <HomeFeed />
            <LatestChanges />
            </div>
        </div>
    </div>
  )
}

export default Home