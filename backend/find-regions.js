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
      if (content.includes('REGIONS_AND_PROVINCES') || content.includes('Basilicata') || content.includes('Potenza')) {
        console.log(`Found in file: ${fullPath}`);
      }
    }
  }
}

search('C:\\Users\\amministrazione\\Desktop\\Sonoqui\\backend');
