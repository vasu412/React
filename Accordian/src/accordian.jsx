import { useEffect, useState } from "react";

const Accordian = ({ idx, open }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (open === true) setState(true);
    else if (open === false) setState(false);
  }, [open]);

  return (
    <div style={{ width: "500px" }}>
      <h1 onClick={() => setState(!state)}>Accordian {idx}</h1>
      {state && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea
          officia omnis molestias itaque vitae nobis id? Debitis ipsa vel, sunt,
          obcaecati explicabo eum recusandae officia quisquam repudiandae totam
          ipsam!
        </div>
      )}
    </div>
  );
};

export default Accordian;
