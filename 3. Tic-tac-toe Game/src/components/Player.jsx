export default function Player({ name, symbol, onEdit }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEdit}>Edit</button>
    </li>
  );
}