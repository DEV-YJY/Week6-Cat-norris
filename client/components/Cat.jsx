import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCats } from '../actions'

import WaitIndicator from './WaitIndicator'

function Cat() {
  const cats = useSelector((state) => state.cats)
  const waiting = useSelector((state) => state.waiting)
  // const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCats())
    //   .then(()=>{
    //     setIsLoading(false)
    //   }).catch()
    // if(cats !=null){
    // }
  }, [])

  if(waiting) return <WaitIndicator />

  return (
    <div>
      <img className='card-img-top' src={cats} alt="random cat" />
    </div>
  )
}

export default Cat
// const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchcats())
  // }, [])