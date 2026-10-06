import { useEffect, useState } from "react";
import { getUser } from "./api/app";
import "./App.css";
import Usercard from "./components/Usercard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((data) => setUser(data.users));
  });
  return <>
  <div className="card-list">

    {user?.map((u) => (
    <Usercard key={u.id} user={u} />
))}

  </div>
       
    </>;
}

export default App;
