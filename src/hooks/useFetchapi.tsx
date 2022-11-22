import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../data/constants';



const useFetchapi = ( url : string) => {
    const [data, setData] = useState<any>([])

    useEffect(() => {
        axios
        .get(API_BASE_URL + url)
        .then((res) => setData(res.data))
    }, [])

    return ( data )
};

export default useFetchapi;