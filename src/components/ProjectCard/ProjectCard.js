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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.repo.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.repo.name}</h4>
        <p>
          {props.repo.description}
        </p>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>

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
