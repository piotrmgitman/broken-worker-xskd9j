import Avatar from "./Avatar.js";
import "./styles.css";

function Card({ children }) {
  return (
    <div>
      <div className="card">
        <div className="card-content">{children}</div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar size={200} person={{ name: "Buddy", imageId: "UgoVWIb" }} />
    </Card>
  );
}
