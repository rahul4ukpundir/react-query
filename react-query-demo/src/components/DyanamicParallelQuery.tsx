import axios from "axios";
import { useQueries } from "react-query";

const DynamicParallelQuery = ({ empIds }: any) => {
    const fetchEmployees = (id: any) =>{
        return axios.get(`http://localhost:4000/employees/${id}`)
    }
   
   const queryResults = useQueries(
        empIds.map((empId: any) => {
            return {
                queryKey:  ["employee_data", empId],
                queryFn: () => fetchEmployees(empId)
            }
        })
    )
    console.log("queryResults", {queryResults});
    return (
        <div>DynamicParallelQuery</div>
    )
}

export default DynamicParallelQuery;