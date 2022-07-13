import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState('');
  useEffect(() => {

  const getPosts = () => {
    fetch(`https://api.pushshift.io/reddit/search/submission/?author=FlatAttention`)
    .then(res => res.json())
    .then((data)=> {
      console.log(data.data);
      setPosts(data.data);
    })
  } 

  getPosts();

}, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
