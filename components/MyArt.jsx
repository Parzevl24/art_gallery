import { Alert, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
function MyArt(){
    const [name, setname] = useState("");
    const [imgLink, setimgLink ] = useState("");
    const [artistName, setArtistName ] = useState("");
    const [description, setDescription ] = useState("");
    const handleMyArt = async()=> {
        try{
            const response = await axios.post('http://localhost:3000/user/art',{
                name: name,
                imgLink: imgLink,
                artistName: artistName,
                description: description
            },{
                headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            });
            const data = response.data;
            Alert("upload success")
        }
        catch(error){
            setError("Unable to upload");
        }
    }

    return <div style={{display: "flex", justifyContent: "center"}}>
        <div >
            <Card variant="{outlined}" style={{width: 400, padding:20}}>
                <TextField
                    onChange={(e)=> {
                        setname(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Name"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setimgLink(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Image Link"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setArtistName(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Artist Name"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setDescription(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Description"
                    variant="outlined" />
                    <br /><br />
                <Button 
                size={"large"}
                variant="contained"
                onClick = {handleMyArt} >Submit</Button>

                
            </Card>
        </div>
    </div>
}

export default MyArt;