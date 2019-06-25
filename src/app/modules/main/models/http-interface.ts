export interface Blog {
  title: string;
  author: string;
  createdAt: string;
}

export interface IBlogItem {
  id: string;
  img: string;
  title: string;
  slug: string;
  description: string;
}

export interface IResponse {
  messageCode: string;
  messageDescription: string;
  data: any;
}
