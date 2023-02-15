import { getImageUrl } from "./utils";

export default function Avatar({ size, person }) {
  return (
    <>
      <h1>Buddy</h1>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}
