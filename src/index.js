import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// // import './index.css';
// // import { Button, Header, Image, Modal } from 'semantic-ui-css/semantic.min.css';
// import ModalPage from './Modal'
// import Progress from './ProgressExampleActive'



import { Button, Loader, Modal } from 'semantic-ui-react'


class ModalBasicExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persent:0
        }
    }

componentDidMount() {
    setInterval(() => {
      this.setState({persent:this.state.persent+10})  
    },1000)
}
    render() {
        return (
            <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
                <Modal.Content>
                    <Loader active inline='centered' size='large' >sdkfsdf {this.state.persent}</Loader>
                </Modal.Content>
                {/* <Modal.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions> */}
            </Modal>
        )
    }

}




ReactDOM.render(<ModalBasicExample />, document.getElementById('root'));
