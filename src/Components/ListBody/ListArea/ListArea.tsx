import React, { useState } from 'react';
import classes from './ListArea.module.css';
import List from '../../List/List';
import Sublist from '../../Sub-List/Slist';



interface Props{
    addListHandler : Function
    removeListHandler : Function,
    temp : number,
    addList : boolean,
    removeInputBox : Function
}

const ListArea : React.FC<Props> = (props) =>{

    let [state,setstate] = useState({
        list : Array<String>()
    })

    const changeListHandler = (ToDo : String) =>{
        
        setstate({
            ...state,
            list : [...state.list, ToDo]
        })

    }

    const  deleteListHandler = async(id : number) =>{
        
        console.log(state.list);
        props.removeListHandler();
        // props.removeInputBox();
       
        setstate({
            ...state,
            list : state.list.filter((_,i)=>i!==id)
        })
    }
    
    
    let style = props.temp===0?[classes.ListArea, classes.empty]:[classes.ListArea]
    let content = props.temp===0?<p>Enter your list here </p>:(props.addList?<List addList={changeListHandler} 
                addListHandler = {props.addListHandler} removeListHandler={deleteListHandler} remove={props.removeInputBox}/>:null);
    

    return(
        <div id='ListArea' className={style.join(' ')}>
           
            {content}

            <section id = 'ListContainer'>
                {state.list.map((list,index)=>(
                    <Sublist key={index} removeList={()=>deleteListHandler(index)} >{list}</Sublist>
                ))}
            </section>
        </div>
    )
}


export default ListArea;