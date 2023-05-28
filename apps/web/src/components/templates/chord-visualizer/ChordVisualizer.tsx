// vendors
import { createSignal } from "solid-js";

// components
import { Button } from "@/components";
import { ChordData } from "./components";

// lib
import { Chord } from "chord-generator";

// styles
import "./index.css";

const TEXTS = {
  nextChordButton: "Next",
};

export const ChordVisualizer = ({ chords }: { chords: Chord[] }) => {
  const [chordNumber, setChordNumber] = createSignal(0);

  const showNextChord = () => {
    const prev = chordNumber();
    const isLastChord = prev === chords.length - 1;

    setChordNumber(isLastChord ? 0 : prev + 1);
  }

  const currentChord = () => chords[chordNumber()];

  return (
    <main class="chord-visualizer">
      <ChordData chord={currentChord()} />

      <Button text={TEXTS.nextChordButton} onClick={showNextChord} />
    </main>
  );
};
