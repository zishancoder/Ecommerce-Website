import { useEffect} from "react"
import Filters from "./Components/Filters"
import Header from "./Components/Header"
import Products from "./Components/Products"
import { useDispatch } from "react-redux";
import data from './Data/db.json';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async()=>{
      // const res = await fetch("http://localhost:3000/products");
      // const data = await res.json();
      dispatch({
        type:'getProducts',
        payload:data.products
      })
    }
    fetchData();
  },[dispatch]);

  return (
    <div>
      <Header/>
      <Filters/>
      <Products/>
    </div>
  )
}

export default App
