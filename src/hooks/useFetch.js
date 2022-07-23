import { useEffect, useState } from "react";


export const useFetch = (url) => {

    //use state

    const [state, setState] = useState({
        data: null,
        hasError: null,
        isLoading: true
    })
   //working with fetch api to get http request
    const getFetch = async () =>{
        setState({
            ...state,
            isLoading: true
        })
        const resp = await fetch(url);
        const data = await resp.json();

        
     //setting the state
        setState({
            data,
            hasError: null,
            isLoading: false
        })
    }
  //setting the useEffect
    useEffect(() => {
      getFetch();

    }, [url])
    
//setting which variables are goin to be rendered in the other screen
  return {
    data: state.data,
    hasError: state.hasError,
    isLoading: state.isLoading
  };
}
