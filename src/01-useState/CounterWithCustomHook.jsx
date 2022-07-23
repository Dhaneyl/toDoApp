import { useCounter } from "../hooks"


export const CounterWithCustomHook = () => {
    const {counter, increase, decrease, reset} = useCounter();
  return <>
    <h1>Counter: {counter} </h1>
    <hr/>

    <button className="btn btn-primary" onClick={()=>{increase(1)}}> +1 </button>
    <button className="btn btn-primary"onClick={reset}> Reset </button>
    <button className="btn btn-primary" onClick={()=>{decrease(1)}}> -1 </button>
  </>
}
