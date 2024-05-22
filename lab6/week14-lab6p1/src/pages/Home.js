import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <ul>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Home;