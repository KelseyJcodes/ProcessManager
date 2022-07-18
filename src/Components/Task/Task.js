import {useDispatch} from "react-redux";
import {TASK_CHECKED} from "../Modules/reducer";

export function Task(props) {
	const dispatch = useDispatch()

	function whenChecked() {
		let task = {
			...props.task,
			isComplete: !props.task.isComplete
		}
		dispatch({type: TASK_CHECKED, task})
	}


	return <div style={style} className={props.task.isComplete ? 'complete' : ''} >
		<input onChange={whenChecked} checked={props.task.isComplete} type={"checkbox"}/>
		<h5>{props.task.content}</h5>
	</div>
}

const style = {
	display: "flex",
	border: "1px solid black",
	padding: "1rem",
	borderRadius: ".25rem",
	// backgroundColor: "white"
}