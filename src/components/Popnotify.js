import React from 'react'

function Popnotify(props) {
  return (
    <>
   {  (props.msg) && <div className={`alert alert-${props.msg.type} alert-dismissible fade show  m-2`} role="alert">
  <strong className='text-uppercase'>{props.msg.type} :</strong> {props.msg.msg}
  
</div> }
    </>
  )
 
}

export default Popnotify