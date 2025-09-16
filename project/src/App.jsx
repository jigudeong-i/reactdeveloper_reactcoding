// import './App.css'
// const App = () => {
//   return (
//     <div className="text-3xl font-bold underline text-blue-900">
//       Hello, React~~!!
//     </div>
//   )
// };
// export default App


import { RouterProvider } from "react-router-dom";
import root from "./router/root";

const App = () => {
  return(
    <RouterProvider router={root}/> 
  );
}
export default App;
