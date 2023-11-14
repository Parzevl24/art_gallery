import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Arts(){
    const [arts, setArts] = useState([]);
    useEffect(()=>{
        const fetchdata = async() => {
            try{
                const response = await axios.get("http://localhost:3000/user/art",{
                    headers:{
                        "Authorization" : "Bearer " + localStorage.getItem("token"),
                    }
                });
                console.log(response.data);
                setArts(response.data);
            }
            catch(error){
                console.log("error in fetching", error);
            }
        };
        fetchdata();
    },[])

    return <div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {arts.map((art) => {
                return <Art key={art.id} art = {art} />
            })}
        </div>
    </div>
}

export function Art({art}){
    // const navigate = useNavigate();

    return <Card style={{
        margin:10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography>{art.name}</Typography>
        <Typography>{art.artName}</Typography>
        <img  style={{height:300, width:300}} src={art.imgLink} alt="img" />
        <Typography>{art.description}</Typography>
        {/* <Button variant="contained" size="large">EDIT</Button> */}
    </Card>

}

export default Arts;