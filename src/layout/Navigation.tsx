import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
      <nav className='m-10 text-[whitesmoke]'>
        <ul>
          <li className='hover:underline uppercase'>
            <Link to="/">Home</Link>
          </li>
          <li className='hover:underline uppercase'>
            <Link to="/create-employer">Create employee</Link>
          </li>
          <li className='hover:underline uppercase'>
            <Link to="/employees">Current employees</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
