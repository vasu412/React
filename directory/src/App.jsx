import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 80vw;
  height: 60vh;
  margin: 50px auto;
  overflow: scroll;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const FormGroup = styled.div`
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  width: 130px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  height: 35px;
  padding: 0 15px;
  width: 150px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [add, setAdd] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "",
    aadharNum: "",
    mobileNum: "",
  });

  useEffect(() => {
    const storedData = [];
    for (let i = 1; i < 1000; i++) {
      const item = localStorage.getItem(i);
      if (item) {
        storedData.push(JSON.parse(item));
      }
    }
    setData(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    if (localStorage.getItem(formData.aadharNum)) alert("num already exists!!");
    else {
      localStorage.setItem(formData.aadharNum, JSON.stringify(formData));
      setAdd(false);
      setData([...data, formData]);
      setFormData({
        name: "",
        dob: "",
        age: "",
        aadharNum: "",
        mobileNum: "",
      });
    }
  };

  const handleDelete = (num) => {
    localStorage.removeItem(num);
    setData(data.filter((item) => item.aadharNum !== num));
  };

  return (
    <>
      <h1>Directory App</h1>
      <div
        style={{
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}>
        <button onClick={() => setAdd(false)}>All Persons</button>
        <button>Search</button>
        <button onClick={() => setAdd(true)}>ADD</button>
      </div>
      {add && (
        <FormContainer>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "15px" }}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="age">Age</Label>
              <Input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="aadharNum">Aadhar Number</Label>
              <Input
                type="number"
                id="aadharNum"
                name="aadharNum"
                value={formData.aadharNum}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="mobileNum">Mobile Number</Label>
              <Input
                type="number"
                id="mobileNum"
                name="mobileNum"
                value={formData.mobileNum}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="mobileNum">Actions</Label>
              <Button type="submit">Save</Button>
            </FormGroup>
          </form>
        </FormContainer>
      )}
      {!add && (
        <FormContainer>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <form style={{ display: "flex", gap: "35px" }}>
              <Label htmlFor="name">Name</Label>
              <Label htmlFor="dob">Date of Birth</Label>
              <Label htmlFor="age">Age</Label>
              <Label htmlFor="aadharNum">Number</Label>
              <Label htmlFor="mobileNum">Mobile Number</Label>
              <Label htmlFor="mobileNum">Actions</Label>
            </form>
            {data.map((x) => (
              <div
                key={x.aadharNum}
                style={{
                  display: "flex",
                  gap: "35px",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Label>{x.name}</Label>
                <Label>{x.dob}</Label>
                <Label>{x.age}</Label>
                <Label>{x.aadharNum}</Label>
                <Label>{x.mobileNum}</Label>
                <Button onClick={() => handleDelete(x.aadharNum)}>
                  Delete
                </Button>
              </div>
            ))}
          </form>
        </FormContainer>
      )}
    </>
  );
}

export default App;
