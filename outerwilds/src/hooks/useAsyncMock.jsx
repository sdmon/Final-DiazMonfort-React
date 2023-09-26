import { useEffect, useState } from "react";

const useAsyncMock = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const mockPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock)
        }, 1000);
    })

    useEffect(() => {
        mockPromise.then((res) => { setData(res), setLoading(false) })
    }, [])

    return { data, loading };
}

export default useAsyncMock;