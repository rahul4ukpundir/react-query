import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import GetQueryData from "./GetQueryData";
import SetInitalData from "./SetInitalData";
const EmployeeRQ = () => {
    const fetchEmployees = () => {
        return axios.get("http://localhost:4000/employees")
    }
    const { isLoading, data, error, isError, refetch } = useQuery("employee-data", 
        fetchEmployees, {
        enabled: true,
        onSuccess: (data)=>{
            console.log("this is log onSuccess", data);
        },
        onError: (error)=>{
            console.log("this is error");
        }
        // select: (data: any) =>{
        //     const filterData = data.data?.filter((x:any)=>x.id === "1");
        //     return filterData as any ;
        // }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (isError) {
        return <div>{error as any}</div>
    }
    else {
        return (
            <>
            {/* <GetQueryData /> */}
            <SetInitalData />
                <button onClick={() => refetch()}>Fetch User Data</button>
                {data && data.data?.map((employee: any )=> {
                    return (
                        <div>
                            <label>{employee?.id}</label> <br />
                            <Link to={`/employeeRQ/${employee?.id}`}>{employee?.name}</Link>

                        </div>
                    )
                }
                )}
            </>
        )
    }

}

export default EmployeeRQ;