import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList'

function App() {

    return (
        <div className="App">
            <Header
                title="Characters"
            />
            <CharacterList/>
        </div>
    )
}

export default App
