import classes from './AddButton.module.css';
import React from 'react';



interface Props{
    click : Function
}



const createRippleEffect = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    
    const button : HTMLElement  = event.currentTarget as HTMLElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button?.clientHeight,button.clientWidth);
    const radius = diameter/2;
    

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX-(button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY-(button.offsetTop + radius)}px`;
    circle.classList.add(`${classes.ripple}`);
     
    const ripple = button.getElementsByClassName(`${classes.ripple}`)[0];
    if(ripple){
        ripple.remove();
    }
    button.appendChild(circle);
}


const AddButton : React.FC<Props> = (props) =>{

    

    return(
        <div className={classes.Button}>
            <button id='addBtn' 
                onClick={(event : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
                    createRippleEffect(event)
                    props.click()
                }}
            />
        </div>
    )
}


export default AddButton;