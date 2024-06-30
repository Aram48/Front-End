export const Song = ({ title, artist, duration, id, onDelete, moveDown, add, inPlaylist = false }) => {
    return <div className="song">
        <p>{title}</p>
        <strong>by {artist} </strong>
        <small>{duration = 4} mins</small>
        <button onClick={() => onDelete(id)}>Delete</button>
        {!inPlaylist && <button onClick={() => add(id)}>Move</button>}
        {inPlaylist && <button onClick={() => moveDown(id)}>Move Down</button>}
    </div>
}