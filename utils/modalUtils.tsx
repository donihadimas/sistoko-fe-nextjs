import { Button, Group, Modal, Text } from "@mantine/core";
import {
  showFailedStaticNotification,
  showSuccessStaticNotification,
} from "./notificationsUtils";

export const OpenDeleteModal = ({
  modalConfirm = false,
  setModalConfirm,
  title,
  deleteFn,
  additionalFn,
}: any) => {
  const confirm = () => {
    deleteFn()
      .then((res: any) => {
        if (res.status === 200) {
          showSuccessStaticNotification({
            message: `Data ${title} berhasil di hapus`,
          });
          additionalFn();
          setModalConfirm(false);
        }
      })
      .catch((error: any) => {
        console.log("confirm ~ error:", error);
        showFailedStaticNotification({
          message: `Data ${title} berhasil di hapus`,
        });
        additionalFn();
        setModalConfirm(false);
      });
  };
  return (
    <Modal
      opened={modalConfirm}
      onClose={() => {
        setModalConfirm(false);
        additionalFn();
      }}
      title="Hapus Data"
      centered
    >
      <Text>Apakah Anda Yakin Akan Menghapus Data {title}</Text>
      <Group justify="flex-end" mt={"xl"}>
        <Button color="red" size="xs" onClick={confirm}>
          Hapus Data
        </Button>
        <Button
          color="blue"
          size="xs"
          variant="outline"
          onClick={() => {
            setModalConfirm(false);
            additionalFn();
          }}
        >
          Tidak, Batalkan!
        </Button>
      </Group>
    </Modal>
  );
};
