import {useState, useEffect} from 'react'

import ExamsAddForm from "./Components/ExamComponents/ExamsAddForm";
import ExamsList from './exams/ExamsList';


function App() {
  return (
    <>
      <ExamsAddForm/>
      <ExamsList/>
    </>

    
    
  );
}

export default App;
