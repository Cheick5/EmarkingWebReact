import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Level from "../Body/Rubric/Levels/Level.jsx";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Body/Body.jsx";
import AddModal from "./AddModal.jsx";

const AddMarkModal = ({ showAddMark, setShowAddMark, infoToAdd }) => {
  const { submission, setAllTabs, setSubmission } = useContext(Context);
  const [showAdd, setShowAdd] = useState(false);
  const [levelSelected, setLevelSelected] = useState(null);
  const [criterionId, setCriterionId] = useState(null);

  const handleClose = () => {
    setShowAddMark(false);
  };

  useEffect(() => {
    if (levelSelected != null) {
      setShowAddMark(false);
      setShowAdd(true);
    }
  }, [levelSelected]);

  return (
    // Add your JSX code here
    <div>
      <AddModal
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        levelSelected={levelSelected}
        criterionId={criterionId}
        infoToAdd={infoToAdd}
      />
      <Modal animation={true} show={showAddMark} onHide={handleClose}>
        <Modal.Header className="AddEditHeader">
          <div>Imported rubric</div>
          {/* <div>{pin == null ? "" : pin.criteriondesc}</div> */}
        </Modal.Header>
        <Modal.Body className="AddEditBody">
          {Object.keys(submission.data.values.rubric).map((object, index) => (
            <Level
              key={index}
              criterion={submission.data.values.rubric[object]}
              setLevelSelected={setLevelSelected}
              setCriterionId={setCriterionId}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMarkModal;
