import employees from "./employees";
const Right = ({ add, dis }) =>
  employees.map(({ first_name, last_name, age, id }) => (
    <div
      className="employees"
      style={{
        backgroundColor: "lightgray",
        borderRadius: "5px",
      }}
      key={id}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
        }}>
        <span>
          {first_name} {last_name}
        </span>
        <span style={{ marginRight: "75px" }}>{age}</span>
      </div>
      <button
        onClick={(e) => {
          add(first_name, last_name, age);
        }}
        style={{ display: dis[first_name] }}>
        ADD
      </button>
    </div>
  ));
export default Right;
