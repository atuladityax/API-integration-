import { useEffect, useState } from "react";
import { getUser , getProduct } from "./api/app";
import "./App.css";
import Usercard from "./components/Usercard";

function App() {
  const [product, setProduct] = useState([]);
  const [search , setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search === "") {
        getUser().then((data) => setProduct(data.products));
      } else {
        getProduct(search).then((data) => setProduct(data.products));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);
  return (
    <>
      <div className="nav">
       <h1 className="header">Product List </h1>
       <input type="text" 
       className="input"
       placeholder="Search Product"
       value={search}
        onChange={(e) => setSearch(e.target.value)}
       />
      </div>

      <div className="card-list">
        {product.map((p) => (
          <Usercard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default App;
