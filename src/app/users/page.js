import Link from "next/link";
import GetUsers from "../../../services/getUsers";

const page = async () => {
  const users = await GetUsers();
  return (
    <div>
      <h1>User List</h1>
      {users.map((item) => (
        <h3 key={item.id}>
          <Link href={`/users/${item.id}`}> Name :{item.name}</Link>
        </h3>
      ))}
    </div>
  );
};

export default page;
