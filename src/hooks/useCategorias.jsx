import { useContext } from "react";
import CategoriasContext from "../context/CategoriasProvaider";

const useCategorias = () => {
  return useContext(CategoriasContext)
}

export default useCategorias