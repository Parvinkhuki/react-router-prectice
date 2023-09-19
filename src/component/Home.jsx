import { Outlet,  useLocation,  useNavigation } from "react-router-dom";
import Header from "./Header";
const Home = () => {
    const navigation = useNavigation();
    const location=useLocation();
    console.log(location)

    return (
        <div className="text-center">
      <Header ></Header>
    {
                navigation.state === "loading" ? 
                <p className="text-3xl items-center justify-center">Loading........</p>: 
                <Outlet></Outlet>
            }

    
        </div>
    );
};

export default Home;