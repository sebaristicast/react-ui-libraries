import { useState } from "react";
import { Button, Modal, Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ReactBootstrapDialog = ({ isLoading }: ComponentProps) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  if (isLoading) {
    return <Placeholder.Button xs={4} style={{ width: 100, height: 36 }} />;
  }

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={() => setShow(true)}
        style={{ width: 100, height: 36 }}
        className="btn-outline-primary"
      >
        {t("components.dialog")}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="modal-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("components.dialog")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Dialog Content Description</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
