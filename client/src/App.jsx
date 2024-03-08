import logo from './logo.svg';
import './App.css';
import {useQuery} from 'react-query'
import { BASE_URL } from './constants';
import axios from 'axios'


function App() {
  const {data} = useQuery(['query'] , () => {
    return axios.get(BASE_URL)
  })
  return (
    <>
    <h1>{data?.data.message}</h1>
    </>
  );
}

export default App;
