import './App.css';
import { Header } from './Components/Header/Header';
import { InputContainer } from './Components/Body/InputContainer';
import { Bottom } from './Components/Bottom/Bottom';

function App() {
  return (
    <div className="main-container">
      <div>
        <Header></Header>
        <InputContainer></InputContainer>
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default App;
