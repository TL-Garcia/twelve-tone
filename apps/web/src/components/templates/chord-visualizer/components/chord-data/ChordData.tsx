import { Chord } from "chord-generator";
import "./index.css";

export const ChordData = ({ chord }: { chord: Chord }) => {
  return (
    <div className="chord-data">
      <div className="chord-data__name">{chord.name}</div>

      <div className="chord-data__notes">
        {chord.notes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </div>
  );
};
