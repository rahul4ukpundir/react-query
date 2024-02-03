
import { useEffect, useState } from "react";
import axios from 'axios'

const Employee = () => {
    const [data, setData] = useState<any>();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        async function fetchEmployees() {
            try {

                const result = await axios.get("http://localhost:4000/employees");
                setData(result?.data)
                setLoading(false);
            } catch (error) {
                setError(error)
            }

        }

        fetchEmployees();

    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    // else if (error) {
    //     return <div>{error as any}</div>
    // }
    return data && data?.map((employee: any, index: any) => {
        return (
            <div>
                <label>{employee?.id}</label> <br />
                <label>{employee?.name}</label>

            </div>
        )
    }
    )
}

export default Employee;