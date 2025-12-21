const fs = require('fs');
const path = require('path');

const docsDir = './docs';
const outputFile = './docs/virtues_whole.md';

// Configuration: Files to include in compilation (in sidebar order)
// Set a file to false to exclude it, or true to include it
// This list is auto-generated based on Docusaurus sidebar ordering
const filesToCompile = {
    // Main documentation (root level)
    'index.md': true,
    'virtues.md': true,
    'miracle.md': true,
    'order.md': true,
    'economy.md': true,
    'charity.md': true,
    'arete.md': true,
    'goodness.md': true,
    'hope.md': true,
    'harmony.md': true,
    'prudence.md': true,
    'forgiveness.md': true,
    'justice.md': true,
    'governance.md': true,
    'temperance.md': true,
    'fairness.md': true,
    'fortitude.md': true,
    'competition.md': true,
    'measurability.md': true,
    'market.md': true,
    'abundance.md': true,
    'industriousness.md': true,
    'survival.md': true,
    'undefined.md': false,
    'principles.md': false,
    'hierarchies.md': true,
    '3concepts.md': true,
    '1concept.md': true,
    'concepts.md': true,
    'allah.md': false,
    'methodology.md': false,
    'bibliography.md': false,

    // Challenges subdirectory
    'challenges/by_AI.md': false,

    // Composed subdirectory
    'composed/index.md': false,
    'composed/beauty.md': true,

    // Computable subdirectory
    'computable/categories.md': true,
    'computable/governance.md': true,
    'computable/index.md': true,
    'computable/others_coverage.md': true,
    'computable/representation.md': true,
    'computable/verbs.md': true,

    // Institutions subdirectory
    'institutions/citizen.md': false,
    'institutions/friendship.md': false,
    'institutions/volunteer.md': false,
    'institutions/hero.md': false,
    'institutions/index.md': false,
    'institutions/public.md': false,
    'institutions/charities.md': true,
    'institutions/relationship.md': true,

    // Reason subdirectory
    'reason/logos.md': true,
    'reason/index.md': true,
    'reason/knowledge.md': true,

    // Scenarios subdirectory
    'scenarios/index.md': false,
    'scenarios/miracle.md': false,
    'scenarios/narratives.md': false,

    // Systems subdirectory
    'systems/maslow.md': true,
    'systems/resilience.md': true,
    'systems/development.md': true,
    'systems/via.md': true,
    'systems/index.md': true,
};

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

function getSidebarPosition(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(/^sidebar_position:\s*(\d+)/m);
        return match ? parseInt(match[1]) : null;
    } catch (error) {
        return null;
    }
}

function getAllMarkdownFiles(dir, baseDir = dir) {
    let results = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            results = results.concat(getAllMarkdownFiles(fullPath, baseDir));
        } else if (file.endsWith('.md') && file !== 'virtues_whole.md') {
            const relativePath = path.relative(baseDir, fullPath);
            const position = getSidebarPosition(fullPath);
            results.push({
                path: relativePath,
                fullPath: fullPath,
                position: position,
                dir: path.relative(baseDir, dir),
                filename: file
            });
        }
    }

    return results;
}

function buildVirtues() {
    let output = '---\nunlisted: true\n---\n\n# On Virtues (Complete)\n\n';
    output += 'This document contains the complete compilation of all virtue documentation in the order they appear in the Docusaurus sidebar.\n\n';
    output += '---\n\n';

    let compiledCount = 0;
    let skippedCount = 0;

    // Iterate through the files in the order defined in filesToCompile
    for (const [relativePath, shouldInclude] of Object.entries(filesToCompile)) {
        if (!shouldInclude) {
            skippedCount++;
            console.log(`Skipping: ${relativePath}`);
            continue;
        }

        const filePath = path.join(docsDir, relativePath);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.warn(`Warning: File not found: ${relativePath}`);
            continue;
        }

        const content = readMarkdownFile(filePath);

        if (content.trim()) {
            output += content + '\n\n';
            output += '---\n\n';
            compiledCount++;
        }
    }

    fs.writeFileSync(outputFile, output);
    console.log(`\nBuilt ${outputFile} successfully`);
    console.log(`Compiled: ${compiledCount} files`);
    console.log(`Skipped: ${skippedCount} files`);
    console.log(`Total in config: ${Object.keys(filesToCompile).length} files`);
}

buildVirtues();