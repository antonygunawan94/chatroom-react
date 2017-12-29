import React, {Component} from 'react';
import './App.css';
import Chat from "./components/chat/Chat";

class App extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <Chat/>
                </div>
            </section>
        );
    }
}

export default App;
