import React from 'react';
import DOMPurify from 'dompurify';

const ChatListItem = ( {chat} ) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <span>{ chat.username }: </span>
            <span style={{ display: "flex", alignItems: "center" }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(chat.message) }}></span>
        </div>
    );
}

export default ChatListItem;