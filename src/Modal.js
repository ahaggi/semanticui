
import React, { Component } from 'react';
import { Button, Loader, Modal, Header,  Container , Progress} from 'semantic-ui-react'


class OutterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            percent: 0,
            open: false,
            numberOffiles: 10,
            filesUnderupload: []
        }
    }


    startProgress = () => {

        this.setState(
            (prevState) => { return { filesUnderupload: this.updateAll(prevState.filesUnderupload) } }
            ,
            () => {
                this.setState({percent: this.getNrOfCompleted() / this.state.numberOffiles*100})
                this.checkCompleted()}
        )
        console.log(JSON.stringify(this.state, null, 4) + this.getNrOfCompleted()+ '  ***  ' +  this.getPrcntOfCompleted())
    }
    checkCompleted = () => {
        if (!this.isCompleted(this.state.filesUnderupload)) {
            setTimeout(() => this.startProgress(), 1000)
        } else
            this.setState({ open: false })

    }
    isCompleted = (array) => {
        return array.reduce((res, val) => { return res && val.ferdig }, true);
    }
    getNrOfCompleted = () => {
        return this.state.filesUnderupload.reduce(
            (res, val) => {
                return val.ferdig ? res + 1 : res
            }, 0);
    }
    getPrcntOfCompleted = () => {
        return Math.ceil(this.state.filesUnderupload.reduce(
            (res, val) => {
                return  res + val.progress
            }, 0) /(this.state.numberOffiles*100)  *100)
    }

    updateAll = (fuu) => {
        var fuu_copy = [...fuu]
        fuu_copy.forEach(
            (obj) => {
                if (obj.progress < 100)
                    obj.progress = obj.progress + Math.floor(Math.random() * 30)

                obj.ferdig = obj.progress < 100 ? false : true
                obj.progress = obj.ferdig ? 100 : obj.progress
            }
        );
        return fuu_copy
    }


    handleShowModal = () => {
        var temp = []
        for (var i = 0; i < this.state.numberOffiles; i++)
            temp.push({ id: "", progress: 0, ferdig: false })

        this.setState({ open: true, filesUnderupload: temp }, () => this.startProgress())


    }
    handleCloseModal = () => { this.setState({ open: false }) }
    render() {

        return (
            <div>
                <Button onClick={this.handleShowModal}>show</Button>
                <CustomModal
                    open={this.state.open}
                    onClose={this.handleCloseModal}
                    percent={ this.getPrcntOfCompleted()}
                    value_prog2={this.getNrOfCompleted()} total_prog2={this.state.numberOffiles}
                />
            </div>

        )
    }

}

const CustomModal = (props) => (

    <Modal
        open={props.open}
        onClose={props.onClose}
        closeOnEscape={false}
        closeOnRootNodeClick={false}
        closeIcon
        basic size='large'
    >
        <Modal.Content>
            <Loader active inline='centered' size='large' ></Loader>
            <Header textAlign='center' as='h3' color='teal'>Loding files 1 of n ... </Header>
            <Container font textAlign='center'>progress {props.percent}</Container>
            <Progress percent={props.percent} inverted progress>  Uploading Files </Progress>
            <Progress value={props.value_prog2} total={props.total_prog2}  progress='ratio' inverted progress>  Uploading Files </Progress>

        </Modal.Content>

    </Modal>
)


export default OutterComponent;
