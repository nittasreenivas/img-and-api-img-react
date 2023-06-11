import { useState } from "react";
export default function Data() {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708__480.jpg",
    "https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1qO-BkqC8LbaSpcBs3tFZuX9RRh8AdSCIQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYBmqHsFLBrm0zMV9LvNf3tUAZHhSXGi1Ng&usqp=CAU",
    "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  const [img, setImg] = useState(images);
  const [index, setIndex] = useState(0);
  console.log("images:::", images);
  const handleNext = () => {
    if (index === img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handlePrev = () => {
    if (index === 0) {
      setIndex(img.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div>
      {img.length > 0 && (
        <div className="vasu">
          <img alt="" src={img[index]} width={300} />
          <div>
            <button onClick={handlePrev}> PREV</button> &nbsp;
            <button onClick={handleNext}> NEXT</button>
          </div>
        </div>
      )}
    </div>
  );
}
