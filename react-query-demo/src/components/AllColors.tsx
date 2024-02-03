import axios from "axios";
import { useQuery } from "react-query";

const AllColors = () => {
    const fetchDataByPageNo = () => {
        return axios.get(`http://localhost:4000/colors`)
    }
    const { data, isLoading } = useQuery("fetchResult", fetchDataByPageNo,
     {
        staleTime: 30000
     }
    );
    return (

        <div>Colors <br/>
            {
                 data?.data?.map((color: any)=>{
                    return <div>{color?.colorName}</div>
                })
            }
        </div>
    )
}

export default AllColors;

