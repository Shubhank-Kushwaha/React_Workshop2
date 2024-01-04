import Button from "./Button";
import Count from "./Count"
import Title from "./Title"
import { useCallback, useState } from "react"

function ParentComponent(){
  const [age, setAge]= useState(20);
  const [salary, setSalary]= useState(1000)

  const increamentAge= useCallback(()=>{
    setAge(age + 1);
  },[age])
  const increamentSalary= useCallback(()=>{
    setSalary(salary +1000);
  }, [salary])

  return(
    <div>
     
      <Title/>
      <Count text = "age" count={age}/>
      <Button className = "btn btn-primary" handleClick={increamentAge}>Increment Age</Button>
      
      <Count text = "salary" count={salary}/>
      <Button handleClick={increamentSalary}>Increment Salary</Button>
    </div>
  )
}
export default ParentComponent