import classes from './List.module.css';
import React, { useState } from 'react';


interface Props{
    id : number
}

const Lists : React.FC<Props> = (props) =>{

    let [state, setState] = useState({isDisabled : true})

    const buttonStateHandler = (event : React.FormEvent<HTMLInputElement>) =>{
        
        let text : String = event.currentTarget.value as String;

        if(text.length > 5){
            setState({
                ...state,
                isDisabled : false
            })
        }
        else if(text.length === 0){
            setState({
                ...state,
                isDisabled : true
            })
        }
    }

    return(
        <section className={classes.List}>
            <input id='text' className={classes.text} onChange={(event : React.FormEvent<HTMLInputElement>)=>buttonStateHandler(event)}/>
            <button className={classes.addButton} disabled={state.isDisabled}>Add</button>
        </section>
    )
}

export default Lists;