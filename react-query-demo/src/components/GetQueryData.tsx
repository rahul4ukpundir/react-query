import { useQueryClient } from "react-query"

const GetQueryData = () =>{

    const queryClient =  useQueryClient();

    const getEmployeeFromCache = queryClient.getQueriesData("employee-data");
    console.log("getEmployeeFromCache", getEmployeeFromCache)

    return(<div>Get Query Data</div>)
}

export default GetQueryData;


