import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import { height } from 'window-size';
import uuid from "uuid/v1";

class ChatList extends Component {
    
    componentDidUpdate(){
        let chatList = document.querySelector('#chat-list');
        chatList.scrollTop = chatList.scrollHeight;
    }

    chatListItems() {
        return this.props.chats.map( chat => {
            if(chat.message != ""){
                return <ChatListItem key={uuid()} chat={chat}/>;
            }else{
                if(this.props.username != chat.username){
                    return (
                        <div key={ uuid()} style={{ display: "flex", alignItems: "center" }}>
                            <span><span style={{ fontWeight: 'bold' }}>{ chat.username }</span> has join room</span>
                        </div>
                    );
                }else{
                    return (
                        <div key={ uuid()} style={{ display: "flex", alignItems: "center" }}>
                            <span>Welcome <span style={{ fontWeight: 'bold' }}>{ chat.username }</span></span>
                        </div>
                    );
                }
            }
        });
    }

    render() {
        return (
            <div id="chat-list" className = "tile box is-parent is-vertical is-marginless" style={{ minHeight: "600px", overflowY: "auto" }}>
                { this.chatListItems() }
            </div>
        );
    }
}

export default ChatList;