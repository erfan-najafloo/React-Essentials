export default function TabButton({ lable, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {lable}
      </button>
    </li>
  );
}
