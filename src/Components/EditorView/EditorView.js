import {TaskForm} from "../TaskForm/TaskForm";
import {ProcessForm} from "../ProcessForm/ProcessForm";
import { ProcessList } from "../ProcessList/ProcessList";
import {useSelector} from "react-redux";
import {Process} from "../Process/Process";
import { useState} from "react";

export function EditorView() {
	const [processView, setProcessView] = useState(null)
	const processes = useSelector(state => state.processList)

	function setProcess(e){
		setProcessView(processes.find(process => process.title === e.target.value))
	}

	return <div>
		<h2>Hello, Editor!</h2>
		<h3>Please assign the follower's responsibilities for the week:</h3>
		<ProcessForm/>
		<TaskForm/>
		<h3>Select a process to see follower's progress:</h3>
		<select onChange={e => setProcess(e)}>
			<option disabled={true} selected>Select Process</option>
			{processes.map((process) => {
				return <option>{process.title}</option>
			})}
		</select>
		{ processView && <Process process={processView} /> }

	</div>

//Editor needs create process function

//needs edit function

//needs delete function

//needs to see progress of follower

}

