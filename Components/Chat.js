import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecepientEmail from "../utils/getRecepientEmail";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const [recepientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecepientEmail(users, user))
  );
  const recepientEmail = getRecepientEmail(users, user);

  const recipient = recepientSnapshot?.docs?.[0]?.data;

  return (
    <div>
      <Container>
        {recipient ? (
          <UserAvatar src={recipient?.photoURL} />
        ) : (
          <UserAvatar src={recipientEmail[0]} />
        )}
        <UserAvatar />
        <p>{recepientEmail}</p>
      </Container>
    </div>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
