export type FormData = {
  name: string;
  productCount: string;
  price: string;
  date: string;
  code: string;
  zipcode: string;
  email: string;
};

export type RequestData = {
  nome: string;
  produto: number;
  valor: number;
  data_compra: string;
  cpf_cliente: string;
  cep: string;
  email: string;
};

export function toPersist(data: FormData): RequestData {
  return {
    nome: data.name,
    produto: Number(data.productCount),
    valor: Number(data.price),
    data_compra: data.date,
    cpf_cliente: data.code,
    cep: data.zipcode,
    email: data.email,
  };
}
