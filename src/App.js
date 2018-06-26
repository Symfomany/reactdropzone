import React, { Component } from "react";
import { storage } from "./firebase/firebase";
import Dropzone from "react-dropzone";
import firebase from "firebase";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  onDrop(files) {
    // console.log(files);
    const storageRef = firebase.storage().ref("images/" + files[0].name);

    storageRef
      .put(files[0])
      .then(snapshot => console.log("Uploaded a blob or file!"));
  }

  render() {
    return (
      <div>
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>
                Try dropping some files here, or click to select files to
                upload.
              </p>
            </Dropzone>
          </div>
          <aside>
            <h2>Dropped files</h2>
            <ul>
              {this.state.files.map(f => (
                <li key={f.name}>
                  {f.name} - {f.size} bytes
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    );
  }
}

export default App;
