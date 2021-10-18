import React, { useState } from "react";

const App = () => {
  let [newUser, setNewUser] = useState("");
  let [newMessage, setNewMessage] = useState("");

  const [chirps, setChirps] = useState([
    {
      username: "Kona",
      message: "YOU GOT IT!",
    },
    {
      username: "Navi",
      message: "Imma be late tonight guys",
    },
    {
      username: "FoxBrush",
      message: "Can I have a Windfury group?",
    },
  ]);

  const handleClick = (e) => {
    console.log(chirps);
    setChirps([
      ...chirps,
      {
        username: newUser,
        message: newMessage,
      },
    ]);
    setNewUser('');
    setNewMessage('');
  };

  return (
    <div>
      <nav class="navbar navbar-light bg-light" style={{ width:'120em', height:'10em'}}>
  <div class="container-fluid">
    <div class="navbar-brand" href="#">
      <img src="https://www.cuteeasydrawings.com/uploads/allimg/200330/1_200330094809_5.jpg" alt="" style={{ width: "10em", height:"5em" }} class="d-inline-block align-text-top"></img>
    </div>
       <h1 class="titles">Welcome To Chirper!</h1>
  </div>
</nav>
      
      <div class="infoContainer">
      <div class=" md-3 col-3 name">
        <input
          type="email"
          class="form-control mb-2"
          id="exampleFormControlInput1"
          placeholder="@Username"
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
        />
      </div>
      <div class="mb-3 col-3 boxes">
        <textarea
          class="form-control mb-2"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="What do you want to chirp today?"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        ></textarea>
      </div>
      <div class="col-12 btn">
        <button class="btn btn-primary" type="submit" onClick={handleClick}>
          Chirp it!
        </button>
      </div>
      </div>
      
      <h3 className='feed'>Your Feed</h3>
      {chirps.map((chirp) => (
        <div class='mb-3 container col-1 tweets'>
        <div class="card" style={{ width: "50em" }}>
          <div class="card-body">
            <h5 class="card-title">@{chirp.username}</h5>
            <p class="card-text">{chirp.message}</p>
          </div>
        </div>
        </div>
      ))}
      


    </div>
  );
};

export default App;
