import React, {Component} from 'react';
import ChatList from "./ChatList";
import ChatAction from "./ChatAction";

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
        this.connectToWs();        
    }

    connectToWs(){
        let socket = new WebSocket("ws://localhost:8080/ws?channel=asd")
        socket.addEventListener('open', () => {
            this.setState({socketStatus : "Connected..." })
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
        let chat = JSON.parse(data)
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
                <ChatList chats={this.state.chats}/>
                <ChatAction onChatSubmit={ (chat) => {
                        this.sendMessage(chat)
                } } />
            </div>
        );
    }
}

export default Chat;