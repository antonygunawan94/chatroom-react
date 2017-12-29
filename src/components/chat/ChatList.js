import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import { height } from 'window-size';

class ChatList extends Component {
    
    componentDidUpdate(){
        let chatList = document.querySelector('#chat-list');
        chatList.scrollTop = chatList.scrollHeight;
    }

    chatListItems() {
        return this.props.chats.map( chat => {
            return <ChatListItem key={chat.id} chat={chat}/>;
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