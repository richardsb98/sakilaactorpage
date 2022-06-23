
// import React, { Component } from 'react'
// import { useState, useEffect, useRef } from 'react';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';

// export default function ActorFilms() {
//     const paperStyle={padding:'50px 20px', width: 800, margin:"200px auto"}

//     const [actorsfilms, setActorsFilms] = useState([])
//     const [searchActorFilms, setSearchActorFilm] = useState('')
//     const [first_name, setFirst_Name] = useState('')
//     const [last_name, setLast_Name] = useState('')
//     const actor = {first_name, last_name, actor_id}

//     useEffect(() => {
//         fetch("https://program-1655722851205.azurewebsites.net/actors/"+{actor_id}+"/films")
//         .then(res=>res.json())
//         .then((result)=> {
//           setActorsFilms(result);
//         }
//       )
//       }, [])



   
//     return (
//         <Container>
//                 <Paper elevation={3} style={paperStyle}>
//       <h1> Search For Actor's Films by ID </h1>
//       <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//       >
//       <TextField id="outlined-basic" label="Actor's Name" variant="outlined" fullWidth 
//         value = {actor_id}
//       />
//       </Box>

//         {actors.map(actor => (
//           <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} >
//           Title: {actorsfilms.actor_id} <br/>
//           First Name:{actor.first_name}<br/>
//           Last Name: {actor.last_name}<br/>

//           </Paper>
//        ))}


//     </Paper> 
//         </Container>
//     )
//   }


