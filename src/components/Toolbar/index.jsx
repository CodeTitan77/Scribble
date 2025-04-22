import React, { useState } from 'react';
import classes from "./index.module.css"
import cx from "classnames";
import { LuRectangleHorizontal } from 'react-icons/lu';
import {FaSlash} from 'react-icons/fa';

const Toolbar = () => {
const [activeToolItem, setActiveToolItem] = useState("A")
  return (
    <div>
        <div className={classes.container}>

            <div onClick={()=>{setActiveToolItem("A")}} className={cx(classes.toolItem,{[classes.active]:activeToolItem==="A",})}> A</div>
            <div onClick={()=>{setActiveToolItem("B")}} className={cx(classes.toolItem,{[classes.active]:activeToolItem==="B"})}> B</div>


        </div>
      
    </div>
  )
}

export default Toolbar;
