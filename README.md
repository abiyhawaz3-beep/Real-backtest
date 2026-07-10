# R-Race — Backtest Lab

Touch-only backtest journal. Compares three exit styles on every trade you log:
trailing stop (what actually happened), a fixed 3R exit, and holding to your full planned target.

## Deploy to GitHub Pages

1. Create a new repo (e.g. `r-race-backtest`) on GitHub.
2. Upload these 5 files to the repo root: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`.
3. Repo → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / `root` → Save.
4. Your app is live at `https://<your-username>.github.io/<repo-name>/`.
5. Open it on your phone → browser menu → **Add to Home Screen** for a full-screen app.

## How it works

- **Log tab**: pick date, direction, continuation/reversal, instrument, and tags — all tap, no typing.
  Then set the R outcome for all three exit methods using steppers or the quick preset chips.
- **Screenshots**: tap the dashed box and long-press → Paste (works on iOS/Android), or use the
  "Paste from clipboard" / "Choose photo" buttons. Images are compressed automatically so storage stays light.
- **Trades tab**: every trade shows a 3-bar "race" — the tallest bar is whichever exit method won that trade.
- **Stats tab**: totals for each method, plus a week-by-week and month-by-month breakdown with win rate.
- **Data**: everything is stored locally in the browser (no backend). Use the ⇩ / ⇧ icons at the top to
  export or import a JSON backup — do this occasionally so you don't lose data if you clear browser storage.

## Notes

- All data stays on-device (localStorage). Nothing is sent anywhere.
- If you ever want this synced across devices or pushed to Telegram like your live journal, that's a
  straightforward next step — just ask.
