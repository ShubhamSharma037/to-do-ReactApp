import React from 'react';
import classes from './TitleBar.module.css';


const TitleBar : React.FC = () =>{
    return(
        <header className={classes.title}>
            To-do List App
        </header>
    )
}


export default TitleBar;