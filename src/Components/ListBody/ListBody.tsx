import React, { useState } from 'react';
import classes from './ListBody.module.css';
import AddButton from './AddButton/AddButton';
import ListArea from './ListArea/ListArea';



const ListBody : React.FC = () =>{
    
    let [state, setState] = useState({
        listCount : Number(),
        temp : Number(),
        addList : Boolean()
    })


    
    const addListHandler = () =>{
        setState({
            ...state,
            listCount : state.listCount + 1
        })
    }

    const  removeListHandler = () =>{
     
        let updateCount = state.listCount -1
        
        setState({
            ...state,
            temp: updateCount>=0?updateCount:0,
            listCount : updateCount>=0?updateCount:0
        })

    }

    const addInputFieldHandler = () =>{

        setState({
            ...state,
            temp : state.listCount + 1,
            addList : true
        })

    }
    
    
    const removeInputFieldHandler = () =>{
        
        setState({
            ...state,
            addList : false
        })
    }

    return(
        <section className={classes.listBox}>
            <AddButton  click={addInputFieldHandler}/>
            <ListArea  
                    addList = {state.addList} 
                    temp={state.temp} 
                    addListHandler = {addListHandler} 
                    removeListHandler={removeListHandler}
                    removeInputBox = {removeInputFieldHandler}
            />
        </section>
    )
}

export default ListBody;