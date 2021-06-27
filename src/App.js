import './App.css';
import { NewNoteForm } from './NewNoteForm';
import { useNotesStore } from "./NoteContext";

import { useObserver } from "mobx-react";


function App() {

  const noteStore = useNotesStore();


  return useObserver(() => (
    <>
      <ul>
        {
          noteStore.notes.map((note) => {
            return <li 
            onClick={() => noteStore.removeNote(note.id)}
            key={note.id}>{note.text}</li>
          })
        }
      </ul>

      <NewNoteForm />
    </>
  ))
}

export default App;
