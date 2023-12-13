import React, { useState } from 'react'
import trailContext from './trialsContext'

const TrailUseContext = ({ children }) => {
  const [trail, setTrail] = useState([])
  return (
    <trailContext.Provider value={{ trail, setTrail }}>
      {children}
    </trailContext.Provider>
  )
}

export default TrailUseContext;
