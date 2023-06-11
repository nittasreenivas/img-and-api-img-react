import { useState, useEffect } from "react";
import axios from "axios";
const Simple = () => {
  const [prod, setProd] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log("data:::", res.data);
      setProd([...res.data.slice(0, 6)]);
    });
  }, []);
  const handleNext = () => {
    if (index === prod.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(prod.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div>
      {prod.length > 0 && (
        <div className="prod">
          <h3> {prod[index].title} </h3>
          <img alt="" src={prod[index].image} width={100} />
          <p>{prod[index].price} </p>
          <button onClick={handlePrev}> PREV</button>&nbsp;&nbsp;
          <button onClick={handleNext}> NEXT</button>&nbsp;&nbsp;
        </div>
      )}
    </div>
  );
};

export default Simple;
