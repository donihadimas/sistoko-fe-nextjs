import {
  ActionIcon,
  Button,
  Center,
  FileInput,
  Grid,
  Group,
  Input,
  Modal,
  Pagination,
  Select,
  SimpleGrid,
  Skeleton,
  Space,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import {
  IconCheck,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Categories } from "@/type/categories";
import { Form, Formik } from "formik";
import { capitalizeEachWord } from "@/utils/formatter/typographyFormatter";
import { OpenDeleteModal } from "@/utils/modalUtils";
import {
  showUpdatableNotification,
  updateFailedNotification,
  updateSuccessNotification,
} from "@/utils/notificationsUtils";

const TableCategoryProduct = ({ data }: any) => {
  const [modalCategory, setModalCategory] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [initialData, setInitialData] = useState<any>(null);
  const [currentId, setCurrentId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState<any>("10");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const getAllCategories = async (
    page: number,
    pageSize: string,
    search?: string
  ) => {
    const parameters = {
      page,
      pageSize,
      ...(search && { search }),
    };

    try {
      let res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_HOST}/categories`,
        {
          params: parameters,
        }
      );
      return res.data;
    } catch (error) {
      console.log("getAllCategories ~ error:", error);
    }
  };
  const submitCategories = async (values: any) => {
    try {
      showUpdatableNotification({ idNotification: "submitCategories" });
      setLoading(true);
      let result;
      if (currentId) {
        result = await axios.put(
          process.env.NEXT_PUBLIC_API_HOST + `/categories/${currentId}`,
          values
        );
      } else {
        result = await axios.post(
          process.env.NEXT_PUBLIC_API_HOST + "/categories",
          values
        );
      }
      if (result?.status === 201 || result?.status === 200) {
        updateSuccessNotification({
          idNotification: "submitCategories",
          message: `Kategori ${
            result?.data?.data?.categoryName ?? ""
          } berhasil ${currentId ? "diubah" : "ditambahkan"}`,
        });
        setModalCategory(false);
        setLoading(false);
        setCurrentId("");
        setInitialData(null);
        refetchGetCategories();
      }
    } catch (error: any) {
      console.log("submitCategories ~ error:", error);
      updateFailedNotification({
        idNotification: "submitCategories",
        message: `${
          error?.response?.data?.message ?? "Kategori gagal ditambahkan"
        }`,
      });
      setLoading(false);
    }
  };

  const deleteCategories = async (id: any) => {
    return axios
      .delete(process.env.NEXT_PUBLIC_API_HOST + `/categories/${id}`)
      .then((res) => {
        return res;
      });
  };

  const {
    data: dataCategories,
    refetch: refetchGetCategories,
    isRefetching: isRefetchingDataCategories,
  } = useQuery(
    ["getAllCategories"],
    () => getAllCategories(page, pageSize, search && search),
    {
      enabled: true,
    }
  );
  useEffect(() => {
    refetchGetCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);
  const initialValues: Categories = {
    _id: initialData?._id ?? "",
    categoryName: initialData?.categoryName ?? "",
    totalProductInCategory: initialData?.total ?? 0,
  };

  const rowElement = dataCategories?.data?.map((item: any, index: number) => {
    const rowNum = (page - 1) * pageSize + index + 1;
    return (
      <tr key={item?._id} style={{ textAlign: "center" }}>
        <td>{rowNum}</td>
        <td>{item?.categoryName}</td>
        <td>{item?.totalProductInCategory + " item"}</td>
        <td>
          <Group position="center" spacing={"xs"}>
            <ActionIcon
              color="blue"
              variant="outline"
              onClick={() => {
                setCurrentId(item?._id);
                setInitialData(item);
                setModalCategory(true);
              }}
            >
              <IconPencil size="1rem" />
            </ActionIcon>
            <ActionIcon
              color="red"
              variant="outline"
              onClick={() => {
                setCurrentId(item?._id);
                setInitialData(item);
                setModalConfirmDelete(true);
              }}
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
          onClick={() => {
            setModalCategory(true);
            setCurrentId("");
            setInitialData(null);
          }}
        >
          Tambah Kategori
        </Button>
      </Group>
      <Group my={"md"} position="apart">
        <SimpleGrid cols={2} sx={{ alignItems: "center" }} spacing={"xs"}>
          <Input
            placeholder="Cari Kategori"
            size="xs"
            onChange={(e) => setSearch(e.target.value)}
          />
          <ActionIcon
            variant="outline"
            color="blue"
            size={"md"}
            onClick={() => {
              refetchGetCategories();
            }}
          >
            <IconSearch size="1.125rem" />
          </ActionIcon>
        </SimpleGrid>
        <Select
          label="Tampilkan"
          size="xs"
          sx={{ width: "70px" }}
          defaultValue={pageSize}
          onChange={(e) => {
            setPageSize(e);
          }}
          data={["10", "20", "50", "100"]}
        />
      </Group>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th style={{ width: "5%", textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Kategori Produk</th>
            <th style={{ textAlign: "center", width: "25%" }}>
              Total Produk Dalam Kategori
            </th>
            <th style={{ width: "15%", textAlign: "center" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {!isRefetchingDataCategories &&
            dataCategories?.data?.length > 0 &&
            rowElement}
          {!isRefetchingDataCategories && !dataCategories?.data?.length && (
            <tr>
              <td colSpan={4}>
                <Center>Tidak ada data kategori ditemukan</Center>
              </td>
            </tr>
          )}
          {isRefetchingDataCategories &&
            Array.from({ length: dataCategories?.data?.length || 1 }).map(
              (_, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>
                    <Skeleton height={20} />
                  </td>
                  <td>
                    <Skeleton height={20} />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Skeleton height={20} />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Skeleton height={20} />
                  </td>
                </tr>
              )
            )}
        </tbody>
      </Table>
      <Group position="right" my={"md"}>
        <Pagination
          total={Math.ceil(dataCategories?.totalData / parseInt(pageSize))}
          defaultValue={page}
          size="sm"
          withEdges
          onChange={(value) => {
            setPage(value);
          }}
        />
      </Group>

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
        <Formik initialValues={initialValues} onSubmit={submitCategories}>
          {({ values, setFieldValue, errors, touched }) => {
            return (
              <Form>
                <Stack>
                  <TextInput
                    placeholder="Masukan Nama Kategori"
                    label="Nama Kategori"
                    withAsterisk
                    value={values?.categoryName}
                    onChange={(e) =>
                      setFieldValue(
                        "categoryName",
                        capitalizeEachWord(e.target.value)
                      )
                    }
                    required
                    data-autofocus
                  />
                  <FileInput
                    placeholder="Pilih Gambar Kategori"
                    label="Gambar Kategori"
                  />
                </Stack>
                <Space h="md" />
                <Group position={"right"} spacing={"xs"}>
                  <Button type="submit" size="xs" loading={loading}>
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
              </Form>
            );
          }}
        </Formik>
      </Modal>
      {/* Modal Add Category */}

      {/* Modal Delete */}
      {modalConfirmDelete && (
        <OpenDeleteModal
          modalConfirm={modalConfirmDelete}
          setModalConfirm={setModalConfirmDelete}
          title={`Kategori ${initialData?.categoryName}`}
          deleteFn={() => deleteCategories(currentId)}
          additionalFn={() => {
            refetchGetCategories();
            setInitialData(null);
            setCurrentId("");
          }}
        />
      )}
      {/* Modal Delete */}
    </>
  );
};

export default TableCategoryProduct;
