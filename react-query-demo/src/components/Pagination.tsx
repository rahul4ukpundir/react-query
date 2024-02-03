import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";


const Pagination = () => {
    const [pageNo, setPageNo] = useState(1);
    const fetchDataByPageNo = () => {
        return axios.get(`http://localhost:4000/colors?_page=${pageNo}&_per_page=2`)
    }
    const { data, isLoading } = useQuery(["fetch-results", pageNo], fetchDataByPageNo)
    return (
        <>
        Pagination
        <button  onClick={()=> setPageNo(pageNo-1)} disabled = {pageNo === 1}>Previous</button>
        <button onClick={()=> setPageNo(pageNo+1) } disabled ={pageNo ===4}>Next</button>
        </>
    )
}

export default Pagination;