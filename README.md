# Karaoke Dice Lab

Build your own song hat, roll the dice, and let the spotlight pick your karaoke song.

## Use it

Open `index.html` in any modern browser — no build step, no server needed. All sound effects are synthesized inline with the Web Audio API. You can also host it with GitHub Pages (Settings → Pages → Deploy from branch).

## Features

- Type/paste songs or upload a playlist (TXT, CSV, M3U/M3U8, JSON)
- Spotlight sweep reveal with drumroll + fanfare (mutable)
- Singer rotation with "now singing" announcements
- Confetti, night stats, encore rounds, printable setlist
- No-repeat / allow-repeats modes, song-hat search, redraw without burning a pick
- **Saved lists**: name and keep multiple song hats (loadouts) in the browser, load or delete them anytime
- **Auto-remember**: your current list, singers, and settings are restored automatically on your next visit (per device/browser)
- **Share links**: copy a link with your list encoded in it — anyone opening it gets your songs and singers
- **File save/load**: download your list as JSON and load it back later

## Notes

- Browser storage is per device and per browser: lists saved on your phone won't appear on your laptop.
- Each visitor to a hosted copy gets their own private view — one person's list never affects another's.
