import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Container, Row, Col } from "reactstrap";

const imageStyle = {
  borderRadius: 250,
  shadow: { boxShadow: "15px 15px 30px black" },
  pd: { paddingLeft: -100 }
};

const imageSize = {
  width: 50,
  height: 50,
  borderRadius: 25,
  boxShadow: "10px 10px 50px black"
};
const divbag = {
  borderRadius: 150,
  backgroundColor: "#f4efd3"
};

class Card extends Component {
  render() {
    return (
      <div className="App App-header">
        <Row>
          <Col xs="3">
            <img
              style={imageStyle.pd}
              src={require("../assets/img/react.png")}
              alt="react"
              width="400"
              height="400"
            />
          </Col>
          <Col xs="6">
            <center>
              <img
                className="z-depth-5"
                style={imageStyle}
                src={require("../assets/img/1folio.jpg")}
                alt="profile"
                width="300"
                height="300"
              />
              <h2 className="mt-3">MOHIT KUMAR</h2>
              <div style={divbag} className="row mt-4 p-2">
                <a
                  className="col-md-3"
                  href="https://www.facebook.com/profile.php?id=100007163467636"
                >
                  <img
                    style={imageSize}
                    src={require("../assets/img/fb.png")}
                    alt="fb"
                  />
                </a>
                <a
                  className="col-md-3"
                  href="https://www.instagram.com/_moh10._"
                >
                  <img
                    style={imageSize}
                    src={require("../assets/img/insta.png")}
                    alt="insta"
                  />
                </a>
                <a className="col-md-3" href="https://github.com/SKYHIT-98">
                  <img
                    style={imageSize}
                    src={require("../assets/img/gh.png")}
                    alt="gh"
                  />
                </a>
                <a
                  className="col-3"
                  href="https://www.linkedin.com/in/moh-it10/"
                >
                  <img
                    style={imageSize}
                    src={require("../assets/img/ln.png")}
                    alt="ln"
                  />
                </a>
              </div>
            </center>
          </Col>
          <Col xs="3">
            <img
              style={imageStyle}
              src={require("../assets/img/node.png")}
              alt="node"
              width="400"
              height="400"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Card;
