import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByAmount} from '../../slices/counter/counterSlice'
import './homePage.css'

const HomePage = () => {
  const counterValues = useSelector((state)=> state.allCounterActions)
  const dispatch = useDispatch()

  return (
    <>
    <section className="banner section-gap">
        <div className="container">
            <h1>Home Content</h1>
            <div className="counter">
              <button type="button" className="counter__btn" onClick={() => dispatch(decrement())}>
                <i className="bi bi-dash-lg"></i>
              </button>
              <h3 className="counter__text">{counterValues.value}</h3>
              <button type="button" className="counter__btn" onClick={() => dispatch(increment())}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            <div className="counter">
              <button type="button" className="counter__btn" onClick={() => dispatch(decrement())}>
                <i className="bi bi-dash-lg"></i>
              </button>
              <h3 className="counter__text">{counterValues.value}</h3>
              <button type="button" className="counter__btn" onClick={() => dispatch(increment())}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomePage