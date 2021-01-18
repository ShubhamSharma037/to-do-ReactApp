import React from 'react';
import classes from './ListBody.module.css';
import AddButton from './AddButton/AddButton';
import ListArea from './ListArea/ListArea';



const ListBody : React.FC = () =>{
    return(
        <section className={classes.listBox}>
            <AddButton/>
            <ListArea/>
        </section>
    )
}

export default ListBody;