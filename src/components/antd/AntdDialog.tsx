import { useState } from "react";
import { Button, Modal, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const AntdDialog = ({ isLoading }: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div style={{ width: 100 }}>
        <Skeleton.Button active style={{ width: 100, height: 36 }} />
      </div>
    );
  }

  return (
    <>
      <Button
        type="default"
        onClick={() => setIsOpen(true)}
        style={{ width: 100, height: 36 }}
      >
        {t("components.dialog")}
      </Button>
      <Modal
        title={t("components.dialog")}
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        centered
        width={400}
        footer={[
          <Button key="cancel" onClick={() => setIsOpen(false)}>
            Close
          </Button>,
        ]}
      >
        <p>Dialog Content Description</p>
      </Modal>
    </>
  );
};
