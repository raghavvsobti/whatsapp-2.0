import { auth } from "../firebase";
import styled from "styled-components";

function Login() {
  const signIn = () => {
    auth.signInWithPopop(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png" />
        <Button onClick={signIn} variant="outlined">
          {" "}
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  with: 200px;
  margin-bottom: 50px;
`;