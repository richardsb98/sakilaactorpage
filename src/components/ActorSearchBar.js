import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';



export default function ActorSearchBar() {
  const paperStyle={padding:'50px 20px', width: 800, margin:"30px auto"}
  
  const [first_name, setFirst_Name] = useState('')
  const [last_name, setLast_Name] = useState('')
  const [actors, setActors] = useState([])
  const [searchActor, setSearchActor] = useState('')
  

  // const [title, setTitle] = useState('')
  // const [length, setLength] = useState('')
  // const [release_year, setRelease_Year] = useState('')
  // const [rating, setRating] = useState('')


  // const showFilms = (e) => {
  //   e.preventDefault();
  //   const film = {title, length, release_year, rating}
  // }
  //   useEffect(() => {
  //     fetch("https://program-1655722851205.azurewebsites.net/Home/actors/{actor_id}/films")
  //     .then(res=>res.json())
  //     .then((result)=> {
  //       setActors(result);
  //     }
  //   )
  //   }, [])


//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const handleClick = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(actor)
//     };
//     fetch('https://program-1655722851205.azurewebsites.net/Home/addactor', requestOptions)
//         .then(response => response.json())
//         .then(data => setPostId(data.id));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);


  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const actor = {first_name, last_name};
  //   console.log(actor)

  //   fetch("http://localhost:8080/Home/addactors", { 
  //   method:"POST",
  //   header:{ "Content - Type": "application/json" },
  //   body: JSON.stringify(actor)
    
  // }).then(() => {
  //   console.log("New Actor Saved")
  // })
  // }



  // const [postId, setPostId] = useState(null);

  //   useEffect(() => {
  //       const requestOptions = {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({ first_name, last_name })
  //       };
  //       fetch('https://program-1655722851205.azurewebsites.net/Home/addactor', requestOptions)
  //           .then(response => response.json())
  //           .then(data => setPostId(data.id));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  //   }, []);





  
  useEffect(() => {
    fetch("https://program-1655722851205.azurewebsites.net/Home/allactors")
    .then(res=>res.json())
    .then((result)=> {
      setActors(result);
    }
  )
  }, [])


 

  // useEffect(() => {
  //   fetch("https://program-1655722851205.azurewebsites.net/films/1/actors")
  //   .then(res=>res.json())
  //   .then((result)=> {
  //     setActorsFilms(result);
  //   }
  // )
  // }, [])

  return (
    <Container>
    {/* <Paper elevation={3} style={paperStyle}>
    <h1 style = {{color: "blue"}}> Add Actor </h1> 
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Actor's First Name" variant="outlined" fullWidth 
        value = {first_name}
        onChange = {(e) => setFirst_Name(e.target.value)}
      />
      <TextField id="outlined-basic" label="Actor's Last Name" variant="outlined" fullWidth 
        value = {last_name}
        onChange = {(e) => setLast_Name(e.target.value)}
      />
    </Box>

    <Button variant="contained" onClick = {handleClick}>Submit</Button>

    </Paper> */}

      <Paper elevation={3} style={paperStyle}>
      <h1> Search For Actors </h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <TextField id="outlined-basic" label="Actor's Name" variant="outlined" fullWidth 
        onChange={event => {setSearchActor(event.target.value)}}
      />


      {/* <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {postId}
            </div>
      </div> */}


      </Box>

        {actors.filter((value) => {
          if (searchActor === "") {
            return value
          } else if (value.first_name.toLowerCase().includes(searchActor.toLowerCase())) {
            return value;
          }
        })
        .map(actor => (
          <Paper id={"actorCard"+actor.actor_id} elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={actor.actor_id} >
          Id: {actor.actor_id} <br/>
          First Name:{actor.first_name}<br/>
          Last Name: {actor.last_name}<br/>

          </Paper>
       ))}


    </Paper> 
    </Container>
  );
}
