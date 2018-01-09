import React, { Component } from 'react';
import uuid from "uuid/v1";

class ChatAction extends Component {
    constructor(props){
        super(props);
        
        this.onChatSubmit = props.onChatSubmit;
        
        this.state = { 
            id: "",
            username: "",
            message: "",
        };
    }

    sendChat(chat){
        chat.id = uuid();
        chat.username = this.props.username;
        if(chat.message != ""){
            this.onChatSubmit(chat);
            this.setState({ message: "" });
        }else{
            alert("Please input your message");
        }
    }

    render() {
        return (
            <div className="tile box is-parent">
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child">
                        <p className="control">
                            <textarea className="textarea" 
                                type="text" 
                                placeholder="Message"
                                value={this.state.message} 
                                onChange={ event => this.setState({ message: event.target.value }) }
                                onKeyPress={ event => {
                                        if(event.key === 'Enter'){
                                            this.sendChat(this.state); 
                                            event.preventDefault();
                                        } 
                                    }}></textarea>
                        </p>
                    </div>
                </div>
                <div
                    className="tile is-parent is-2"
                    style={{
                        alignItems: "flex-end"
                    }}>
                    <p className="control">
                        <button className="button is-info" onClick={() => this.sendChat(this.state)}>Send Message</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default ChatAction;