import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

import "../scss/components/layout.scss"

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className="container-fluid d-flex">
        <Sidebar />
        {children}
      </main>
    </>
  )
}
