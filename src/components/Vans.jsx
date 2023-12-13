import { useEffect, useState } from "react";
import VanItem from "./VanItem";

const Vans = () => {
  const [vans, setVans] = useState();
  console.log(vans);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/vans");
        if (res.ok) {
          const data = await res.json();
          //   console.log(data);
          setVans(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <div className="vans-container">
        <h1 className="vans-title">explore our vans options</h1>
       <div className="vans-card--box">
       {vans?.vans?.map(van => (
          <VanItem key={van.id} van={van} />
        ))}
       </div>
      </div>
    </section>
  );
};

export default Vans;
