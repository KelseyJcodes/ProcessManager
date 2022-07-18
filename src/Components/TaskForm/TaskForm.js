//process title
//2-6 tasks
import {Button, Card, Form} from "react-bootstrap";
import {useState, useEffect} from "react";
import {v4 as UUID} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {NEW_TASK} from "../Modules/reducer";
//import {ON_EDIT} from "../Modules/reducer";

export function TaskForm() {
	const dispatch = useDispatch()
	const selectedTask = useSelector(state => state.selectedTask)
	const processes = useSelector(state => state.processList)
	const [formData, setFormData] = useState('')
	const [process, setProcess] = useState(processes[0].id)

	useEffect(() => {
		if (selectedTask) {
			setFormData(selectedTask.content)
		}
	}, [selectedTask])

	function submitForm(event) {
		event.preventDefault()
		if (selectedTask) {
			let task = {
				...selectedTask,
				content: formData
			}
			// EDIT TASK DISPATCH
		} else {
			let newTask = {
				id: UUID(),
				process: process,
				content: formData,
			}
			dispatch({type: NEW_TASK, newTask})
		}
		setFormData('')
	}

	function handleChange(event) {
		setFormData(event.target.value)
	}
	function selectProcess(event){
		setProcess(event.target.value)
	}

	return <Card className={'w-25 text-center'}>
		<h2>Create Task</h2>

		<Form onSubmit={(event) => submitForm(event)} className={'p-4'} style={style}>
			<label>Select Process:</label>
			<select onChange={e => selectProcess(e)} value={process}>
				{processes.map((process) => {
					return <option value={process.id}>{process.title}</option>
				})}
			</select>
			<Form.Control as='textarea' rows={3} value={formData}
						  onChange={(event) => handleChange(event)}></Form.Control>

			<Button type="submit">
				Assign Task
			</Button>

		</Form>

	</Card>

}
const style = {
	display: "flex",
	flexDirection: "column",
	marginBottom: "1rem"
}