import { Link, BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <section>
      <BrowserRouter>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </BrowserRouter>
    </section>
  );
}
