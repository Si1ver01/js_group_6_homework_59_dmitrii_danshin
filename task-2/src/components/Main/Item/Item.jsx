import React from 'react'
import classes from './Item.module.css'

const Item = ({text}) => {
  return (
    <div className={classes.Item}>
      <p>{text}</p>
    </div>
  )
}

export default Item
