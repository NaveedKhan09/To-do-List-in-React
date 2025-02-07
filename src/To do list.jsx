import { useState } from 'react';
import './list.css'
function List () {
    const [inputValue, setInputValue] = useState("")
    
    const [allTasks, setTask] = useState([])
    function Addtask () {
        setTask([...allTasks, inputValue])
        setInputValue("")
    }
    function deleteTask (indexOfDeletion) {
        const newAllTasks = allTasks.filter((_, index) => index !== indexOfDeletion)
        setTask(newAllTasks)
    }
    return(
        <>
        <h1>To list in React</h1>
        <div className="inputArea">
            <input type="text"  className="takeInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button className="addButton" onClick={Addtask}>OK</button>
        </div>
        <div className="tasksContainer">
           {allTasks.map((task, index) => ( <div className='individualTask' key={index}>
                <div className='taskArea'>
                    <input type="checkbox" className="checkbox" />
                    <p className="task">{task}</p>
                </div>
                <button className="removeButton" onClick={() => deleteTask(index)}>delete</button>

            </div>))}
        </div>
        </>
    )

}
export default List;