import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState, useEffect} from 'react';



export default function Test() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[first_name,setFirst_Name]=useState('')
    const[last_name,setLast_Name]=useState('')
    const[actors,setActors]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const actor={first_name,last_name}
    console.log(actor)
    fetch("http://localhost:8080/Home/addactor",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(actor)

  }).then(()=>{
    console.log("New Actor added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/Home/allactors")
  .then(res=>res.json())
  .then((result)=>{
    setActors(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Actor</u></h1>

    <form noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Actor First Name" variant="outlined" fullWidth 
      value={first_name}
      onChange={(e)=>setFirst_Name(e.target.value)}
      />
      <TextField id="outlined-basic" label="Actor Last Name" variant="outlined" fullWidth
      value={last_name}
      onChange={(e)=>setLast_Name(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Actors</h1>

    <Paper elevation={3} style={paperStyle}>

      {actors.map(actor=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={actor.actor_id}>
         Id:{actor.actor_id}<br/>
         First Name:{actor.first_name}<br/>
         Last Name:{actor.last_name}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}
