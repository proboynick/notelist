import { useEffect, useState } from 'react';
import type { INote } from '../../models/Note';
import { AddNote } from '../AddNote/AddNote';
import { Note } from '../Note/Note';

export const MainBlock = (): JSX.Element => {
  const [notes, setNotes] = useState([
    {
      id: '121333',
      content: '1Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
      date: '23-03-2023',
    },
    {
      id: '121334',
      content: '2Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
      date: '20-03-2023',
    },
    {
      id: '121335',
      content: '3Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
      date: '21-03-2023',
    },
    {
      id: '121336',
      content: '4Lorem ipsum, dolor sit amet consectetur adipisicing #elit.',
      date: '22-03-2023',
    },
  ]);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const deleteNoteById = (id: string): void => {
    setNotes(
      (notes as INote[]).filter((note) => {
        return note.id !== id;
      })
    );
  };

  const addNote = (text: string): void => {
    const id = self.crypto.randomUUID();
    const content = text;
    const date = new Date().toLocaleDateString();
    const buffer = notes;
    buffer.push({ id, content, date });
    setNotes(buffer);
  };

  return (
    <main>
      <div className="wrapper">
        {(notes as INote[]).map((note, index) => {
          return <Note key={index} note={note} remove={deleteNoteById} />;
        })}
        <AddNote add={addNote} />
      </div>
    </main>
  );
};
