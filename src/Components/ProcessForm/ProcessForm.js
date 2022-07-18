import {Button, Card, Form} from "react-bootstrap";
import {useState, useEffect} from "react";
import {v4 as UUID} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {ASSIGN_PROCESS, NEW_PROCESS, ON_DELETE_PROCESS} from "../Modules/reducer";
import {ON_EDIT_PROCESS, SELECT_PROCESS} from "../Modules/reducer";



export function ProcessForm() {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState('')
	const selectedProcess = useSelector(state => state.selectedProcess)
	const [processView, setProcessView] = useState(null)
	const processes = useSelector(state => state.processList)

	useEffect(() => {
		if (selectedProcess) {
			setFormData(selectedProcess.title)
		}
	}, [selectedProcess])

	function submitForm(event) {
		event.preventDefault()
		if (selectedProcess) {
			let process = {
				...selectedProcess,
				title: formData
			}
			dispatch({type: ON_EDIT_PROCESS, process})
		} else {
			let newProcess = {
				id: UUID(),
				title: formData,
			}
			dispatch({type: NEW_PROCESS, newProcess})
		}
		setFormData('')
	}

	function handleChange(event) {
		setFormData(event.target.value)
	}
	function setProcess(e){
		setProcessView(processes.find(process => process.title === e.target.value))
	}

	return <Card className={'w-25 text-center'}>
		<h2>Create Process</h2>

		<Form onSubmit={(event) => submitForm(event)} className={'p-4'} style={style}>
			<Form.Control as='textarea' rows={3} value={formData}
						  onChange={(event) => handleChange(event)}></Form.Control>

			<Button type="submit">
				Create Process
			</Button>

		</Form>
		<Form>
			<h3>Select a process to assign to follower:</h3>
			<select onChange={e => setProcess(e)}>
				<option disabled={true} selected>Select Process</option>
				{processes.map((process) => {
					return <option>{process.title}</option>
				})}
			</select>
			<Button onClick={()=> dispatch({type: ASSIGN_PROCESS, process: processView})}>Assign Process</Button>
			<Button onClick={()=>dispatch({type: ON_DELETE_PROCESS, process:processView})}>Delete Process</Button>
			<Button onClick={()=>dispatch({type:SELECT_PROCESS, process: processView})}>Edit Process</Button>
		</Form>

	</Card>
}

const style = {
	display: "flex",
	flexDirection: "column",
	marginBottom: "1rem"
}