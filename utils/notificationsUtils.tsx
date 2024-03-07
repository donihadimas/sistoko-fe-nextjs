import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

export const showSuccessStaticNotification = ({ message }: any) => {
  showNotification({
    color: "teal",
    title: "Yeaayyy !!!",
    message: message,
    icon: <IconCheck />,
    withBorder: true,
  });
};
export const showFailedStaticNotification = ({ message }: any) => {
  showNotification({
    color: "red",
    title: "Oppsss ...",
    message: message,
    icon: <IconX />,
    withBorder: true,
  });
};
export const showUpdatableNotification = ({ idNotification }: any) => {
  showNotification({
    id: idNotification,
    loading: true,
    title: "Sedang memproses data",
    message: "Tunggu beberapa saat",
    autoClose: false,
    withBorder: true,
  });
};

export const updateSuccessNotification = ({ idNotification, message }: any) => {
  updateNotification({
    id: idNotification,
    color: "teal",
    title: "Yeaayyy !!!",
    message: message,
    icon: <IconCheck />,
    withBorder: true,
  });
};

export const updateFailedNotification = ({ idNotification, message }: any) => {
  updateNotification({
    id: idNotification,
    color: "red",
    title: "Oppsss ...",
    message: message,
    icon: <IconX />,
  });
};
