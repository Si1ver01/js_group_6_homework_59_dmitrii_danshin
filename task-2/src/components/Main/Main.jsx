import React from 'react'
import classes from './Main.module.css'
import Item from './Item/Item'
import Preloader from '../Ui/Preloader/Preloader'

const Main = ({list,preloader}) => {
  return (
    <div className={classes.Main}>
      {preloader ? <Preloader/> : list.map((elem,index) => <Item text={elem} key={index}/>) }
    </div>
  )
}

export default Main
