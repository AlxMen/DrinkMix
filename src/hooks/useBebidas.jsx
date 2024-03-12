import { useContext } from "react";
import BebidasContext from "../context/BebidasProvaider";

const useBebidas = () => {
  return useContext(BebidasContext)
}

export default useBebidas