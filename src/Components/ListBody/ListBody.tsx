import React, { useEffect, useState } from 'react';
import classes from './ListBody.module.css';
import AddButton from './AddButton/AddButton';
import ListArea from './ListArea/ListArea';



const ListBody : React.FC = () =>{

    let [state, setState] = useState({
        addList : 0
    })

    useEffect(()=>{
        console.log(state.addList)
    });

    const addListHandler = () =>{
        setState({
            ...state,
            addList : state.addList+1
        })
    }

    return(
        <section className={classes.listBox}>
            <AddButton click={addListHandler}/>
            <ListArea isEmpty={state.addList}/>
        </section>
    )
}

export default ListBody;