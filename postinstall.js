process.stderr.write(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠  This package is a CLI tool.

Do NOT install it using:

   npm install create-react-crt

Instead, run directly:

   npx create-react-crt my-app

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\n`);

process.exit(1);