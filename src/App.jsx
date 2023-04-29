/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-29 15:39:40
 * @FilePath: /tour/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useEffect,useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])
  const removeTours=(id)=>{
    const newTour=tours.filter((tour)=>tour.id!=id)
    setTours(newTour)
  } 
  const fetchTours=async ()=>{
    setLoading(true)
    try{
      const response=await fetch(url)
      const tours=await response.json()
      setTours(tours)
    }
    catch(error){
      console.log(error)
    }
    setLoading(false)
   
  }
  useEffect(()=>{
    fetchTours()
  },[])
  
  if (loading){ 
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }

  if (tours.length===0){
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button type="button" className="btn" style={{marginTop:'2rem'}} onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours}></Tours>
    </main>
  )
};
export default App;


// here's a summary of the order of code execution for this React component:

// Initial render: App component is mounted, useEffect hook is triggered, and fetchTours function is called.
// fetchTours function sets the loading state to true.
// console.log(loading) is called, which outputs false to the console.
// fetch method is called to fetch data from the API.
// try block is executed, which waits for the fetch method to complete and returns a response object.
// response.json() method is called on the response object to parse the response into JSON format.
// setTours function is called to update the tours state with the parsed JSON data.
// setLoading(false) is called to set loading state to false.
// React rerenders the component due to state changes, and console.log(loading) is called again, outputting true to the console.
// Conditional rendering is executed, and the Loading component is rendered to the screen.
// Once the API data is fetched and the state is updated, React rerenders the component again, and console.log(loading) is called a third time, outputting false to the console.
// Conditional rendering is executed again, and the Tours component is rendered to the screen.




