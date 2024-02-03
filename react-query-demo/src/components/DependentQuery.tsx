import axios from "axios";
import { useQuery } from "react-query";

const DependentQuery = ({ email }: any) => {
    const fetchUserDetails = ({queryKey}: any) =>{
        const email = queryKey[1];
        return axios.get(`http://localhost:4000/users/${email}`)
    }
    const fetchLanguagesByLanguageGroup = ({queryKey}: any) =>{
        const languageGroup = queryKey[1];
        return axios.get(`http://localhost:4000/languages/${languageGroup}`)
    }

    const { data: userDetails } = useQuery(["user_details", email], fetchUserDetails);
    const languageGroup = userDetails?.data?.languageGroup;

    const { data: languages } = useQuery(["language-group", languageGroup], fetchLanguagesByLanguageGroup)


    return (
        <div>Dependent Queries</div>
    )
}

export default DependentQuery;