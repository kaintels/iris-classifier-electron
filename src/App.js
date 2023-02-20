import logo from './logo.svg';
import react, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";


function App() {
  let project;
  let date
  const [testStr, setTestStr] = useState([]);

  async function fetchData() {
    const result = await axios(
        'http://localhost:8080/project_info',
    );

    setTestStr(result.data);
  }

  useEffect(() => {
    fetchData();
  });


  return (
      <h1>
        {testStr.project}
        <div>

        </div>
        {testStr.date}
      </h1>
  );
}

export default App;
