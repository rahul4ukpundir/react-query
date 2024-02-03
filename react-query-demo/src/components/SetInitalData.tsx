import axios from "axios";
import { useQuery } from "react-query";


const SetInitalData = () =>{
  const fetchEmployee = () =>{
    return axios.get("http://localhost:4000/employees")
  }
    
  const {data, isLoading} =  useQuery("employee-data", fetchEmployee, {
        initialData: () =>{
            const newEmployee = [{
                id: "5",
                name: "Anil"
            }];
            return {data: newEmployee as any};
        },
        
    })
    console.log("data", data)
    return(
        <div>Set Inital Data</div>
    )

}

export default SetInitalData;