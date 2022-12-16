import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
const Home = () => {
   const [success,setSuccess] = useState(false)
  return (
    <div>
       <Button onClick={()=>setSuccess(true)} variant="success">Success</Button>{' '}
      <Button onClick={()=>setSuccess(false)} variant="danger">Danger</Button>{' '}
      {success &&<p>Hello React !</p>}
    </div>
  )
}

export default Home