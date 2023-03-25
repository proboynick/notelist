import { useEffect, useRef, useState } from 'react';
import type { INote } from '../../models/Note';
import { AddNote } from '../AddNote/AddNote';
import { Note } from '../Note/Note';
import { Tag } from '../Tag/Tag';
import './Main.scss';

export const MainBlock = (): JSX.Element => {
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('notesApp-notes', JSON.stringify(notes));
    localStorage.setItem('notesApp-tags', JSON.stringify(tagsArray));
  });
  const [notes, setNotes] = useState<INote[]>(
    JSON.parse(localStorage.getItem('notesApp-notes')!) ?? [
      {
        id: '121333',
        content: '1Lorem ipsum, #dolor sit amet consectetur adipisicing #elit.',
        date: '23-03-2023',
      },
      {
        id: '121334',
        content: '2Lorem ipsum, dolor #sit amet consectetur adipisicing #elit.',
        date: '20-03-2023',
      },
      {
        id: '121335',
        content: '3Lorem ipsum, dolor sit #amet consectetur adipisicing #elit.',
        date: '21-03-2023',
      },
      {
        id: '121336',
        content: '4Lorem ipsum, dolor sit amet #consectetur adipisicing #elit.',
        date: '22-03-2023',
      },
    ]
  );

  const [tagsArray, setTagsArray] = useState<string[]>(
    JSON.parse(localStorage.getItem('notesApp-tags')!) ?? [
      '#dolor',
      '#sit',
      '#amet',
      '#consectetur',
    ]
  );
  const [selectedNotes, setSelectedNotes] = useState<INote[]>(notes);

  const tagInput = useRef(null);

  const selectTags = (content: string): void => {
    const tagregexp = /#[0-9A-Za-zА-Яа-яё]+/g;
    const tags = Array.from(content.matchAll(tagregexp));
    const tagsSet = new Set<string>(tagsArray);
    tags.forEach((tag) => {
      tagsSet.add(tag.toString());
    });
    setTagsArray(Array.from(tagsSet));
  };

  const findBytag = (value: string): void => {
    setSelectedNotes(
      notes.filter((note) => {
        return note.content.includes(value);
      })
    );
  };

  const addTag = (): void => {
    const input = tagInput.current as unknown as HTMLInputElement;
    const tagValue = input.value;
    if (tagValue !== '') {
      const tagsSet = new Set<string>(tagsArray);
      tagsSet.add(tagValue[0] !== '#' ? `#${tagValue}` : tagValue);
      setTagsArray(Array.from(tagsSet));
      input.value = '';
    }
  };

  const deleteTagByValue = (value: string): void => {
    setTagsArray(
      tagsArray.filter((tag) => {
        return tag !== value;
      })
    );
  };

  const deleteNoteById = (id: string): void => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
    setSelectedNotes(
      selectedNotes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  const addNote = (text: string): void => {
    const id = self.crypto.randomUUID();
    const content = text;
    const date = new Date().toLocaleDateString();
    selectTags(content);
    setNotes([...notes, { id, content, date }]);
    setSelectedNotes([...selectedNotes, { id, content, date }]);
  };

  return (
    <main>
      <div className="wrapper">
        <div className="notes-container">
          {selectedNotes.map((note, index) => {
            return <Note key={index} note={note} remove={deleteNoteById} />;
          })}
          <AddNote add={addNote} />
        </div>
        <div className="tags-block">
          <div className="tags-block__tags-container">
            <button
              className="tags-block__reset-button"
              onClick={() => {
                setSelectedNotes(notes);
              }}
            >
              Reset
            </button>
            {tagsArray.map((tag, index) => {
              return (
                <Tag key={index} value={tag} tagSelector={findBytag} deleteTag={deleteTagByValue} />
              );
            })}
          </div>
          <div className="tags-block__tags-add">
            <input
              type="text"
              className="tags-block__tags-text"
              ref={tagInput}
              placeholder="Put some tag..."
            />
            <button
              className="tags-block__tags-add-button"
              onClick={() => {
                addTag();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
