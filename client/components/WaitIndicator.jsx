import React from 'react'
import {useSelector} from 'react-redux'

function WaitIndicator() {
  const showIndicator = useSelector((state) => state.waiting)

  return showIndicator ? (
    <div className='d-flex justify-content-center spin'>
    <div className='spinner-border text-warning ' style={{width:' 3rem',height:' 3rem'}} role={'status'}>
      <span className='visually-hidden'>Loading ...</span>
      </div>
    </div>
  ) : null
}



export default WaitIndicator