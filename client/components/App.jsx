import React  from 'react'

import Cat from './Cat'
import Norris from './Norris'

function App () {
  // const showIndicator = useSelector((state) => state.waiting)
  //const fruits = useSelector(state => state.fruits)
  // const dispatch = useDispatch()
  //  useEffect(() => {
    
  //  // dispatch(fetchFruits())
  //  }, [])
  const refreshPage = () => {
    window.location.reload()
  } 
//console.log(showIndicator)
  return (
    <>
      <div className='app  '>
        <h1 className='text-center' >Cat Norris</h1>
        <div className='container d-flex align-items-center justify-content-center'>

    
        <div className='card mb-3 w-50'>
        <Cat/>
          {/* {showIndicator ? <WaitIndicator/> : <Cat/>} */}
        <div className='card-body align-items-center text-center justify-content-center'>
        <Norris />
        {/* <button className='btn btn-danger' onClick={refreshPage}>Roundhouse Kick!</button> */}
      <img onClick={refreshPage} className='img-thumbnail norris ' src='/images/cat-norris_v2.png' alt='cat-norris'/>
        </div>
        </div>
        </div>
       </div>
    </>
  )
}

export default App
