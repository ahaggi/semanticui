import React, { Component } from 'react';
import FileInput from './File'

class Image extends Component {

    constructor(props) {
        super(props)
        id = "images"
        this.state = {
            images: []
        }
    }

    handleChange = (propertyName) => (value) => {
        const data = this.state.data;
        data[propertyName] = value;
        this.setState({ images: images });
    }

    
    render() {

        return (
            <div className="ImagesField">
                <FileInput
                    type="image"
                    id={id}
                    key={id}
                    value={this.state.images}
                    label="Last opp bilder: "
                    dropHeader="Klikk eller slipp filer her for å laste opp."
                    dropText="For å kunne behandle reklamasjonen trenger vi bilder som tydelig viser feil ved produktet."
                    required={true}
                    accept="image/*"
                    onChange={this.handleChange(id)}
                />
            </div>
        );
    }
}
export default Image;
