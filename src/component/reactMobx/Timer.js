import React from 'react'
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import { Navbar, Jumbotron, Button } from "react-bootstrap"

@observer
class TimerView extends React.Component {
    render() {
        return (
        <Button
            bsStyle="success"
            bsSize="large"
            onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </Button>);
    }

    onReset () {
        this.props.appState.resetTimer();
    }
}

export default class Timer extends React.Component {
    render() {
        var appState = observable({
            timer: 0,
            resetTimer : function() {
                appState.timer = 0;
            }
        });
        
        // appState.resetTimer = function() {
        //     appState.timer = 0;
        // };
        
        setInterval(function() {
            appState.timer += 1;
        }, 1000);

        return (
            <TimerView appState={appState} />
        )
    }
}
// ReactDOM.render(<TimerView appState={appState} />, document.body);