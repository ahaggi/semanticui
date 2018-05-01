
import React, { Component } from 'react';
import { Button, Loader, Modal, Header, Icon ,Container} from 'semantic-ui-react'


class OutterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persent: 0,
            open: false,
            numberOffiles:0
        }
    }

    startProgress = () => {
        setInterval(() => { // istedenfor setInterval, kommer dte være en API kall som retunerer antall filer og progresjon
            this.setState((prevState) => { return { persent: prevState.persent + 10 } }  , ()=> console.log('qqqqqq'))
        }, 1000)
    }

    handleShowModal= ()=>{  
        this.setState({ open: true }) 
        this.startProgress()
    }
    handleCloseModal= ()=>{ this.setState({ open: false }) }
    render() {
        return (
            <div>
                <Button onClick={this.handleShowModal}>show</Button>
                <CustomModal
                open={this.state.open}
                onClose={this.handleCloseModal}
                persent={this.state.persent}

                />
            </div>

        )
    }

}

const CustomModal = (props)=>(

    <Modal
    open={props.open}
    onClose={props.onClose }
    closeOnEscape={false}
    closeOnRootNodeClick={false}
    closeIcon
    basic size='large'
>
    <Modal.Content>
        <Loader active inline='centered' size='large' ></Loader>
        <Header textAlign='center' as='h3' color='teal'>Loding files 1 of n ... </Header>
        <Container font textAlign='center'>progress {props.persent}</Container>
    </Modal.Content>

</Modal>
)


export default OutterComponent;
