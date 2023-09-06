import logo from './logo.svg';
import './App.css';
import RouteList from './Components/RouteList/RouteList';
import {Provider} from "react-redux";
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <RouteList />
      </Provider>
    </div>
  );
}

export default App;
