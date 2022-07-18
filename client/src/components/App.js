import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './stores/user';

import Signup from './Signup';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch()

const allPosts = async () => {
     let response = await fetch(`/posts`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then((response) => response.json())
    setPosts([...response])
  }

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
    allPosts()
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    setPosts([]);
    localStorage.token = '';
  }

  function handleDeletePost(postToDelete) {
    fetch(`/posts/${postToDelete.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    });
    setPosts(posts.filter((p) => p.id !== postToDelete.id))
  }

  function handleSubmitPost(e) {
    const newP = {
      description: e.target.children[0].value,
      likes: 0,
      user_id: user.id
    }
    
    fetch('/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(newP),
    })
    .then((r) => r.json())
    .then((res) => setPosts([...posts, res]))
    
    document.getElementById('post_form').reset();
    // e.preventDefault();
    e.target.reset();
  }

  function handleLike(likePost) {
    fetch(`/posts/${likePost.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({"likes": ++likePost.likes})
    })
    .then(r => r.json())
    .then(res => {
      const updatedPosts = posts.map(post => {
        return post.id === res.id ? res : post
      })
      setPosts(updatedPosts);
    })
  }

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch('/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user)
          dispatch(setUserInfo(user))
        });
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);

  return (
    <Router>
      {loggedIn ? <Navbar user={user} logOut={logOut} loggedIn={loggedIn} /> : null}
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<Home allPosts={allPosts} setCurrentUser={setCurrentUser} user={user} loggedIn={loggedIn} handleDeletePost={handleDeletePost} posts={posts} handleSubmitPost={handleSubmitPost} handleLike={handleLike}  />}/>
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
