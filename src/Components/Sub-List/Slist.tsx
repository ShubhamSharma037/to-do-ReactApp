import React, { useState } from 'react';
import classes from './Slist.module.css';


type props = {
    children : String,
    removeList : Function
}





const Slist : React.FC<props> = (props) =>{
    
    const [state,setState] = useState({
        done : false
    })

    const doneButtonHandler = () =>{
        setState({
            done : !state.done
        })
    }


    return(
        <div className={classes.list}>
            {
            !state.done?
                <p>{props.children}</p>
                :<p style={{color:"grey",textDecoration:"line-through"}}>{props.children}</p>
            }
            

            <section className={classes.actions}>

                <button type = 'button' onClick={doneButtonHandler} className={classes.doneButton}>
                    {!state.done?<img alt="done" src='https://www.pinclipart.com/picdir/big/185-1858206_circle-tick-svg-png-icon-free-download-clipart.png'/>:
                        <img alt='pending' src="https://icon-library.com/images/wrong-icon/wrong-icon-14.jpg"/>}
                </button>

                <button type = 'button' onClick={()=>props.removeList()} className={classes.deleteButton}>
                    <img alt="delete" src='https://www.pngkit.com/png/detail/112-1124597_recycle-bin-recycle-bin-svg.png'/>
                </button>

            </section>
        </div>
    )
}

export default Slist;