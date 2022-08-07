import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  const [result, setResult ] = useState<string>(""); 

  const getResponse = (url: string)  => {
    return axios.get(url);
  };

  useEffect(() => {
    const backendUrl = "http://springbootdep-env.eba-zmdzeg35.ap-south-1.elasticbeanstalk.com/";
    getResponse(backendUrl).then(r => {
      setResult(r.data);
    }); 
  }); 

  return <>
    {result}
  </>;
}

export default App;
