import { Song } from "./Song"

export const SongList = ({ items, onDelete, addToPlaylist }) => {
    return <div>
        <h3>Song List </h3>
        {
            items.map(elm => (
                <Song
                    key={elm.id}
                    {...elm}
                    onDelete={onDelete}
                    add={addToPlaylist}
                />
            ))}
    </div>
}