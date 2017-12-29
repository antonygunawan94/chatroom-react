import React, {Component} from 'react';
import ChatList from "./ChatList";
import ChatAction from "./ChatAction";

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            chats: []
        };
    }

    connectToWs(){

    }

    render() {
        return (
            <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent is-vertical is-marginless box">
                    <h1 className="title has-text-centered is-marginless">Channel</h1>
                    <hr style={{ margin: "5px 0" }}/>
                    <h3 className="subtitle has-text-centered is-5">Socket Connection Status</h3>
                </div>
                <ChatList chats={this.state.chats}/>
                <ChatAction onChatSubmit={ (chat) => {
                    this.setState({ chats: this.state.chats.concat(chat) })    
                } } />
            </div>
        );
    }
}

export default Chat;