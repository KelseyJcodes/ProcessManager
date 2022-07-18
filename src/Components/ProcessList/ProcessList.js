import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import {Process} from "../Process/Process";



export function ProcessList() {
	const processList = useSelector(state => state.processList)
	return <Container fluid={'md'}>
		{(processList.map((process) => {
				return <Process process={process} key={processList.id}/>
			}
			))}
	</Container>
}