import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

function TodosActions({ refreshTodoList, deleteCompletedTodos }) {
    return <div>
        <Button title="Delete completed todos" onClick={() => deleteCompletedTodos()}><RiDeleteBin2Line /></Button>
        <Button title="Refresh todo list" onClick={() => refreshTodoList()}><RiRefreshLine /></Button>
    </div>
}

export default TodosActions;