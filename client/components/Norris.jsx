import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNorris } from '../actions/index'

function Norris() {
  const norris = useSelector((state) => state.norris)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchNorris()) 
  }, [])

  return (
    <div>
      <h3 className='card-title'>Quote:</h3>
      <p className='card-text' >{norris}</p>
    </div>
  )
}

export default Norris