import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to save project to database!
    console.log(`Email: ${email} Password: ${password}`);
  }

  const handleGoogleLogin = () => {
    // Use Google API to authenticate user
    // Once authenticated, redirect user to your application with authentication token
  }

  const handleGithubLogin = () => {
    // Use Github API to authenticate user
    // Once authenticated, redirect user to your application with authentication token
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <Button type="submit" style={{marginRight: '20px'}}>Submit</Button>
      <Button type="button" onClick={handleGoogleLogin} style={{marginRight: '20px'}}>Login with Google</Button>
      <Button type="button" onClick={handleGithubLogin}>Login with Github</Button>
    </Form>
  );
};

export default Login;
