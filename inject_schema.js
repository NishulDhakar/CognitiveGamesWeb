const fs = require('fs');
const path = require('path');

const games = [
    { dir: 'Switchchallenge', title: 'Switch Challenge Game', rating: '4.9', count: '1250' },
    { dir: 'Gridchallenge', title: 'Grid Challenge Game', rating: '4.8', count: '942' },
    { dir: 'Inductivechallenge', title: 'Inductive Logic Game', rating: '4.7', count: '831' },
    { dir: 'Motionchallenge', title: 'Motion Challenge Game', rating: '4.8', count: '654' },
    { dir: 'Deductivechallenge', title: 'Deductive Reasoning Game', rating: '4.9', count: '1105' },
    { dir: 'Digitchallenge', title: 'Digit Memory Game', rating: '4.7', count: '782' },
];

const basePath = path.join(__dirname, 'src/app/play');

games.forEach(game => {
    const filePath = path.join(basePath, game.dir, 'page.tsx');
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('application/ld+json')) {
        console.log(`Schema already injected in ${game.dir}`);
        return;
    }

    const schemaStr = `  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "${game.title}",
    "operatingSystem": "Web",
    "applicationCategory": "EducationalApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "${game.rating}",
      "ratingCount": "${game.count}"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (`;

    // We find the LAST "return (" in case there are early returns inside useEffect
    const lastReturnIndex = content.lastIndexOf('return (');
    if (lastReturnIndex !== -1) {
        // Find the tag right after return (
        // e.g., "return (\n    <Container>"
        const afterReturn = content.slice(lastReturnIndex + 'return ('.length);
        const match = afterReturn.match(/^\s*<([a-zA-Z0-9_]+)/);

        if (match) {
            const wrapperTag = match[1];
            // Split content at the last return
            const beforeReturn = content.slice(0, lastReturnIndex);

            // Rebuild content
            const newContent = beforeReturn + schemaStr + afterReturn.replace(
                new RegExp(`^\\s*<${wrapperTag}[^>]*>`),
                (matchedTag) => `${matchedTag}\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`
            );
            fs.writeFileSync(filePath, newContent);
            console.log(`Injected schema to ${game.dir}`);
        } else {
            console.log(`Wrapper tag not found in ${game.dir}`);
        }
    } else {
        console.log(`Return statement not found in ${game.dir}`);
    }
});
