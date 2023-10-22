import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCategories } from "./redux/features/products/productsSlice";
import { Outlet } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCategories());
    }, [dispatch]);

    return <Outlet />;
}

export default App;
