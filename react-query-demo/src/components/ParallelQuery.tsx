import axios from "axios";
import { useQuery } from "react-query";

const ParallelQuery = () => {
    const fetchEmployees = () => {
        return axios.get("http://localhost:4000/employees")
    }
    const fetchFrineds = () => {
        return axios.get("http://localhost:4000/frineds")
    }
    const { data: employeeData } = useQuery("employee-details", fetchEmployees);
    const { data: frinedData } = useQuery("frined", fetchFrineds);
    return (
        <>
        <div>we can render employee detail from employeeData object</div>
        <div>we can render friend detail from friend object</div>
        </>
       
    )
}
export default ParallelQuery;