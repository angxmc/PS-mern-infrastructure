import * as usersService from '../utilities/users-service'
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  };
  return (
    <nav>
      <h1>Welcome, {user.name}</h1>
      <div>
        <Link to="/orders"> Order History</Link> &nbsp; | &nbsp;
        <Link to="/orders/new"> New Order</Link> &nbsp;
      </div>
      <div className="logOut-btn">
        <Link to="" onClick={handleLogout}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
