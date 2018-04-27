
import React, { Component } from 'react';
import Progress from './ProgressExampleActive'

class HelloModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            percent:30
        }

    }
    
    render() {
        var modal_classes = (this.state.visible) ? 'ui small modal transition visible active' : 'ui small modal transition hidden';
        return (
            <div className={modal_classes}>
                <div className="ui center aligned header">Hello</div>
                <div className="content">
                    <p>dsffdssdddddddddd</p>
                    {/* <Progress percent={this.state.percent}/> */}
                </div>
            </div>
        );
    }
}


class ModalPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false

        }

    }
    componentDidMount() {
        var self = this;
    //   

    }

    handleShow = () => {
        this.setState({
            visible: true
        });
    }
    handleHide = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        var modal_classes = (this.state.visible) ? 'ui dimmer modals page transition visible active' : 'ui dimmer modals page transition hidden';
        return (

            <div>
                <div className="ui teal button" onClick={this.handleShow}>Show Modal</div>


                <div className={modal_classes} onClick={this.handleHide}>
                    <HelloModal />
                </div>
            </div>
        );
    }
}
export default ModalPage;
