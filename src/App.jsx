import { useState, useEffect } from 'react';
import './App.css';
import UserDetails from './UserDetails';

export default function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("El email no es válido");
      setIsValid(false);
      return;
    }

    if (!username) {
      setError("El nombre de usuario es obligatorio");
      setIsValid(false);
      return;
    }

    if (password.length < 7) {
      setError("La contraseña debe ser mayor a 6 caracteres");
      setIsValid(false);
      return;
    }

    setError("");
    setIsValid(true);
  }, [email, username, password]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) return;

    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <UserDetails email={email} username={username} password={password} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Login</h2>

          {error && <p>{error}</p>}

          <div className="row">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="row">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="row">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="row">
            <button type="submit" disabled={!isValid}>
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
}