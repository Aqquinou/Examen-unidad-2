export default function UserDetails({ email, username, password }) {
  return (
    <div className="flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Welcome {username}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}