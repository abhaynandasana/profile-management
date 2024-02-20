import { BrowserRouter } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import Routes from 'routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
