import React, { Component } from 'react'
import { Dropdown, Flag, Image } from 'semantic-ui-react'
import imgNo from './res/no.png'
import imgUK from './res/uk.png'
import imgSe from './res/se.png'
const options = [
    { flag: 'no', text: 'Norsk', value: 'no', key: 'Norwegian' },
    { flag: 'gb', text: 'English', value: 'gb', key: 'English' },
    { flag: 'se', text: 'Svenska', value: 'se', key: 'Sweden' }
]

const options2 = [
    { image: imgNo, text: 'Norsk', value: 'no', key: 'Norsk' },
    { image: imgUK, text: 'English', value: 'gb', key: 'English' },
    { image: imgSe, text: 'Svenska', value: 'se', key: 'Svenska' }
]



export default class LanguageChooser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: "gb",
            text: 'Norsk',
            img: imgNo
        }
    }
    trigger = () => {
        return (
            <span>
                <img src={this.state.img} /> {this.state.text}
            </span>
        )
    }
    render() {
        console.log(JSON.stringify(this.state, null, 4))
        return (
            <React.Fragment>
                <Dropdown
                    labeled
                    button
                    className='big icon'
                    icon={<Flag name={this.state.flag} />}
                    // text={this.state.text}
                    options={options}
                    onChange={(event, noe) => {
                        console.log(noe)
                        this.setState({ flag: noe.value })
                    }}
                />
                {/* <Image src={'./res/no.png'}  size='small'/> */}

                <Dropdown trigger={this.trigger()}  button className=' dropdown icon'icon={null} >

                    <Dropdown.Menu>

                        {options2.map(option =>
                            <Dropdown.Item key={option.value} {...option}

                                onClick={(event, noe) => {
                                    console.log(noe)
                                    this.setState({ flag: noe.value, text:noe.text , img: noe.image  })
                                }}
                            />)}
                    </Dropdown.Menu>
                </Dropdown>
            </React.Fragment>

        )
    }
}


