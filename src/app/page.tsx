"use client";
import Image from "next/image";
import { Input, Button } from "../../@/components/ui";
import { FormEvent, useState } from "react";
import { FormData, toPersist } from "./mapper";

export default function Home() {
  const [formData, setFormData] = useState<FormData>({} as FormData);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = toPersist(formData);
    console.log(payload);
    try {
      await fetch("http://localhost:8080/api/pedido", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {}
  }

  return (
    <div className="bg-black w-screen h-screen flex flex-col  items-center justify-center">
      <h1 className="text-white font-bold text-3xl my-2">
        {" "}
        Formação Pipeline{" "}
      </h1>
      <form
        className="w-1/3 border border-gray-50 p-4 rounded-sm border-opacity-20"
        onSubmit={(event) => onSubmit(event)}
      >
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Nome </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["name"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Produto </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["productCount"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Valor </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["price"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Data Compra </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["date"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Cpf </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["code"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Cep </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["zipcode"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <div className="my-1 flex flex-col justify-center gap-y-2">
          <label className="text-white font-medium"> Email </label>
          <Input
            placeholder="Informe o nome"
            className="w-full h-9 rounded-sm pl-2"
            onChange={(event) =>
              setFormData((prev) => {
                (prev["email"] = event.target.value), { ...prev };
                return prev;
              })
            }
          />
        </div>
        <Button className="text-white w-full h-9 my-3 bg-purple-700 rounded-sm">
          Enviar{" "}
        </Button>
      </form>
    </div>
  );
}
