import React from 'react'
import classes from './TopBar.module.css';
import Input from '../Ui/Input/Input';
import Button from '../Ui/Button/Button';


const TopBar = ({value,handlerInput,handlerButton}) => {
  return (
    <form className={classes.TopBar} onSubmit={handlerButton}>
      <Input label='Enter movie title' value={value} handler={(event) => handlerInput(event.target.value)} required={true}/>
      <Button type='sumbit'>Send</Button>
    </form>
  )
}

export default TopBar
