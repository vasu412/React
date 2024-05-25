const List = ({ del, idx, x }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <span>{x.name}</span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>₹ {x.cost}</span>
      <span
        style={{ marginTop: "7px", cursor: "pointer" }}
        onClick={() => {
          del(idx);
        }}>
        <i
          className="material-icons"
          style={{ fontSize: "18px", marginLeft: "10px" }}>
          close
        </i>
      </span>
    </div>
  </div>
);

export default List;
