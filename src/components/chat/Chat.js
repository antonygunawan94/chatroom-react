import React, {Component} from 'react';
import ChatList from "./ChatList";
import ChatAction from "./ChatAction";
import uuid from "uuid/v1";

class Chat extends Component {

    constructor() {
        super();
        this.state = {
            chats: [],
            socket: null,
            socketStatus : "Loading..."       
        };
    }

    componentDidMount(){
        var username = this.props.username;
        if (username == ''){
            this.props.history.push('/');
            return
        }
        this.setState({ username: username });
        let msgjoin = { id: uuid(), username: username, message: "" };
        this.connectToWs(msgjoin);       
    }

    connectToWs(msgjoin){
        let socket = new WebSocket("ws://localhost:8080/ws?channel=asd")
        socket.addEventListener('open', () => {
            this.setState({socketStatus : "Connected..." })
            socket.send(JSON.stringify(msgjoin))
        })
        socket.addEventListener('error', (error) => {
            this.setState({ socketStatus: "Error..." })            
        })
        socket.addEventListener('message', (event) => {
            this.receiveMessage(event.data)
        })

        this.setState({ socket: socket })
    }

    sendMessage(chat){
        this.state.socket.send(JSON.stringify(chat))
    }

    receiveMessage(data){
        let chat = JSON.parse(data);
        this.setState({ chats: this.state.chats.concat(chat) })
    }

    render() {
        return (
            <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent is-vertical is-marginless box">
                    <h1 className="title has-text-centered is-marginless">Channel</h1>
                    <hr style={{ margin: "5px 0" }}/>
                    <h3 className="subtitle has-text-centered is-5">{ this.state.socketStatus }</h3>
                </div>
                <ChatList chats={this.state.chats} username={this.state.username}/>
                <ChatAction onChatSubmit={ (chat) => {
                        this.sendMessage(chat)
                }} username={this.state.username} />
            </div>
        );
    }
}

export default Chat;