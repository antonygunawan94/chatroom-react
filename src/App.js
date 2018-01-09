import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Chat from "./components/chat/Chat";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <form>
                                    <label>
                                    Name:
                                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                                    </label>
                                    <Link to="/chat"><button>Submit</button></Link>
                                </form>
                            </Route>
                            <Route exact path='/chat' render={props => <Chat {...props} username={this.state.value}/>}/>
                        </Switch>
                    </Router>
                </div>
            </section>
        );
    }
}

export default App;
