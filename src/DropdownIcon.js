import React, { Component } from 'react'
import { Dropdown , Flag } from 'semantic-ui-react'
import ReactDOM from 'react-dom';

class DropdownIcon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: "no"
        }
        this.options = [
            { flag: 'no', text: '00' , value:'0' , key:'0'},
            { flag: 'gb', text: '11' , value:'1' , key:'1'},
            { flag: 'se', text: '22' ,value:'2' , key:'2'}
        ]
    }
  
        render() {
            console.log(this.state)
        return (
            <Dropdown 
            text=' ' 
            icon={ <Flag name={this.state.flag} />} 
            floating  
            button 
            options={this.options} className='icon'
            onChange={(event, { value })=> this.setState({flag:this.options[value].flag})}>
                
            </Dropdown>
        )

    }
}


export default DropdownIcon