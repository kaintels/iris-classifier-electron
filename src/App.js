import logo from './logo.svg';
import react, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import Header from "./component/Header";
import Footer from "./component/Footer";


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
      <div>
          <Header>
          </Header>
          <Footer>
          </Footer>
      </div>
        // {/*{testStr.project}*/}
        // {/*{testStr.date}*/}
  );
}

export default App;
