import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class AppImage extends Component {
    state = {
        title: "",
        file: ""
    };

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

    handleOnUploadFile = e => this.setState({ file: e.target.files[0] });

    handleOnSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("file", this.state.file);
        axios
        .post("/api/post", formData)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    };

    render() {
        return (
            <div className="container">
                <h1>Upload file in nodejs</h1>
                <form onSubmit={this.handleOnSubmit} className="w-50">
                <div className="form-group">
                    <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    autoComplete="off"
                    className="form-control"
                    onChange={this.handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={this.handleOnUploadFile}
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Submit
                </button>
                </form>
            </div>
        );
    }
}

export default AppImage;