export type Categories = {
  _id: string;
  categoryName: string;
  totalProductInCategory?: number;
};

export type ListCategory = {
  data: Categories[];
};
