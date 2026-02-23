// Detect how the package is being used:
// - npx sets npm_command to "exec" → let it through
// - npm install -g → global install is fine for CLI tools
// - npm install (local) → warn the user
const npmCommand = process.env.npm_command;
const isGlobal = process.env.npm_config_global === "true";

if (npmCommand === "install" && !isGlobal) {
  process.stderr.write(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠  This package is a CLI tool.

Do NOT install it using:

   npm install create-react-crt

Instead, run directly:

   npx create-react-crt my-app

Or install globally:

   npm install -g create-react-crt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\n`);
  process.exit(1);
}