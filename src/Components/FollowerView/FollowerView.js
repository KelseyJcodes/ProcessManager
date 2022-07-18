import {Process} from "../Process/Process";
import {useSelector} from "react-redux";

export function FollowerView(){
	const assignedProcess = useSelector(state=>state.assignedProcess)

		return<div>
		<h2>Hello, Follower!</h2>
		<h3>Below you will find your responsibilities for the week:</h3>
		{assignedProcess && <Process process={assignedProcess}/>}

	</div>
}


// Process Title
//tasks with button to mark as done