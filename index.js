const fs = require('fs');

// Function to read file and return an array of lines
function readFileLines(filePath) {
    return fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim());
}

// Function to write lines back to file
function writeFileLines(filePath, lines) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

// Function to remove duplicates between two arrays of lines
function removeDuplicates(file1Lines, file2Lines) {
    const uniqueFile1 = file1Lines.filter(line => !file2Lines.includes(line) && line !== '');
    const uniqueFile2 = file2Lines.filter(line => !file1Lines.includes(line) && line !== '');
    return { uniqueFile1, uniqueFile2 };
}

// Main function to process the files
function processFiles(file1Path, file2Path) {
    // Read both files
    const file1Lines = readFileLines(file1Path);
    const file2Lines = readFileLines(file2Path);
    
    // Remove duplicates
    const { uniqueFile1, uniqueFile2 } = removeDuplicates(file1Lines, file2Lines);
    
    // Write the unique lines back to the files
    writeFileLines(file1Path, uniqueFile1);
    writeFileLines(file2Path, uniqueFile2);
    
    console.log(`Duplicates removed. Updated files saved: ${file1Path}, ${file2Path}`);
}

// Replace with your actual file paths
const file1Path = './Followerss.txt';
const file2Path = './Followingss.txt';

processFiles(file1Path, file2Path);
