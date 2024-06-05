import { useCartData } from "../../hooks/useCartData";
import {Outlet} from "react-router-dom";

function PersistentCart(){
    useCartData();
    return <Outlet />
}

export default PersistentCart;