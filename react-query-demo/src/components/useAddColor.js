
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addColor = (newColor) => {
    axios.post("http://localhost:4000/colors", newColor)
}

const useAddColor = () => {
    const queryClient = useQueryClient();
    
    return useMutation(addColor, {
        onSuccess: (data)=>{
           // queryClient.invalidateQueries("fetchResult")
            //    debugger;
               queryClient.setQueriesData("fetchResult", (oldQueryData)=>{
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data?.data]
                }
          })
        },
        onError: (error)=>{
            console.log("this is error");
        }
    }
    )

}

export default useAddColor;