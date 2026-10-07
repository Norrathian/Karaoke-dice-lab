# Karaoke Dice Lab

Build your own song hat, roll the dice, and let the spotlight pick your karaoke song.

## Use it

Open `index.html` in any modern browser — no build step, no server needed. All sound effects are synthesized inline with the Web Audio API.

## Features

- Type/paste songs or upload a playlist (TXT, CSV, M3U/M3U8, JSON)
- Spotlight sweep reveal with drumroll + fanfare (mutable)
- Singer rotation with "now singing" announcements
- Confetti, night stats, encore rounds, printable setlist
- No-repeat / allow-repeats modes, song-hat search, redraw without burning a pick

## Notes

- The page stores nothing in the browser: the list resets on reload. Persistence (saved loadouts, remembered lists) is on the roadmap.
- Each visitor to the hosted version gets their own private copy — one person's list never affects another's.
