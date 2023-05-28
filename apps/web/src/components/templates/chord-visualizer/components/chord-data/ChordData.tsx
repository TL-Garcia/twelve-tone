// lib
import { Chord } from "chord-generator";

// styles
import "./index.css";
import { Component } from "solid-js";

export const ChordData: Component<{ chord: Chord }> = (props) => {

  return (
    <div class="chord-data">
      <div class="chord-data__name">{props.chord.symbol}</div>

      <div class="chord-data__notes">
        {props.chord.notes.map((note) => (
          <span>{note}</span>
        ))}
      </div>
    </div>
  );
};
