import CustomCard from "@/components/core/card/CustomCard";
import { Categories } from "@/type/categories";
import { capitalizeEachWord } from "@/utils/formatter/typographyFormatter";
import { OpenDeleteModal } from "@/utils/modalUtils";
import {
  showUpdatableNotification,
  updateFailedNotification,
  updateSuccessNotification,
} from "@/utils/notificationsUtils";
import { Table } from "@mantine/core";
import {
  ActionIcon,
  Button,
  Center,
  FileInput,
  Flex,
  Group,
  Input,
  Modal,
  Pagination,
  Select,
  SimpleGrid,
  Skeleton,
  Space,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import {
  IconGridPattern,
  IconList,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

export const TableCategoryProduct = ({ data }: any) => {
  const [modalCategory, setModalCategory] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [initialData, setInitialData] = useState<any>(null);
  const [currentId, setCurrentId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState<any>("10");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [listLayout, toggle] = useToggle([
    { label: "List", icon: "list" },
    { label: "Grid", icon: "grid" },
  ]);

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
      const formData = new FormData();
      formData.append("categoryName", values.categoryName);
      formData.append("totalProductInCategory", values.totalProductInCategory);
      formData.append("categoryImage", values.categoryImage);
      if (currentId) {
        result = await axios.put(
          process.env.NEXT_PUBLIC_API_HOST + `/categories/${currentId}`,
          formData
        );
      } else {
        result = await axios.post(
          process.env.NEXT_PUBLIC_API_HOST + "/categories",
          formData
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
    categoryImage: initialData?.categoryImage ?? "",
  };

  const rowElement = dataCategories?.data?.map((item: any, index: number) => {
    const rowNum = (page - 1) * pageSize + index + 1;
    return (
      <Table.Tr key={item?._id} style={{ textAlign: "center" }}>
        <Table.Td>{rowNum}</Table.Td>
        <Table.Td>{item?.categoryName}</Table.Td>
        <Table.Td>{item?.totalProductInCategory + " item"}</Table.Td>
        <Table.Td>
          <Group justify="center" gap={"md"}>
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
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <Group justify="flex-end" my={"md"}>
        <Button
          leftSection={<IconPlus size={"15px"} />}
          onClick={() => {
            setModalCategory(true);
            setCurrentId("");
            setInitialData(null);
          }}
        >
          Tambah Kategori
        </Button>
      </Group>

      <Group my={"md"} justify="space-between">
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
        <Group align="end" gap={"sm"}>
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
          <Tooltip label={listLayout.label}>
            <ActionIcon variant="outline" onClick={() => toggle()} color="blue">
              {listLayout.label === "Grid" ? (
                <IconGridPattern size="1rem" />
              ) : (
                <IconList size="1rem" />
              )}{" "}
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
      {listLayout.label === "List" && (
        <>
          <Table highlightOnHover striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ width: "5%", textAlign: "center" }}>
                  No
                </Table.Th>
                <Table.Th style={{ textAlign: "center" }}>
                  Kategori Produk
                </Table.Th>
                <Table.Th style={{ textAlign: "center", width: "25%" }}>
                  Total Produk Dalam Kategori
                </Table.Th>
                <Table.Th style={{ width: "15%", textAlign: "center" }}>
                  Aksi
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {!isRefetchingDataCategories &&
                dataCategories?.data?.length > 0 &&
                rowElement}
              {!isRefetchingDataCategories && !dataCategories?.data?.length && (
                <Table.Tr>
                  <Table.Td colSpan={4}>
                    <Center>Tidak ada data kategori ditemukan</Center>
                  </Table.Td>
                </Table.Tr>
              )}
              {isRefetchingDataCategories &&
                Array.from({ length: dataCategories?.data?.length || 1 }).map(
                  (_, index) => (
                    <Table.Tr key={index}>
                      <Table.Td style={{ textAlign: "center" }}>
                        <Skeleton height={20} />
                      </Table.Td>
                      <Table.Td>
                        <Skeleton height={20} />
                      </Table.Td>
                      <Table.Td style={{ textAlign: "center" }}>
                        <Skeleton height={20} />
                      </Table.Td>
                      <Table.Td style={{ textAlign: "center" }}>
                        <Skeleton height={20} />
                      </Table.Td>
                    </Table.Tr>
                  )
                )}
            </Table.Tbody>
          </Table>
          <Group justify="flex-end" my={"md"}>
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
        </>
      )}

      {listLayout.label === "Grid" && (
        <SimpleGrid cols={10}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </SimpleGrid>
      )}

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
              <Form encType="multipart/form-data">
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
                    label="Gambar Kategori"
                    onChange={(e) => {
                      setFieldValue("categoryImage", e);
                    }}
                  />
                </Stack>
                <Space h="md" />
                <Group justify="flex-end" gap={"xs"}>
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
