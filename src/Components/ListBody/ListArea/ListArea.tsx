import React, { useEffect } from 'react';
import classes from './ListArea.module.css';
import List from '../../List/List';

interface Props{
    isEmpty : number
}

const ListArea : React.FC<Props> = (props) =>{

    useEffect(()=>{
        document.getElementById('text')?.focus();
    },[props.isEmpty])

    let style = (props.isEmpty!==0)?[classes.ListArea]:[classes.ListArea,classes.empty]
    let content = (props.isEmpty===0)?<p>Enter your list here </p>:<List id={props.isEmpty}/>;


    return(
        <div className={style.join(' ')}>
              {content}
        </div>
    )
}


export default ListArea;