import api from '../api';

export default class HelloWorldService {
    GetTodos() {
        return api.get('todos');
    }
}
