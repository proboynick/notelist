import './AddNote.scss';
import AddIcon from '../../assets/img/add.png';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import ConfirmIcon from '../../assets/img/confirm.png';

export const AddNote = ({ add }: { add: (text: string) => void }): JSX.Element => {
  const [isAdd, setIsAdd] = useState(false);
  const [contentValue, setContentValue] = useState('');
  const inputArea = useRef(null);
  const contentArea = useRef(null);
  return (
    <div className={classNames('add-block', { add: isAdd })}>
      <button
        className="add-block__add-button"
        onClick={() => {
          setIsAdd(true);
        }}
      >
        <img src={AddIcon} alt="add" />
      </button>
      <p className="add-block__content" ref={contentArea}>
        {contentValue
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
        className="add-block__input"
        cols={30}
        rows={10}
        ref={inputArea}
        maxLength={75}
        onChange={(e) => {
          setContentValue(e.target.value);
        }}
        defaultValue={contentValue}
      ></textarea>
      <button
        className="add-block__confirm-button"
        onClick={() => {
          add(contentValue);
          setIsAdd(false);
        }}
      >
        <img src={ConfirmIcon} alt="confirm" />
      </button>
    </div>
  );
};
