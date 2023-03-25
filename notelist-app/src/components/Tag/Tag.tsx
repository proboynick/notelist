import './Tag.scss';

export const Tag = ({
  value,
  tagSelector,
  deleteTag,
}: {
  value: string;
  tagSelector: (value: string) => void;
  deleteTag: (value: string) => void;
}): JSX.Element => {
  return (
    <span
      className="tags-block__tag"
      onClick={() => {
        tagSelector(value);
      }}
    >
      {value}{' '}
      <button
        onClick={(event) => {
          deleteTag(value);
          event.stopPropagation();
        }}
      >
        X
      </button>
    </span>
  );
};
