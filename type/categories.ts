export type Categories = {
  _id: string;
  categoryName: string;
  totalProductInCategory?: number;
  categoryImage?: string;
};

export type ListCategory = {
  data: Categories[];
};
