import React, { useState } from 'react';
import { Button, Error, Input, FormField } from "../styles";

const loginAPI_dev = '/login';

function LoginForm({setCurrentUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(loginAPI_dev, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((response) => {
              localStorage.token = response.jwt;
              setCurrentUser(response.user);
            });
          } else {
            r.json().then((err) => setErrors(err.message));
          }
        });
      }

      return (
        <form onSubmit={handleSubmit}>
          <FormField>
            <Input
              type="text"
              id="username"
              autoComplete="off"
              placeholder='Email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormField>
          <FormField>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </FormField>
          <FormField>
              {(errors !== "") ? <Error key={errors}>{errors}</Error> : null }
          </FormField>
        </form>
      );
}

export default LoginForm;
