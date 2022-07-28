import {Card, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Task} from "../Task/Task";
import {PROCESS_COMPLETE} from "../Modules/reducer";
import {useEffect, useState} from "react";

export function Process(props) {
	const dispatch = useDispatch()
	const taskList = useSelector(state => state.taskList)
		.filter(task => task.process === props.process.id)
	const [complete, setComplete] = useState(false)


	function onComplete(){
		let process = {
			...props.process,
			isComplete: true
		}
		dispatch({type: PROCESS_COMPLETE, process})
		setComplete(true)
	}

	return (
		<Card style={style}>
			<h4>{props.process.title}</h4>
			{complete && <span> DONE</span>}
			{complete ? null :
				<div>
					<span style={{color: "gray"}}>{props.process.due}</span>

					{(taskList.map((task) => {
							return <Task task={task}/>
						}
					))}
					<Button style={{width: '100px'}} onClick={onComplete}>Complete</Button>
				</div>
			}
		</Card>
	)
}

const style = {
	padding: "1rem",
	border: "1px solid gray",
	backgroundColor: "ghostwhite"
}