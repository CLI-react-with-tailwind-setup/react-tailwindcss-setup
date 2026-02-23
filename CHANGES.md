# All Changes Made to `bin/vk-init`

| # | Change | Before | After | Why |
|---|--------|--------|-------|-----|
| 1 | **`--overwrite` flag** | `create-vite` sirf `--no-interactive` se run hota tha | `.` (current directory) ke liye `--overwrite` flag add kiya | Non-empty directory mein Vite silently cancel ho jaata tha |
| 2 | **`package.json` check** | Koi check nahi tha scaffold ke baad | `fs.existsSync("package.json")` check add kiya after Vite runs | Agar scaffold nahi hua toh blindly `npm install` se confusing errors aate the |
| 3 | **`--no-audit --no-fund`** | `npm install` bina flags ke | Dono install commands mein `--no-audit` aur `--no-fund` add kiya | "high severity vulnerabilities" aur "looking for funding" warnings hide karne ke liye |
| 4 | **Framework selection** | Hardcoded `--template react` | Arrow-key interactive `select()` function — 7 frameworks (React, Vue, Svelte, Preact, Solid, Vanilla, Lit) | User ko framework choose karne ka option |
| 5 | **Variant selection** | Koi option nahi tha | Arrow-key selection for variants (JS, TS, JS+SWC, TS+SWC) mapped to correct Vite templates | User ko language/variant choose karne ka option |
| 6 | **`configureVite()` rewrite** | Pura `vite.config.js` overwrite karta tha hardcoded React config se | Ab existing config read karta hai aur tailwind import + plugin inject karta hai | Kisi bhi framework ke config mein tailwind inject ho jaata hai |
| 7 | **`configureCSS()` framework-aware** | Hardcoded `src/index.css` | Framework ke hisaab se sahi CSS file target karta hai (Vue→`src/style.css`, Svelte→`src/app.css`, etc.) | Different frameworks different CSS file paths use karte hain |
| 8 | **Spinner messages dynamic** | `"Creating Vite React App..."` hardcoded | `"Creating Vite ${framework.name} App..."` dynamic | Selected framework ka naam dikhta hai |
| 9 | **Windows `spawn EINVAL` fix** | `spawn("npx.cmd", ...)` with no shell | `spawn("npx", ..., { shell: true })` on Windows, `.cmd` suffix removed | Windows PowerShell mein `EINVAL` error aata tha |
| 10 | **`error` event handler** | `child.on("error")` handle nahi hota tha | `child.on("error", ...)` add kiya with proper rejection | Spawn errors cleanly catch hote hain |

## Files Changed

Only **`bin/vk-init`** was modified. No other files were changed.
