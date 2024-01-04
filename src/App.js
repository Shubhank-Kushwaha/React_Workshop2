import logo from './logo.svg';
import './App.css';
import Title from './useCallback/Title';
import ParentComponent from './useCallback/ParentComponent';
import Counter from './useMemo/Counter';
import CounterContainer from './reduxContainer/CounterContainer';
function App() {
  return (
    <div className="App">
      <h1>Redux APP</h1>
      {/* <Title/> */}
      {/* <ParentComponent/> */}
      <CounterContainer/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
