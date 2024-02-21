import {
  ActionIcon,
  Button,
  FileInput,
  Group,
  Modal,
  Space,
  Stack,
  Table,
  TextInput,
} from "@mantine/core";
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const TableCategoryProduct = ({ data }: any) => {
  const [modalCategory, setModalCategory] = useState(false);
  const [initialData, setInitialData] = useState<any>(null);
  const [currentId, setCurrentId] = useState<string>("");

  const elements = [
    {
      id: "1",
      categoryName: "Benang",
      totalProductInCategory: 1000,
    },
    {
      id: "2",
      categoryName: "Sparepart",
      totalProductInCategory: 1000,
    },
    {
      id: "3",
      categoryName: "Resleting",
      totalProductInCategory: 1000,
    },
  ];

  const rowElement = elements?.map((item: any, index: number) => {
    return (
      <tr key={item?.id}>
        <td>{index + 1}</td>
        <td>{item?.categoryName}</td>
        <td>{item?.totalProductInCategory}</td>
        <td>
          <Group position="center" spacing={"xs"}>
            <ActionIcon
              color="blue"
              variant="outline"
              onClick={() => {
                setCurrentId(item?.id);
                setInitialData(item);
                setModalCategory(true);
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
          onClick={() => setModalCategory(true)}
        >
          {" "}
          Tambah Kategori{" "}
        </Button>
      </Group>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Kategori Produk</th>
            <th style={{ textAlign: "center" }}>Total Produk Dalam Kategori</th>
            <th style={{ width: "15%", textAlign: "center" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>{rowElement}</tbody>
      </Table>

      {/* Modal Add Category */}
      <Modal
        opened={modalCategory}
        onClose={() => {
          setModalCategory(false);
          setCurrentId("");
          setInitialData(null);
        }}
        title="Tambah Kategori"
        centered
      >
        <Stack>
          <TextInput
            placeholder="Masukan Nama Kategori"
            label="Nama Kategori"
            withAsterisk
            value={initialData?.categoryName ?? ""}
          />
          <FileInput
            placeholder="Pilih Gambar Kategori"
            label="Gambar Kategori"
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
              setModalCategory(false);
              setCurrentId("");
              setInitialData(null);
            }}
          >
            Batal
          </Button>
        </Group>
      </Modal>
      {/* Modal Add Category */}
    </>
  );
};

export default TableCategoryProduct;
