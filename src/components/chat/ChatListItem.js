import React from 'react';

function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    console.log(doc.documentElement.lastChild.firstChild)
    console.log(input)
    return doc.documentElement.lastChild.firstChild.textContent;
}

const ChatListItem = ( {chat} ) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <span>{ chat.username }: </span>
            <span style={{ display: "flex", alignItems: "center" }} dangerouslySetInnerHTML={{ __html: chat.message }}></span>
        </div>
    );
}

export default ChatListItem;