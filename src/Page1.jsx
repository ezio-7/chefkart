import { useState } from 'react'
import Header from './Header'
import Featured from './Featured'
import Recommended from './Recommended'

export default function Page1() {
    return (
      <div className = "Page1">
        <Header />
        <Featured />
        <Recommended />
      </div>
    );
  }