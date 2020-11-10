import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Pokemon from './components/Pokemon'

//1. App with heading
//2. Route to pokemon component
//3. include :id
const App = () =>{
    return (
        <div>
            <h1>Pokemon Application</h1>
            <BrowserRouter>
            <Route path="/pokemon/:id" component={Pokemon}/>
            </BrowserRouter>
        </div>
    )
}

export default App