"use client"

import { configureStore } from "@reduxjs/toolkit";
import expencereducer from './Expence'
 

 export let store = configureStore({ 
   reducer: {
     expence: expencereducer
   },
 });