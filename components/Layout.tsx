import React, { FC } from 'react'
import { Navbar } from './Navbar'

export const Layout: FC = ({ children }) => (
  <>
    <Navbar />
    <main className="flex justify-center items-start">{children}</main>
  </>
)
