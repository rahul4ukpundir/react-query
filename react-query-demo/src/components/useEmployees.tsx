import axios from "axios"
import { useQuery } from "react-query";

const fetchEmployees = ({queryKey}: any) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/employees/${id}`)
}

const useEmployees = (empId:any) =>{
  return useQuery(["employee-details", empId], fetchEmployees)
}

export default useEmployees;