import { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  // this useEffect runs every time a button is clicked. Refer to the buttons in Form.js and the [reqType] dependency 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const reqURL = `${API_URL}${reqType}`;
        console.log(reqURL);
        const response = await fetch(reqURL);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}></Form>
      {/* <Table items={items}></Table> */}
      <List items={items}></List>
    </div>
  );
}

export default App;
