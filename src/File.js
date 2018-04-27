import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

export default class FileInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isValid: (this.props.value !== undefined) && this.validate(this.props.value)
        }

        this.dropzoneStyle = {
            border: "1px solid black",
            textAlign: "center",
            margin: 16,
            cursor: "pointer",
            height: "200px",
            borderWidth: "3px",
            borderStyle: "dashed",
            borderRadius: "5px",
            borderColor: "grey"
        };

        this.activeStyle = {
            borderColor: "green",
            borderStyle: "solid",
            backgroundColor: "lightgrey"
        }

        this.rejectStyle = {
            borderColor: "red",
            borderStyle: "solid",
            backgroundColor: "lightgrey"
        }
    }

    validate(value, blur = false) {
        let validity = !(this.props.required && value.length === 0);

        if (!blur && value === '') {
            return true;
        }

        return validity;
    }


    handleDrop(acceptedFiles, rejectedFiles) {

        const items = this.props.value.concat(acceptedFiles.map((file) => {
            return {
                file,
                upload: API.upload(file)
            };
        }));

        if (this.validate(items)) {
            this.setState({
                isValid: true
            });
        }

        this.props.onChange(items);
    }

    handleDelete(index) {
        const items = this.props.value.filter((_, i) => i !== index);

        if (this.validate(items)) {
            this.setState({
                isValid: true
            });
        }

        this.props.onChange(items);
    }

    getClassName() {
        if (this.state.isValid && !this.props.required)
            return "field"
        else if (!this.state.isValid && !this.props.required)
            return "error field"
        else if (this.state.isValid && this.props.required)
            return "required field"
        else if (!this.state.isValid && this.props.required)
            return "error required field"
    }

    renderPreview() {
        if (this.props.type === "image")
            return (
                <div className="ui large images">
                    {
                        this.props.value.map((item, index) =>
                            <div key={index} className="ui image">
                                <a className="ui red right corner label" onClick={this.handleDelete.bind(this, index)}>
                                    <i aria-hidden="true" className="delete icon"></i>
                                </a>
                                <img alt={item.file.name} src={item.file.preview} />
                            </div>
                        )
                    }
                </div>
            )
        else
            return (
                <div className="ui list">
                    {
                        this.props.value.map((item, index) =>
                            <div key={index} className="item">
                                {item.file.name}
                                <button onClick={this.handleDelete.bind(this, index)}>X</button>
                            </div>
                        )
                    }
                </div>
            )
    }

    render() {
        return (
            <div className="FileInput">
                {this.props.value.length !== 0 &&
                    <div className="field">
                        <h4 className="ui top attached centered header">Filer lagt til reklamasjonen</h4>
                        <div className="ui raised attached center aligned segment">
                            {this.renderPreview()}
                        </div>
                    </div>
                }
                <div className={this.getClassName()}>
                    <label htmlFor={this.props.id}>
                        {this.props.label}
                    </label>

                    <Dropzone
                        style={this.dropzoneStyle}
                        activeStyle={this.activeStyle}
                        rejectStyle={this.rejectStyle}
                        id={this.props.id}
                        name="image"
                        value={this.props.value}
                        accept={this.props.accept}
                        onDrop={this.handleDrop.bind(this)}
                    >
                        <h4>{this.props.dropHeader}</h4>
                        <p>{this.props.dropText}</p>
                    </Dropzone>
                </div>
            </div>
        )
    }
}