import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
      <nav className='m-10 text-[whitesmoke]'>
        <ul>
          <li className='hover:underline uppercase'>
            <Link to="/">Accueil</Link>
          </li>
          <li className='hover:underline uppercase'>
            <Link to="/create-employer">Creer un employe</Link>
          </li>
          <li className='hover:underline uppercase'>
            <Link to="/employees">Liste des employes</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
