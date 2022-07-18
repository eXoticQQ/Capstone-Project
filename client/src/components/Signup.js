import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, FormField, Input } from "../styles";


export default function Signup({setCurrentUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isLoading = useState(false);

  let navigate = useNavigate();

  function createUser(event) {
    event.preventDefault();
    event.target.reset();

    let user = {
      username,
      email,
      password,
    };

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === 'created') {
          setCreated(true);
          setErrorMessage('');
          setCurrentUser(response.user)
          navigate("/?");
        }
      })
      .catch((response) =>
        setErrorMessage(
          "Uh-oh! It didn't work...Make sure your server is running!"
        )
      );
  }

  return (
    <div>
      {created ? (
        <></>
      ) : (
        <div>
          <div className="please-log-in">
            <p>{errorMessage}</p>
          </div>
          <br />
          <form onSubmit={createUser}>
            <FormField>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            </FormField>
            <FormField>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            </FormField>
            <FormField>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </FormField>
            <Button variant="fill" color="primary" type="submit">
              {isLoading ? "SignUp" : <Signup/>}
            </Button>
            {/* <button type="submit">Submit</button> */}
          </form>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}
