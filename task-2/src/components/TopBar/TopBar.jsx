import React from 'react'
import classes from './TopBar.module.css';
import Input from '../Ui/Input/Input';
import Button from '../Ui/Button/Button';

const TopBar = ({inputHandler, value , buttonHandler}) => {
  return (
    <form className={classes.TopBar}>
      <Input type='number' required={true} handler={(event) => inputHandler(event.target.value)} value={value}/>
      <Button handler={(event) => buttonHandler(event)}>Show jokes</Button>
    </form>
  )
}

export default TopBar
