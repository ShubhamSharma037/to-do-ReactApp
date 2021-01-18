import React from 'react';
import classes from './TitleBar.module.css';


const TitleBar : React.FC = () =>{
    return(
        <header className={classes.title}>
            To-do App
        </header>
    )
}


export default TitleBar;