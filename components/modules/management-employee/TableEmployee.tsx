import {
  ActionIcon,
  Button,
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

export const TableEmployee = ({ data }: any) => {
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
      <Table.Tr key={item?.id}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{item?.userName}</Table.Td>
        <Table.Td>{item?.fullName}</Table.Td>
        <Table.Td>{item?.telp}</Table.Td>
        <Table.Td>{item?.address}</Table.Td>
        <Table.Td>{item?.role}</Table.Td>
        <Table.Td>
          <Group justify="center" gap={"xs"}>
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
        </Table.Td>
      </Table.Tr>
    );
  });
  return (
    <>
      <Group justify="flex-end" my={"md"}>
        <Button
          leftSection={<IconPlus size={"15px"} />}
          variant="outline"
          onClick={() => setModalEmployee(true)}
        >
          Tambah Karyawan
        </Button>
      </Group>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: "5%", textAlign: "center" }}>No</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Username</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Nama Lengkap</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Nomor Telepon</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Alamat</Table.Th>
            <Table.Th style={{ textAlign: "center" }}>Jabatan</Table.Th>
            <Table.Th style={{ width: "15%", textAlign: "center" }}>
              Aksi
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rowElement}</Table.Tbody>
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
        <Group justify="flex-end" gap={"xs"}>
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
