import './ActorApp.css';
import ActorAppbar from './components/ActorAppbar'
// import ActorSearchBar from './components/ActorSearchBar'
import { useState, useEffect, useRef } from 'react';
import actor from './components/ActorSearchBar.js'
import React from 'react';
import axios from "axios";
import ActorSearchBar from './components/ActorSearchBar.js';
// import { Link } from 'react-router-dom';
import Test from './components/Test'
import ActorFilms from './components/ActorFilms'



export default function ActorApp() {
  // const [loading, setLoading] =useState(false);
  // const [actors, setActors] = useState([]);
  // const [searchActor, setSearchActor] = useState("")

  // useEffect(() => {
  //   const loadActors = async () => {
  //     setLoading(true);
  //     const response = await axios.get("https://program-1655722851205.azurewebsites.net/Home/allactors");
  //     setActors(response.data);
  //     setLoading(false)
  //   }
  //   loadActors();
  // }, [])


  return (
    <div className="App">
    <ActorAppbar class="paperbackground"/>
    

    {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/FilmApp">Films</Link>
      </nav> */}

      {/* <ActorFilms /> */}
      
      <ActorSearchBar />
      {/* <Test /> */}


        {/* <input 
          type="text" 
          placeholder='Search Actor...' 
          onChange={event => {
            setSearchActor(event.target.value);
            }}
        /> */}

      {/* <h3> Search Filter</h3>
      <input 
        type = "text"
        placeholder='Search..'
        onChange={(e) => setSearchActor(e.target.value)}

      />
      {loading ? (<h4> Loading ...</h4>
      ) : (
        actors.filter((value) => {
          if (searchActor === "") {
            return value
          } else if (value.first_name.toLowerCase().includes(searchActor.toLowerCase())) {
            return value;
          }
        })
        
        .map((item => <h5 key={item.actor_id}>
        {item.first_name} <tab> </tab>
        {item.last_name}
        </h5>))
      )} */}

      
    </div>
  );
}

