import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const getFetch = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setState({
                data,
                isLoading: false,
                errors: null
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                errors: error
            });
        }
    };

    useEffect(() => {
        if (!url) return;
        getFetch();
    }, [url]);

    // Devuelve las propiedades desde el estado
    return {
        data: state.data,
        isLoading: state.isLoading,
        errors: state.errors
    };
};
