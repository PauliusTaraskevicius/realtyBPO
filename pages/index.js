import { getAllUsers } from "../prisma/user";

export default function Home({ users }) {
  return (
    <>
    <h1>USERS</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const users = await getAllUsers();

  // Convert the updatedAt and createdAt in each user to string
  // Otherwise, Next.js will throw an error
  // Not required if you are not using the date fields

  const updatedUsers = users.map((user) => ({
    ...user,
    updatedAt: user.updatedAt.toString(),
    createdAt: user.createdAt.toString(),
  }));

  return {
    props: {
      users: updatedUsers,
    },
    revalidate: 60,
  };
}
