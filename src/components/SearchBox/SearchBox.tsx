import css from './SearchBox.module.css';

interface SearchBoxProps {
  defaultValue: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ defaultValue, onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
