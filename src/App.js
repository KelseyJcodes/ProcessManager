import './App.css';
import {EditorView} from "./Components/EditorView/EditorView";
import {FollowerView} from "./Components/FollowerView/FollowerView";
//import {Card, Button, Form} from 'react-bootstrap';
// import {UserTypeForm} from "./Components/UserType/UserTypeForm";
//import {reducer} from "./Components/Modules/reducer";

function App() {
	return <>
		<div className={"viewsP"}>
		<div className={"views"}>
			<EditorView/>
		</div>
		<div className={"views"}>
			<FollowerView/>
		</div>
		</div>
	</>
}

export default App;
