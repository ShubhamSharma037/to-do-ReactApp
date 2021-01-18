import React, { ReactElement } from 'react';
import TitleBar from '../../Components/TitleBar/TitleBar';


interface Props{
    children : ReactElement
}




const Layout : React.FC<Props> = (props) =>{
    return(
        <React.Fragment>
            <TitleBar/>
            <main>
                {props.children}
            </main>
        </React.Fragment>
        
    )
}

export default Layout;