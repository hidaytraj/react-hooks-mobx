import { useLocalStore } from "mobx-react";
import React from "react";
import { createNoteStore } from "./store/noteStore";

const NotesContext = React.createContext(null);

// provider to wrap
export const NotesProvider = ({ children }) => {
    const notesStore = useLocalStore(createNoteStore);
    return <NotesContext.Provider value={notesStore}>
        {children}
    </NotesContext.Provider>
}

//  hook to use
export const useNotesStore = () => React.useContext(NotesContext);