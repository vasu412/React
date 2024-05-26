const Left = ({ list, remove, setDis }) =>
  list.map(({ first_name, last_name, age }) => (
    <div
      className="employees"
      style={{
        backgroundColor: "lightgray",
        borderRadius: "5px",
      }}
      key={Math.random()}>
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
        onClick={() => {
          remove(first_name);
        }}>
        REMOVE
      </button>
    </div>
  ));

export default Left;
