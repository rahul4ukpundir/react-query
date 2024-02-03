import axios from "axios"
import { useMutation, useQueryClient } from "react-query";
import React from "react";
import InfintePaging from "./InfintePaging";
import AllColors from "./AllColors";
import useAddColor from "./useAddColor";


const PostingData = () => {
    const [color, setColor] = React.useState("");
    const queryClient = useQueryClient();
    const addNewColor = async(newColor) => {
       return await axios.post("http://localhost:4000/colors", newColor)
    }
    const { mutate } = useMutation(addNewColor, {
        onSuccess: async (data) =>{
            //way - 1 queryClient.invalidateQueries("fetchResult"); // Network call jayegi
             queryClient.setQueriesData("fetchResult", (oldQueryData)=>{ //Network call nhai jayegi
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]
                }
          })
        }
        
     
    })



    const handleClick = () => {
        mutate({ id: 7, colorName: color });
    }

    return (
        <>
           <AllColors />
            <div>Posting the Data <br />
                New Color : <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} />
                <button onClick={handleClick}> Add New Color</button>
           
            </div>
        </>
    )




}

export default PostingData;