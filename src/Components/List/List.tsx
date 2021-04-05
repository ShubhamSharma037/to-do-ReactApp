import classes from './List.module.css';
import React, { useEffect, useState } from 'react';




interface Props{
    addListHandler : Function,
    removeListHandler : Function,
    addList : Function,
    remove : Function
 
}

const Lists : React.FC<Props> = (props) =>{

   const [state,setState] = useState({
       inputString : String()
   })

   useEffect(()=>{
    //    console.log("List rendered " + state.inputString);       
       document.getElementById('txt')?.focus();
   })


    const addListBtn = () =>{
        
         
        if(state.inputString!==""){
            const inputBox =  document.getElementById('txt') as HTMLElement;
            inputBox.innerText="";
            
            props.addList(state.inputString);
            props.addListHandler()

        }

    }

    
    const createListWithEnterBtn = (event : React.KeyboardEvent<HTMLInputElement>) =>{

        const userInput : string = event.currentTarget.value;


        if(event.key==='Enter'){
            addListBtn();
        }

        else{

            setState({
                ...state,
                inputString : userInput
            })
        }
        

    }

    
    const removeListBtn = () =>{
        props.remove();
    }

    return(
        
        <section id='List' className={classes.List}>  

            <input className={classes.text}  type='text' id='txt'
                onKeyUp={event => createListWithEnterBtn(event)}  placeholder="Enter your task"
            /> 

            <div className={classes.ListArea_button}>
                <button type='button' id='add' className={classes.ListArea_buttonAdd} onClick={addListBtn}>Add</button>
                <button type='button' id='cancel' className={classes.ListArea_buttonCancel} onClick={removeListBtn}>Cancel</button>
            </div>
        </section>
    )
}

export default Lists;