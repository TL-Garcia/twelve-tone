import * as React from "react";

import { Button } from "@/components";
import { ChordData } from "./components";

import { Chord } from "chord-generator";

import "./index.css";

const TEXTS = {
  nextChordButton: "Next",
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
