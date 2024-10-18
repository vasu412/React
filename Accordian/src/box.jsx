import { useState } from "react";

const Box = () => {
  const [dis1, setDis1] = useState(true);
  const [dis2, setDis2] = useState(false);
  const [dis3, setDis3] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "500px",
        backgroundColor: "#f0f0f0",
        width: "500px",
      }}>
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
        }}>
        <h2
          style={{
            backgroundColor: "black",
            color: "white",
            height: "40px",
            width: "70px",
          }}
          onClick={() => {
            setDis1(true);
            setDis2(false);
            setDis3(false);
          }}>
          Tab 1
        </h2>
        <h2
          style={{
            backgroundColor: "black",
            color: "white",
            height: "40px",
            width: "70px",
          }}
          onClick={() => {
            setDis1(false);
            setDis2(true);
            setDis3(false);
          }}>
          Tab 2
        </h2>
        <h2
          style={{
            backgroundColor: "black",
            color: "white",
            height: "40px",
            width: "70px",
          }}
          onClick={() => {
            setDis1(false);
            setDis2(false);
            setDis3(true);
          }}>
          Tab 3
        </h2>
      </div>
      <div>
        {dis1 && (
          <p>
            tab 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reiciendis optio voluptatem debitis, aliquam est odit laborum,
            ducimus dicta voluptates qui veniam saepe laboriosam, ea vel.
            Provident fuga voluptatem tempora!
          </p>
        )}
        {dis2 && (
          <p>
            tab 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores non vel ipsum sequi voluptates magnam dignissimos, harum
            repellat at perspiciatis consequuntur vero. Quisquam eum et ducimus
            dolores laborum vero consectetur!
          </p>
        )}
        {dis3 && (
          <p>
            tab 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            reiciendis optio voluptatem debitis, aliquam est odit laborum,
            ducimus dicta voluptates qui veniam saepe laboriosam, ea vel.
            Provident fuga voluptatem tempora!
          </p>
        )}
      </div>
    </div>
  );
};

export default Box;
