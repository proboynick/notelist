import './Note.scss';
import EditIcon from '../../assets/img/edit.png';
import ConfirmIcon from '../../assets/img/confirm.png';
import RemoveIcon from '../../assets/img/remove.png';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import type { INote } from '../../models/Note';

export const Note = ({
  note,
  remove,
}: {
  note: INote;
  remove: (id: string) => void;
}): JSX.Element => {
  const { id, content, date } = note;
  const [contentValue, setContentValue] = useState(content);

  const inputArea = useRef(null);
  const contentArea = useRef(null);
  const [isEdit, setIsEdit] = useState(false);

  const editNote = (): void => {
    setIsEdit(true);
  };

  const confirmEdit = (): void => {
    // save(id, contentValue);
    setIsEdit(false);
  };

  return (
    <div className={classNames('note', { edit: isEdit })}>
      <p className="note__content" ref={contentArea}>
        {note.content
          .split(' ')
          .map((word, index, array) => {
            if (index !== array.length - 1) {
              return `${word} `;
            }
            return word;
          })
          .map((word, index) => {
            if (word[0] === '#') {
              return <span key={index}>{word}</span>;
            }
            return word;
          })}
      </p>
      <textarea
        className="note__input"
        cols={30}
        rows={10}
        ref={inputArea}
        maxLength={75}
        onChange={(e) => {
          note.content = e.target.value;
        }}
        defaultValue={contentValue}
      ></textarea>
      <p className="note__date">{date}</p>
      <button className="note__edit-button" onClick={editNote}>
        <img src={EditIcon} alt="edit" />
      </button>
      <button className="note__confirm-button" onClick={confirmEdit}>
        <img src={ConfirmIcon} alt="confirm" />
      </button>
      <button
        className="note__remove-button"
        onClick={() => {
          remove(id);
        }}
      >
        <img src={RemoveIcon} alt="remove" />
      </button>
    </div>
  );
};
