//import {useSelector} from "react-redux";
//import {Post} from "./Post";
import {Container} from "react-bootstrap";
//import {PostForm} from "./PostForm";


export function TaskList() {
	//const taskList = useSelector(state => state.taskList)
	console.log(taskList)
	return <Container fluid={'md'}>
		{
			taskList.map((task) => {
				return <Task task={task} key={task.id}/>
			})}
	</Container>
}
