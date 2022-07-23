
import { useCounter, useFetch } from '../hooks';
import { Quotes, Loading } from '../03-examples';




export const Layout = () => {
  const{counter, increase} = useCounter();
  const {data, hasError, isLoading} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  console.log({data, hasError, isLoading});

  const {author, quote} = !!data && data[0];

  return <>
    <h1>BreakingBad Quotes</h1>
    <hr/>
    {/* Conditional to make sure if it's loading */}
    {
      isLoading ?  <Loading/> : <Quotes author={author} quote={quote}/>

    }

    <button className='btn btn-primary'
    onClick={()=>{increase(1)}}
    disabled={isLoading}>
     Next Quote
     </button>

    
  </>
}
