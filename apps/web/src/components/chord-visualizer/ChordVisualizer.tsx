import * as React from "react";

import "./ChordVisualizer.css";

type Chord = { notes: string[]; name: string }; // TODO: Get type from chord generator package

const TEXTS = {
  nextChordButton: "Next",
};

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

export const Button = ({
  onClick,
  text,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export const ChordVisualizer = ({ chords }: { chords: Chord[] }) => {
  const [chordNumber, setChordNumber] = React.useState(0);

  const showNextChord = () =>
    setChordNumber((prev) => {
      const isLastChord = prev === chords.length - 1;

      return isLastChord ? 0 : ++prev;
    });

  return (
    <main className="chord-visualizer">
      <ChordData chord={chords[chordNumber]} />

      <Button text={TEXTS.nextChordButton} onClick={showNextChord} />
    </main>
  );
};
