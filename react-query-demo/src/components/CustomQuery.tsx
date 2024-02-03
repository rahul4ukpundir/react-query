import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import useEmployees from "./useEmployees";
import { useParams } from "react-router-dom";
const CustomQuery = () => {
    const { id } = useParams();
    const { isLoading, data, error, isError, refetch } = useEmployees(id)

    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (isError) {
        return <div>{error as any}</div>
    }
    else {
        return (
            <div>
                <label>{data?.data?.id}</label> <br />
                <Link to={`/employeeRQ/${data?.data?.id}`}>{data?.data?.name}</Link>
            </div>
        )

    }

}

export default CustomQuery;