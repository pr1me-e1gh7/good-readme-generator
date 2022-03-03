// Variables
const inquirer = require('inquirer');
const fs = require('fs')

// Generated Questions
inquirer.prompt(
    [
        // Readme File Title
        {
            type: "input",
            message: "What would you like to name your README file?",
            name: "entryFile",
            // Validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Project Description
        {
            type: "input",
            message: "Describe your project here:",
            name: "entryDescription",
            // Validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Installation Instructions
        {
            type: "input",
            message: "Add installation instructions here:",
            name: "entryInstall",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Usage Instructions
        {
            type: "input",
            message: "Add usage instructions here:",
            name: "entryUsage",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // License Used
        {
            type: "list",
            message: "What license did you use?",
            name: "entryLicense",
            choices:['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Contributions
        {
            type: "input",
            message: "Any contributions that you'd like to mention?",
            name: "entryContributions",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Tests
        {
            type: "input",
            message: "Enter info about tests you've run on the app here:",
            name: "entryTests",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Questions (Contact info)
        // Github info
        {
            type: "input",
            message: "Please enter your GitHub username:",
            name: "entryGithub",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // LinkedIn address
        {
            type: "input",
            message: "Please enter your LinkedIn /in/ address:",
            name: "entryLinkedIn",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        // Email info
        {
            type: "input",
            message: "Please enter your email address:",
            name: "entryEmail",
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        }
    ]
).then(({
    entryFile,
    entryDescription,
    entryInstall,
    entryUsage,
    entryLicense,
    entryContributions,
    entryTests,
    entryGithub,
    entryLinkedIn,
    entryEmail,
})=>{

// Generated README template
const genTemplate = `# ${entryFile}
${fetchLicense(entryLicense)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## 👨‍💻 Description
${entryDescription}

## 💾 Installation
${entryInstall}

## 💻 Usage
${entryUsage}

## 📃 License
${entryLicense} - Click the badge at the top for more info

## 💡 Contributions 
${entryContributions}

## 🧬 Tests
${entryTests}

## 🙋‍♂️ Questions
If you have an inquiries about my code, feel free to contact me at one of the following outlets:
* GitHub: https://www.github.com/${entryGithub}
* LinkedIn: https://www.linkedin.com/in/${entryLinkedIn}
* Email: ${entryEmail}`;

// Creates the README file
createFile(entryFile,genTemplate);
}
);
function createFile(fileName,data){
    // fs
    fs.writeFile(`./YourREADMEs/${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Got that README for ya boss, done lickety-split!");
})
}

// License Badges
fetchLicense = (entryLicense) => {
    let badge;

    switch (entryLicense) {
        case 'Apache License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GNU General Public License v3.0':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT License':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'BSD 2-Clause "Simplified" License':
            badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case 'Boost Software License 1.0':
            badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
            break;
        case 'Eclipse Public License 2.0':
            badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
        case 'GNU Affero General Public License v3.0':
            badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
            break;
        case 'GNU General Public License v2.0':
            badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            break;
        case 'GNU Lesser General Public License v3.0':
            badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
            break;
        case 'Mozilla Public License 2.0':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'The Unlicense':
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            break;
        case 'N/A':
            badge = '[![License: None](https://img.shields.io/badge/license-none-yellow.svg)](http://fakeurl.com/)';
            break;

        default:
            break;
    }

    return badge;
}