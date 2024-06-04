import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Web from './Pages/Web';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Web />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
