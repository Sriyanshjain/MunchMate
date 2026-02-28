import { useEffect, useState } from "react";
import menuData from "../mockData/menuData.json";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setResInfo(menuData.data);
            setIsLoading(false);
        }, 300);
    }, [resId]);

    return { resInfo, isLoading, error };
};

export default useRestaurantMenu;
