/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "../../config/firebaseConfig";
import { toast } from "bulma-toast";
import { OBJModel } from "react-3d-viewer";
import "./uav-details.scss";

const UavDetails = props => {
  const { uav, id } = props;

  const uploadFile = () => {
    const input = document.getElementById("fileUpload");
    const displayName = document.getElementById("fileName");
    const selectedFile = input.files[0];
    const fileName = input.files[0].name;
    displayName.textContent = fileName;

    const storageRef = firebase.storage().ref("objFiles");
    const uploadTask = storageRef.child(fileName).put(selectedFile);

    uploadTask.on(
      "state_changed",
      function(snapshot) {},
      function(error) {
        console.error(error);
        toast({
          message: "Sikertelen feltöltés",
          type: "is-danger",
          duration: 2200
        });
      },
      function() {
        let db = firebase.firestore();
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          let currentUavRef = db.collection("uavs").doc(id);
          currentUavRef.set(
            {
              Obj_fájl: downloadURL
            },
            { merge: true }
          );
        });
        toast({
          message: "Sikeres feltöltés",
          type: "is-success",
          duration: 2200
        });
      }
    );
  };

  if (uav) {
    const uavDetails = Object.keys(uav).map(function(key) {
      return { [key]: uav[key] };
    });

    return (
      <div className="has-background-grey-lighter">
        <div className="container">
          <section className="section">
            <Link to="/">
              <button className="button is-link">Vissza</button>
            </Link>

            {Object.keys(uav).find(key => key === "Obj_fájl") !== undefined ? (
              <>
                <div>
                  <OBJModel width="400" height="300" src="/drone.obj" />
                </div>
                <div className="has-text-centered">
                  <a href={uav.Obj_fájl} download>
                    <button className="button is-primary">
                      3D fájl letöltés
                    </button>
                  </a>
                </div>
              </>
            ) : (
              <div></div>
            )}

            <div className="file has-name is-danger is-right">
              <label className="file-label">
                <input
                  className="file-input"
                  id="fileUpload"
                  type="file"
                  name="file"
                  onChange={uploadFile}
                  required
                />
                <span className="file-cta">
                  <span className="file-label">Feltöltés</span>
                </span>
                <span className="file-name" id="fileName"></span>
              </label>
            </div>

            <h1 className="title">{uav.Modell}</h1>
            <div className="columns is-multiline">
              {uavDetails.map(detail => {
                if (
                  Object.values(detail)[0] !== "" &&
                  Object.values(detail)[0] !== null
                ) {
                  return (
                    <div className="column is-half">
                      <article className="message">
                        <div className="message-header">
                          <p>
                            {Object.keys(detail)[0]
                              .split("_")
                              .join(" ")}
                          </p>
                        </div>
                        <div
                          className="message-body"
                          style={{ overflow: "auto" }}
                        >
                          {typeof Object.values(detail)[0] === "string" &&
                          Object.values(detail)[0].includes("http") ? (
                            <a
                              href={Object.values(detail)}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "blue", textDecoration: "none" }}
                            >
                              {Object.values(detail)}
                            </a>
                          ) : (
                            Object.values(detail)
                          )}
                        </div>
                      </article>
                    </div>
                  );
                }
              })}
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <section className="hero has-background-grey-lighter is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Loading</h1>
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const uavs = state.firestore.data.uavs;
  const uav = uavs ? uavs[id] : null;
  return {
    uav: uav,
    id: id
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "uavs" }])
)(UavDetails);
