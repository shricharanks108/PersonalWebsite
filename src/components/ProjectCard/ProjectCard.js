import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: props.theme.text,
    // backgroundColor: props.theme.projectCard,
  });

  return (
    <Modal
      {...props}
      {...styles}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style = {{backgroundColor: props.theme.projectCard, borderBottom: "1px solid " + props.theme.text}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.repo.name}
        </Modal.Title>
        <ProjectLanguages logos={props.repo.languages} />
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: props.theme.projectCard }}>
        <h5>Description</h5>
        <p className="proj-desc">
          {props.repo.description}
        </p>
        <h5>Features</h5>
        <p className="proj-desc"><ul>
          {
            props.repo.features.map((feature, index) => {
              return (
                <li key={index}>{feature}</li>
              )
            })
          }
        </ul>
        </p>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center", backgroundColor: props.theme.projectCard, borderTop: "1px solid " + props.theme.text }}>
        <Button onClick={() => openRepoinNewTab(props.repo.url)} style={{ width: "75%" }}>Open in GitHub</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const [modalShow, setModalShow] = React.useState(false);

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          // onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div>
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <p className="repo-description" style={{ color: theme.text }} >
              {repo.description}
            </p>
            <div className="repo-details">
              <ProjectLanguages logos={repo.languages} />
            </div>
          </div>
          <div>
            <Button className="launch-modal" variant="outline-danger" style={{ width: "75%" }} onClick={() => setModalShow(true)}>
              More Details...
            </Button>
          </div>
          <MyVerticallyCenteredModal
            repo={repo}
            theme={theme}
            show={modalShow}
            enforceFocus={true}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Fade>
    </div>
  );
}
