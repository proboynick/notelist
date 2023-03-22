import './Note.scss';
import EditIcon from '../../assets/img/edit.png';
import ConfirmIcon from '../../assets/img/confirm.png';
import RemoveIcon from '../../assets/img/remove.png';
import { useRef, useState } from 'react';
import classNames from 'classnames';

export const Note = (): JSX.Element => {
  const [content, setContent] = useState(
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  );
  const inputArea = useRef(null);
  const [isEdit, setIsEdit] = useState(false);

  const editNote = (): void => {
    setIsEdit(!isEdit);
    (inputArea.current as unknown as HTMLTextAreaElement).value = content;
  };

  return (
    <div className={classNames('note', { edit: isEdit })}>
      <p className="note__content">{content}</p>
      <textarea
        className="note__input"
        cols={30}
        rows={10}
        ref={inputArea}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <p className="note__date">{new Date().toLocaleDateString()}</p>
      <button className="note__edit-button" onClick={editNote}>
        <img src={(isEdit && ConfirmIcon) || EditIcon} alt="edit" />
      </button>
      <button className="note__remove-button">
        <img src={RemoveIcon} alt="remove" />
      </button>
    </div>
  );
};
