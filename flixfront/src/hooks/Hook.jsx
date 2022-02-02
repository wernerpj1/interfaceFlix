import { useContext } from "react";
import { Context } from "../providers/Provider";

const useFlix = () => {
    const { userState } = useContext(Context);

    return { userState }
}
export default useFlix;