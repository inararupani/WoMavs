import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Chatroom.css";
import {Row, Col} from "react-bootstrap";
import SidePanel from "./component/SidePanel/SidePanel";
import ColorPanel from "./component/ColorPanel/ColorPanel";
import Message from "./component/Messages/Messages";
import MetaPanel from "./component/MetaPanel/MetaPanel";
import MessagesHeader from "./component/Messages/MessagesHeader";
import MessageForm from "./component/Messages/MessageForm";




function Chatroom  () {
    return (
        <div className="app">
            <MessagesHeader/>
            <div className="app__body">
            <SidePanel/>
            <Message/>
            <MessageForm/>
        </div>
        </div>

    );
}

export default Chatroom;