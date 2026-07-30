const fs = require('fs');
const path = require('path');

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      search(fullPath);
    } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.js'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Notification') || content.includes('notification')) {
        console.log(`File: ${fullPath}`);
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          if (line.includes('notification') || line.includes('Notification') || line.includes('proposal') || line.includes('Proposal')) {
            if (line.trim().length > 0) {
              console.log(`  ${idx + 1}: ${line.trim()}`);
            }
          }
        });
      }
    }
  }
}

search('C:\\Users\\amministrazione\\Desktop\\Sonoqui\\backend\\src');
