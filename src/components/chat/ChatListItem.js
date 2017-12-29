import React from 'react';

const ChatListItem = ( {chat} ) => {
    return (
        <div>
            <span>{ chat.username }: </span>
            <span>{ chat.message }</span>
        </div>
    );
}

export default ChatListItem;