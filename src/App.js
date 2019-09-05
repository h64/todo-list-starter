// Third Party Modules
import React, { Component } from 'react';

// Resources
import './App.css';

// Custom Components
import Header from './navigation/Header'
import Counter from './todoList/Counter';
import Controls from './todoList/Controls';
import TodoList from './todoList/TodoList';

class App extends Component {
    state = {
        items: [
            { text: 'Walk the dog', finished: false },
            { text: 'Walk the cat', finished: true },
            { text: 'Walk the bird', finished: false },
            { text: 'Walk the lizard', finished: false },
            { text: 'Walk the fish', finished: true }
        ]
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Counter />
                <Controls />
                <TodoList items={this.state.items} />
            </div>
        )
    }
}

export default App;
