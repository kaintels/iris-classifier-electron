import logo from './logo.svg';
import react, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import {HashRouter , Route, Routes} from "react-router-dom";



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
          <HashRouter>
              <Routes>
                  <Route path={"/"} element={<Home/>}></Route>
              </Routes>
          </HashRouter>
          <Footer>
          </Footer>
          {/*{testStr.project}*/}
          {/*{testStr.date}*/}
      </div>
  );
}

export default App;
