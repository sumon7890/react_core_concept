/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css';


function App() {
     return (
    <div className="App">
      <header className="App-header">
        
          <Count></Count>
        <Post></Post>
     
      </header>
    </div>
  );
}

function Count(){
  const[count, setCount] = useState(2)
  const handlerIncise = () => setCount(count + 1)

  const handlerDecries = () => {
    const newCount = count - 1
    if(newCount <= -1){
      return null
    }
    setCount(newCount) 
   
  }  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handlerIncise}>Incise</button>
      <button onClick={handlerDecries}>Decries</button>
    </div>
  )
}
//https://jsonplaceholder.typicode.com/posts
function Post(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  console.log(users);
  return(
    <div>
      
      <h1>Dynamic User : {users.length} </h1>
      {
        users.map(usersData => <li>{usersData.id}</li>)
      } {
        users.map(usersData => <img src={usersData.url} alt="" />)
      }
      <div>
        
      </div>
    </div>
  )
}




export default App;
