const CharacterCard=({char, onEdit, onDelete})=>{
    return(
        <div className="char">
            <header value={char.name}/>
            <img src={char.image}/>
            <p>{"Name: " + char.name}</p>
            <p>{"Age: " + char.age}</p>
            <p>{"Job: " + char.job}</p>

            <button onClick={() => onEdit(char)}>
                Edit
            </button>

            <button onClick={() => onDelete(char.id)}>
                Delete
            </button>

        </div>
    )
}
export default CharacterCard
