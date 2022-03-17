import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", palceItems: "center", height: "100vh" }}>
      <div>
        <img
          src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
