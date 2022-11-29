import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {
  const counterValues = useSelector((state)=> state.allCounterActions)
  return (
    <>
    <section className="user section-gap">
        <div className="container">
            <h1>User Content</h1>
            <h5>{counterValues.value}</h5>
        </div>
    </section>
    </>
  )
}

export default UserPage