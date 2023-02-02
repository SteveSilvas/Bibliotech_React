import React, { useState } from "react";
import "./Notifications.css";
import NotificationsType from "../../@Types/NotificationType";

const Notifications = (props:NotificationsType)=>{
    const [showThis, setShowThis] = useState<boolean>(true);
    
    const classe:string = `NotificationsRoot ${props.Type}`;
    return(
        <div className={classe}>

        </div>
    );
}


export default Notifications;