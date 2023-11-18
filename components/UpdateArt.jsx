// import { useState } from "react"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, TextField, Typography } from "@mui/material";

// function UpdateArt({art}){

//     const [name, setName] = useState(art.name);
//     const [imgLink, setImgLink] = useState(art.imgLink);
//     const [artistName, setArtistName] = useState(art.artistName);
//     const [description, setDescription] = useState(art.description);

//     const handleUpdate = async()=>{
//         const res = await axios.put(`http://localhost:3000/user/myart/${art._id}`,{
//             username: username,
//             name: name,
//             imgLink: imgLink,
//             artistName: artistName,
//             description: description
//     },{
//             headers : {
//                 "Authorization" : "Bearer " +localStorage.getItem("token")
//             }

//         })
//         const data= res.data;
//     }

//     return(
//     <div style={{display: "flex", justifyContent: "center"}}>
//         <div >
//             <Card variant="{outlined}" style={{width: 400, padding:20}}>
//                 <TextField
//                     value= {localStorage.getItem('username')}
//                     fullWidth={true}
//                     // label= "Username"
//                     variant="outlined" />
//                     <br /><br />
//                 <TextField
//                     onChange={(e)=> {
//                         setName(e.target.value);
//                     }}
//                     fullWidth={true}
//                     label= "Name"
//                     variant="outlined" />
//                     <br /><br />
//                 <TextField
//                     onChange={(e)=> {
//                         setImgLink(e.target.value);
//                     }}
//                     fullWidth={true}
//                     label= "Image Link"
//                     variant="outlined" />
//                     <br /><br />
//                 <TextField
//                     onChange={(e)=> {
//                         setArtistName(e.target.value);
//                     }}
//                     fullWidth={true}
//                     label= "Artist Name"
//                     variant="outlined" />
//                     <br /><br />
//                 <TextField
//                     onChange={(e)=> {
//                         setDescription(e.target.value);
//                     }}
//                     fullWidth={true}
//                     label= "Description"
//                     variant="outlined" />
//                     <br /><br />
//                 <Button
//                 size={"large"}
//                 variant="contained"
//                 onClick = {handleUpdate} >Submit</Button>

//             </Card>
//         </div>
//         <div>

//         </div>
//     </div>
//     )
// }

// export default UpdateArt

function UpdateArt() {
  let { id } = useParams();
  const [art, setArt] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/myart/${id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setArt(res.data);
      });
  }, [id]); // Include id as a dependency to re-run the effect when id changes

  useEffect(() => {
    console.log(art?.title); // Log the updated art state
  }, [art]); // Include art as a dependency to re-run the effect when art changes

  if (!art) {
    return (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        LOADING...
      </div>
    );
  }

  return (
    <div>
      hello world
      {/* Render your component with the updated art state */}
      {/* <UpdateCard art={art} setArt={setArt} /> */}
    </div>
  );
}

// function UpdateCard({ art, setArt }) {
//   const [name, setName] = useState(art.title);
//   const [imgLink, setImgLink] = useState(art.imgLink);
//   const [artistName, setArtistName] = useState(art.artistName);
//   const [description, setDescription] = useState(art.description);

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Card variant={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
//         <div style={{ padding: 20 }}>
//           <Typography style={{ marginBOttom: 10 }}>
//             Update Art Details
//           </Typography>
//           <TextField
//             value={name}
//             style={{ marginBOttom: 10 }}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             fullWidth={true}
//             label="Name"
//             variant="outlined"
//           />
//         </div>
//       </Card>
//     </div>
//   );
// }
export default UpdateArt;
