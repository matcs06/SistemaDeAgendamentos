import React from 'react';
import {SideBarData} from "./SideBarData"
import styles from "./SideBar.module.scss"
import Image from 'next/image'
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import { useState, useEffect } from 'react';

interface SideBarItemProps{
   title: string;
   icon: any;
   page: string;
}

const SideBar: React.FC = () => {
  
  const [sideBarContiner, setSideBarContainer] = useState("styles.sidebarContainer")
  useEffect(()=>{
   window.addEventListener('resize', () => {
    if(window.screen.width <= 760){
       document.documentElement.style.setProperty('--sidebar-width', "0px");
       document.documentElement.style.setProperty('--display-header', "none");
    }else{
       document.documentElement.style.setProperty('--sidebar-width', "280px");
       document.documentElement.style.setProperty('--display-header', "flex");
    }
  });
  })


  const handleTogleClick = ()=>{
     if(sideBarContiner == "styles.sidebarContainer"){
        setSideBarContainer("styles.sideBarHidden")
        document.documentElement.style.setProperty('--sidebar-width', "0px");
        document.documentElement.style.setProperty('--display-header', "none");
     }else{
        setSideBarContainer("styles.sidebarContainer")
        document.documentElement.style.setProperty('--sidebar-width', "280px");
        document.documentElement.style.setProperty('--display-header', "flex");
     }

  }

  return(
     <>
     <div className={styles.toogle} onClick={handleTogleClick}>
        <FormatLineSpacingIcon/>
     </div> 
     <div className={styles.sidebarContainer}>
        
        <Image className={styles.logo}
             src="/minilogo.png"
             width={100}
             height={120}
             alt="logo-login"/>
        <h1 className={styles.title}>Studio Antonielem Ramos</h1>
        <ul>
           {SideBarData.map((value, key)=>{
           return( 
              <li key={key} onClick={()=>{window.location.pathname = value.link}}>
               {""}
               <div className={styles.icon}>{value.icon}</div>{""}
               <div className={styles.services}>
                  {value.title}
               </div>
              </li>
            )
           })}
        </ul>
        
     </div>
     </>
  )
}

export default SideBar;