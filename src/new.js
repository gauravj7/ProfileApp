import React, { Component } from 'react';
import './profile.css'
import './main.css';


class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };

    this.handleNInputChange = this.handleNInputChange.bind(this);
    this.handleDInputChange = this.handleDInputChange.bind(this);
    this.saveHandler = this.saveHandler.bind(this);

  }

  handleNInputChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleDInputChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  imageUpload = (e) => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        localStorage[this.state.name + "image"] = base64;
        console.debug("file stored",base64);
      });
  };

  saveHandler(){
    localStorage.setItem(this.state.name, this.state.name);
    localStorage.setItem(this.state.name + "description", this.state.description);
  }

  render() {
    return (


      <div className="container-contact100">

        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">
              Enter Details
            </span>

            <div className="wrap-input100 validate-input" data-validate="Please enter your name">
              <input className="input100" type="text" name="name" placeholder="Name" onChange={this.handleNInputChange} />
              <span className="focus-input100"></span>
            </div>




            <div className="wrap-input100 validate-input" data-validate = "Please enter your message">
              <textarea className="input100" name="message" placeholder="Description" onChange={this.handleDInputChange}></textarea>
              <span className="focus-input100"></span>
            </div>


            <div class="upload-btn-wrapper">
              <button class="btn">Upload Image</button>
              <input type="file"
              id="imageFile"
              name='imageFile'
              onChange={this.imageUpload}/>
            </div>


            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" onClick={this.saveHandler}>
                  Submit
              </button>
            </div>
          </form>
        </div>
      </div>





    );
  }
}
const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

export default New;
