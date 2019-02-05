import React, { Component } from 'react';
import './profile.css'

window.history.pushState(null, "", window.location.href.split("?")[0]);

var endpoint =  window.location.href;
var name = endpoint.slice(28);
console.log(name);
console.log(localStorage.getItem(name));


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem(name),
      description: localStorage.getItem(name + "description")
    };

    this.handleDInputChange = this.handleDInputChange.bind(this);
    this.updateHandler = this.updateHandler.bind(this);

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

  updateHandler(){
    localStorage.setItem(this.state.name + "description", this.state.description);

  }


  render() {

    return (
      <div>
        {localStorage.getItem(name)
          ? (

            <div className="container-contact100">

              <div className="wrap-contact100">
                <form className="contact100-form validate-form">
                  <span className="contact100-form-title">
                    {localStorage.getItem(name)}'s Profile
                  </span>

                  <div className="img-container">
                      <img  className="img" src={localStorage.getItem(name+"image")} alt="Red dot" />
                  </div>

                    <div class="upload-btn-wrapper">
                      <button class="btn">Update Image</button>
                      <input type="file"
                      id="imageFile"
                      name='imageFile'
                      onChange={this.imageUpload}/>
                    </div>


                  <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                    <input className="input100" type="text" name="name"  value={localStorage.getItem(name)} />
                    <span className="focus-input100"></span>
                  </div>

                  <div className="wrap-input100 validate-input" data-validate = "Please enter your message">
                    <textarea className="input100" name="message" defaultValue = {localStorage.getItem(name + "description")} onChange={this.handleDInputChange}></textarea>
                    <span className="focus-input100"></span>
                  </div>

                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn" onClick={this.updateHandler}>
                        Update
                    </button>
                  </div>
                </form>
              </div>
            </div>


        )  : (
             <h2>{name} does not exist</h2>
           )
         }

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

export default Profile;
