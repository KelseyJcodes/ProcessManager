export const ON_EDIT_TASK = 'reducer/ON_EDIT_TASK';
export const NEW_TASK = 'reducer/NEW_TASK';
export const NEW_PROCESS = 'reducer/NEW_PROCESS';
export const TASK_CHECKED = 'reducer/TASK_CHECKED';
export const ON_EDIT_PROCESS = 'reducer/ON_EDIT_PROCESS';
export const ASSIGN_PROCESS = 'reducer/ASSIGN_PROCESS';
export const SELECT_PROCESS = 'reducer/SELECT_PROCESS';
export const ON_DELETE_PROCESS = 'reducer/ON_DELETE_PROCESS';
export const PROCESS_COMPLETE ='reducer/PROCESS_COMPLETE'



const initState = {
	isEditor: false,
	isFollower: false,
	userTypeError: '',
	processList: [
		{
			id: '1',
			title: "Make bed",
			due: "Today",
			isComplete: false
		},
		{
			id: '2',
			title: "wash the car",
			due: "Next Week",
			isComplete: false
		}
	],
	taskList: [
		{
			id: '1',
			process: '1',
			content: 'pull the sheets',
			isComplete: false
		},
		{
			id: '2',
			process: '1',
			content: 'fluff the pillows',
			isComplete: false
		},
	],
	selectedTask: '',
	selectedProcess: null,
	assignedProcess: null
}

export function reducer(state = initState, action) {
	switch (action?.type) {
		case ON_EDIT_TASK:
			return {
				...state,
				selectedTask: null,
				taskList: state.taskList.map((task) => {
					if (task.id === action.task.id) {
						return action.task
					}
					return task
				})
			}
		case NEW_TASK:
			return {
				...state,
				taskList: [
					...state.taskList,
					action.newTask
				]
			}
		case NEW_PROCESS:
			return {
				...state,
				processList: [
					...state.processList,
					action.newProcess
				]
			}
		case ASSIGN_PROCESS:
			return {
				...state,
				assignedProcess: action.process
			}
		case SELECT_PROCESS:
			return {
				...state,
				selectedProcess:
				action.process

			}
		case TASK_CHECKED:
			return {
				...state,
				taskList: state.taskList.map(task => {
					if (task.id === action.task.id) {
						return action.task
					} else {
						return task
					}
				})
			}
		case PROCESS_COMPLETE:
			return{
				...state,
				processList: state.processList.map(process=>{
					if (process.id === action.process.id){
						return action.process
					} else {
						return process
					}
				})
			}
		case ON_DELETE_PROCESS:
			return {
				...state,
				processList: state.processList.filter(process =>process.title !== action.process.title)
			}
		case ON_EDIT_PROCESS:
			return {
				...state,
				selectedProcess: null,
				processList: state.processList.map((process) => {
					if (process.id === action.process.id) {
						return action.process
					} else {
						return process
					}
				})
			}


		default:
			return {
				...state,
			}
	}

}