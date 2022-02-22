import React from 'react'
import classes from './NotFound.module.css'
const NotFound = () => {
  return (
    <div className={` ${classes.not__found} d-flex flex-column justify-content-center align-items-center`}>
        <h1 className={`${classes.error}`}>Error 404 </h1>
        <h1 className={``}>Not Found </h1>       
    </div>
  )
}

export default NotFound