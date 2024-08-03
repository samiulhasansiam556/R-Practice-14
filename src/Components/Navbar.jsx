
import { Link,useNavigate } from "react-router-dom";
 import { signOut } from "firebase/auth";
 import { auth } from "../Firebase/FirebaseConfig";

function Navbar() {

  const navigate = useNavigate();



  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign-out error", error);
    }
  };
  
  return (
    <div
      className="main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md"
    >
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          E-NoteBook
        </div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-white justify-center items-center">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
         <li onClick={logout} className="cursor-pointer">Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
