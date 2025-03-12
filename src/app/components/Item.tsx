export default function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input
        title="checkbox"
        type="checkbox"
        value={item.packed}
        // onChange={() => onToggleItems(item.id)}
      />

      <button
        onClick={(e) => onDeleteItem(item.id)}
        style={{ color: "red", fontSize: "3.5rem" }}
      >
        &times;
      </button>
    </li>
  );
}
