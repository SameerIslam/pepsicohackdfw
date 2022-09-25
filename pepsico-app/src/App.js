import { MainPage } from "./frontend/main_page";
import {useEffect} from 'react';


function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="App">
      <MainPage></MainPage>
    </div>
  );
}

export default App;
