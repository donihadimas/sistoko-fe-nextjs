import {
  ActionIcon,
  Button,
  FileInput,
  Group,
  Modal,
  Select,
  Space,
  Stack,
  Table,
  TextInput,
} from "@mantine/core";
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const TableEmployee = ({ data }: any) => {
  const [modalEmployee, setModalEmployee] = useState(false);
  const [initialData, setInitialData] = useState<any>(null);
  const [currentId, setCurrentId] = useState<string>("");

  const elements = [
    {
      id: "1",
      userName: "donihadimas",
      fullName: "Doni Hadimas Aprilian",
      telp: "082239741215623",
      address: "Bandung",
      role: "Administrator",
    },
    {
      id: "1",
      userName: "dedirohaedi",
      fullName: "Dedi Rohaedi",
      telp: "082239741215623",
      address: "Bandung",
      role: "Owner",
    },
    {
      id: "1",
      userName: "lanijuni",
      fullName: "Lani Juni Priandini",
      telp: "082239741215623",
      address: "Bandung",
      role: "Staff",
    },
  ];

  const rowElement = elements?.map((item: any, index: number) => {
    return (
      <tr key={item?.id}>
        <td>{index + 1}</td>
        <td>{item?.userName}</td>
        <td>{item?.fullName}</td>
        <td>{item?.telp}</td>
        <td>{item?.address}</td>
        <td>{item?.role}</td>
        <td>
          <Group position="center" spacing={"xs"}>
            <ActionIcon
              color="blue"
              variant="outline"
              onClick={() => {
                setCurrentId(item?.id);
                setInitialData(item);
                setModalEmployee(true);
              }}
            >
              <IconPencil size="1rem" />
            </ActionIcon>
            <ActionIcon
              color="red"
              variant="outline"
              onClick={() => setCurrentId(item?.id)}
            >
              <IconTrash size="1rem" />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    );
  });
  return (
    <>
      <Group position="right" my={"md"}>
        <Button
          leftIcon={<IconPlus size={"15px"} />}
          variant="outline"
          onClick={() => setModalEmployee(true)}
        >
          Tambah Karyawan
        </Button>
      </Group>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Username</th>
            <th style={{ textAlign: "center" }}>Nama Lengkap</th>
            <th style={{ textAlign: "center" }}>Nomor Telepon</th>
            <th style={{ textAlign: "center" }}>Alamat</th>
            <th style={{ textAlign: "center" }}>Jabatan</th>
            <th style={{ width: "15%", textAlign: "center" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>{rowElement}</tbody>
      </Table>

      {/* Modal Add Employee */}
      <Modal
        opened={modalEmployee}
        onClose={() => {
          setModalEmployee(false);
          setCurrentId("");
          setInitialData(null);
        }}
        title="Tambah Karyawan"
        centered
      >
        <Stack>
          <TextInput
            placeholder="Masukan Username Karyawan"
            label="Username Karyawan"
            withAsterisk
            value={initialData?.userName ?? ""}
          />
          <TextInput
            placeholder="Masukan Nama Karyawan"
            label="Nama Karyawan"
            withAsterisk
            value={initialData?.fullName ?? ""}
          />
          <TextInput
            placeholder="Masukan Nomor Telepon"
            label="Nomor Telepon"
            withAsterisk
            value={initialData?.telp ?? ""}
          />
          <TextInput
            placeholder="Masukan Alamat Karyawan"
            label="Alamat"
            withAsterisk
            value={initialData?.address ?? ""}
          />
          <Select
            label="Jabatan"
            placeholder="Pilih Jabatan Karyawan"
            value={initialData?.role ?? ""}
            data={[
              { value: "Administrator", label: "Administrator" },
              { value: "Owner", label: "Owner" },
              { value: "Staff", label: "Staff" },
              { value: "Cashier", label: "Cashier" },
            ]}
          />
        </Stack>
        <Space h="md" />
        <Group position={"right"} spacing={"xs"}>
          <Button variant="outline" size="xs">
            Simpan
          </Button>
          <Button
            variant="outline"
            color="gray"
            size="xs"
            onClick={() => {
              setModalEmployee(false);
              setCurrentId("");
              setInitialData(null);
            }}
          >
            Batal
          </Button>
        </Group>
      </Modal>
      {/* Modal Add Employee */}
    </>
  );
};

export default TableEmployee;
