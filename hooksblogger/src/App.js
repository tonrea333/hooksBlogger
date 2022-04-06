import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";



const endpointURL = `https://6239ddb128bcd99f02763cfe.mockapi.io/blogs`
console.log(endpointURL)
const fetchBlogFromAPI = async () => {
  const getBlogs = {
    method: "GET",
  }

  const response = await fetch(`${endpointURL}`, getBlogs)
  // const  = await response.json();
  // console.log("fetched",await response.json() )
  console.log(response)
  return await response.json()



  // const blogResponse = await response;
  // console.log(response)
}





function App() {

  const [author, setAuthor] = useState("");
  const [createdAt, setcreatedAT] = useState("");
  const [id, setId] = useState(0);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
              <h1>My favorite food {author}</h1>
              <button onClick={()=> setAuthor("name")}>name</button>

              <button onClick={()=> setAuthor("jim")}>name</button>


            </div>
    </div>
  );
}

export default App;
