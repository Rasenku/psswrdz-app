import './App.css';
import Password from './password';
import {useState} from "react"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'


function App() {
  const [password, setPassword] = useState()
  const store = createStore(reducers)
  return (
    <Provider store={store}>
      <div className="App">
        
          <Password />
      </div>
    </Provider>
  );
}

export default App;
