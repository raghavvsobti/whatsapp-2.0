import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecepientEmail from "../utils/getRecepientEmail";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recepientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecepientEmail(users, user))
  );

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  const recepientEmail = getRecepientEmail(users, user);

  const recepient = recepientSnapshot?.docs?.[0]?.data;

  return (
    <div>
      <Container onClick={enterChat}>
        {recepient ? (
          <UserAvatar src={recepient?.photoURL} />
        ) : (
          <UserAvatar src={recepientEmail[0]} />
        )}
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
