const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const docsDir = path.join(projectDir, 'docs');
const outputFile = path.join(docsDir, 'virtues_whole.md');
const dryRun = process.argv.includes('--dry-run');

// Configuration: Files to include in compilation (in sidebar order)
// Set a file to false to exclude it, or true to include it
// This list is auto-generated based on Docusaurus sidebar ordering
const filesToCompile = {
    // Main documentation (root level)
    'index.md': true,
    'virtues.md': true,
    'ineffable_goodness.md': true,
    'order.md': true,
    'economy.md': true,
    'charity.md': true,
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

    // Trinity documents
    '1trinity/index.md': true,
    '1trinity/beauty.md': true,
    '2trinity/index.md': true,
    '2trinity/love.md': true,
    '2trinity/continuity.md': true,

    '1concept.md': true,
    'concepts.md': true,
    'allah.md': false,
    'methodology.md': false,
    'bibliography.md': false,

    // Challenges subdirectory
    'challenges/by_AI.md': false,

    // Composed subdirectory
    'composed/index.md': false,

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
    const content = fs.readFileSync(filePath, 'utf8');

    // Remove YAML frontmatter only when it occurs at the start of the file.
    let cleaned = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
    // Navigation links are useful on individual pages but not in the compilation.
    cleaned = cleaned.replace(/^\s*\[back\]\([^)]*\)\s*$/gim, '');
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');

    return cleaned.trim();
}

function validateConfiguration() {
    const missingFiles = Object.entries(filesToCompile)
        .filter(([, shouldInclude]) => shouldInclude)
        .map(([relativePath]) => relativePath)
        .filter((relativePath) => !fs.existsSync(path.join(docsDir, relativePath)));

    if (missingFiles.length > 0) {
        const list = missingFiles.map((file) => `  - ${file}`).join('\n');
        throw new Error(`Configured source files are missing:\n${list}`);
    }
}

function buildVirtues() {
    validateConfiguration();

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

        const content = readMarkdownFile(filePath);

        if (content) {
            output += content + '\n\n';
            output += '---\n\n';
            compiledCount++;
        }
    }

    if (dryRun) {
        console.log('\nDry run successful; no files were written.');
    } else if (fs.existsSync(outputFile) && fs.readFileSync(outputFile, 'utf8') === output) {
        console.log(`\n${path.relative(projectDir, outputFile)} is already up to date.`);
    } else {
        fs.writeFileSync(outputFile, output);
        console.log(`\nBuilt ${path.relative(projectDir, outputFile)} successfully.`);
    }

    console.log(`Compiled: ${compiledCount} files`);
    console.log(`Skipped: ${skippedCount} files`);
    console.log(`Total in config: ${Object.keys(filesToCompile).length} files`);
}

buildVirtues();
