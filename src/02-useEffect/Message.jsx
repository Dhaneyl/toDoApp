import { useEffect } from "react";


export const Message = () => {
  
  useEffect(() => {
    const onMouseMove = ({x, y})=>{
     const coords = {x, y};
     console.log(coords);
    }

    window.addEventListener( 'mousemove', onMouseMove);
 
   return () => {
     window.removeEventListener( 'mousemove', onMouseMove);
   }
 }, [])

  return (
    <h1>This user is a Goddes</h1>
  )
}
