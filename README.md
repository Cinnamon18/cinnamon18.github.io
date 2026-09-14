# cinnamon18.github.io — redirect notice

This used to be my portfolio. It lives at <https://imcinna.com> now, served by UnifiedWebServer, and
this repo is just a notice that sends visitors there after 8 seconds.

## Files

| File          | What it is                                                                     |
| ------------- | ------------------------------------------------------------------------------ |
| `index.html`  | The notice, for `/`.                                                           |
| `404.html`    | The same notice. GitHub Pages serves it for every path that doesn't exist, which is every old link. |
| `redirect.js` | Works out where to send the visitor and runs the countdown.                    |
| `favicon.png` | Carried over from the old site.                                                |

Old links to the resume PDF and to project pages that still exist go to the matching page under
`imcinna.com/about/`. Everything else goes to `imcinna.com`. The list is `MOVED_PAGES` in
`redirect.js`.

## Run it locally

There's no build step. `404.html` only kicks in behind a server that knows about it, so use `serve`
rather than opening the file directly:

```bash
npx serve -l 4173
```

Then try `http://localhost:4173/`, `/MohAliceResume.pdf`, `/peridotDetails.html`, and
`/lunaciaDetails.html` (cut from the new site, so it goes to the front door).

## Deploy

```bash
git push origin master
```

## Changing where it points

`NEW_SITE` in `redirect.js`, plus the canonical link, meta refresh and fallback link in both HTML
files. Grep for `imcinna` to be sure.
