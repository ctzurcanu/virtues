const fs = require('fs');
const path = require('path');

const docsDir = './docs';
const outputFile = './docs/virtues_whole.md';

function readMarkdownFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Remove frontmatter (everything between --- lines at the start)
        let cleaned = content.replace(/^---[\s\S]*?---\n/, '');
        // Remove ./back links (lines containing only "./back" or variations)
        cleaned = cleaned.replace(/^\s*\.\/back\s*$/gm, '');
        // Remove empty lines that might be left after removing back links
        cleaned = cleaned.replace(/\n\n\n+/g, '\n\n');
        return cleaned;
    } catch (error) {
        console.warn(`Warning: Could not read ${filePath}`);
        return '';
    }
}

function buildVirtues() {
    const sections = [
        { title: 'Virtues', files: ['virtues.md'] },
        { title: 'Supreme Virtues', files: ['faith.md', 'charity.md', 'hope.md'] },
        { title: 'Cardinal Virtues', files: ['prudence.md', 'justice.md', 'temperance.md', 'fortitude.md'] },
        { title: 'Natural Virtues', files: ['measurability.md', 'abundance.md', 'survival.md'] },
        { title: 'Maybe Virtues', files: ['undefined.md', 'composed.md'] },
        { title: 'Principles and Relations', files: ['principles.md', 'hierarchies.md'] },
        { title: 'Scenarios', files: ['scenarios/index.md'] },
        { title: 'Concepts', files: ['3concepts.md', '1concept.md', 'concepts.md'] },
        { title: 'Names of God', files: ['allah.md'] },
        { title: 'Social Virtues', files: ['citizen.md', 'friendship.md', 'volunteer.md', 'hero.md', 'institution.md'] },
        { title: 'Other Systems', files: ['other.md'] }
    ];

    let output = '---\nunlisted: true\n---\n\n# On Virtues (Complete)\n\n';
    output += 'This document is excluded from Docusaurus navigation and contains the complete compilation of all virtue documentation.\n\n';

    sections.forEach(section => {
        output += `## ${section.title}\n\n`;
        
        section.files.forEach(file => {
            const filePath = path.join(docsDir, file);
            const content = readMarkdownFile(filePath);
            
            if (content.trim()) {
                output += content + '\n\n';
            }
        });
    });

    fs.writeFileSync(outputFile, output);
    console.log(`Built ${outputFile} successfully`);
}

buildVirtues();