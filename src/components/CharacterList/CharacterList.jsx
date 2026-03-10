import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CharacterCard from "../CharacterCard/CharacterCard";
import data from '../../data/character.js'

function CharacterList() {
    const [characters, setChars] = useState(data);
    const [nameInput, setName] = useState("");
    const [ageInput, setAge] = useState("");
    const [jobInput, setJob] = useState("");
    const [imageInput, setImage] = useState("");
    const [charId, setId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (!nameInput.trim()) return;
        if (!jobInput.trim()) return;

        if (charId) {
            updateChar();
        } else {
            addChar();
        }
    }

    function addChar() {
        const newChar = {
            id: uuidv4(),
            name: nameInput,
            age: ageInput,
            job: jobInput,
            image: imageInput,
        };

        setChars(prev => [...prev, newChar]);
        setName("");
        setAge("");
        setJob("");
        setImage("");
    }

    function startEdit(char) {
        setName(char.name);
        setAge(char.age);
        setJob(char.job);
        setImage(char.image);
        setId(char.id)
    }

    function updateChar() {
        setChars(prev =>
            prev.map(char =>
                char.id === charId
                    ? { ...char, name: nameInput, job: jobInput, age: ageInput, image: imageInput}
                    : char
            )
        );

        setId(null);
        setName("");
        setAge("");
        setJob("");
        setImage("");
    }

    function deleteChar(id) {
        setChars(prev =>
            prev.filter(char => char.id !== id)
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={nameInput}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={ageInput}
                    onChange={e => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Job"
                    value={jobInput}
                    onChange={e => setJob(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image"
                    value={imageInput}
                    onChange={e => setImage(e.target.value)}
                />
                <button type="submit">
                    {charId ? "Update" : "Add"}
                </button>
            </form>

            <ul>
                {characters.map(char=> (
                    <CharacterCard
                        key={char.id}
                        char={char}
                        onDelete={deleteChar}
                        onEdit={startEdit}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
