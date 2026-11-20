"use client"
import { Provider } from "react-redux";
import Componet from "./component/componet";
import { store } from "./Redux/Store";
export default function Home() {
  return (
 <div>
 <Provider  store={store}>
 <Componet />
 </Provider> 
 
 </div>    
  );
}
