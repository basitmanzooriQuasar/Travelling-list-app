export default function Stats({ items }) {
  const numItems = items.length;
  const countPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        👍 You have {numItems} items on your list, and you aldready packed{" "}
        {countPacked} items {Math.round((countPacked / numItems) * 100)}% 🍳
      </em>
    </footer>
  );
}
