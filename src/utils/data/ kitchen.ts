import { v4 as uuid } from "uuid";
import type { WordCard as WordCardType } from "../types/wordCard";
import animals from "../../assets/images/categories/animals.jpg";

const Kitchen: WordCardType[] = [
  {
    id: uuid(),
    nome: "cat",
    img: animals,
    som: "som1",
    traducao: "gato",
  },
];

export { Kitchen };
