import { useState } from "react"
import { useNotesStore } from "./NoteContext";

export const NewNoteForm = () => {

    const [noteText, setNoteText] = useState("");

    const noteStore = useNotesStore();

    return (
        <>
            <input type="text" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
            <button onClick={
                () =>  noteStore.addNote(noteText)
            }>Add note</button>
        </>
    )
}