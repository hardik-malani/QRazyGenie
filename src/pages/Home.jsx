import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'

export default function Home() {
    return (
      <div className="flex flex-col overflow-x-hidden h-screen">
        <div className="flex flex-row">
          <Sidebar />
            <Hero />
        </div>
      </div>
    );
  }
  