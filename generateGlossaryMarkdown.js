"use strict";
// generateGlossaryMarkdown.ts
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
// The glossary terms array
var terms = [
    {
        term: 'Loops',
        definition: "Loops in Magic Loops are a set of instructions that run over and over again, automatically repeating a set of tasks until all requirements have been met.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Runs',
        definition: "A run is each time your Magic Loop is executed.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Blocks',
        definition: "Blocks are sub-tasks that are combined to create a Magic Loop. There are different types of blocks such as time blocks, web scraping blocks, code blocks, and many more.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Time Trigger',
        definition: "A Time Trigger lets you set a specific time or interval for your Magic Loop to execute, like every day at noon, on the last day of the month or every Monday and Wednesday.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Output Variable',
        definition: "An output variable is where the results from one task are stored so they can be used in the next task. In Magic Loops, place a dollar sign ($) before the variable name so the computer knows it is a variable, not plain text. An example is $TIME_BLOCK_OUTPUT.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Authorization Token',
        definition: "An authorization token is like a password that proves you have permission to access certain information or services on a website or app.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Fetch',
        definition: "Fetch is a way for a program to grab data or information from another place on the web.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'JSON',
        definition: "JSON (JavaScript Object Notation) is a way to format data so that it can be easily sent and read by computers. It looks like text but is structured in a specific way that computers can understand.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Templates',
        definition: "Templates are pre-made loops that you can copy and customize to fit your needs. They were created by the Magic Loops team or other Magic Loops users.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // Replace with actual video URL
        exampleURL: null, // Example URL can be added here
    },
    {
        term: 'Markdown',
        definition: "Markdown is a simple way to write text that can be easily turned into nicely formatted documents, like web pages or emails.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Scrape',
        definition: "Web scraping is a way to automatically gather information from websites. It essentially scans the website for information that you want to get from it. After you get all the data you want, you can analyze it using another type of block from Magic Loops such as an LLM call.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'API Endpoint',
        definition: "An API endpoint is like a web address where a specific task or piece of information can be accessed by a program, enabling different apps or websites to work together by sharing data.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
        exampleURL: null,
    },
    {
        term: 'Dashboard',
        definition: "The Magic Loops dashboard presents you with different options for working with Magic Loops. There are the following sections: \n\n- New Manual Loop \n- Templates \n- My Loops \n- Runs \n- Blocks",
        videoURL: "https://www.youtube.com/embed/exampleVideo1",
        exampleURL: null, // Example URL can be added here
    },
    {
        term: 'Manual Loop',
        definition: "Manual Loops are Magic Loops that you create by typing in a prompt. After you type in a prompt, generative AI first deduces what type of Blocks you will need to achieve the task you are trying to complete. It does this by creating an outline.",
        videoURL: "https://www.youtube.com/embed/exampleVideo1",
        exampleURL: null, // Example URL can be added here
    }
];
// Define the path to the docs and sidebars
var docsPath = (0, path_1.join)(process.cwd(), 'docs');
var sidebarsPath = (0, path_1.join)(process.cwd(), 'sidebars.ts');
// Function to generate markdown content with embedded video iframe
var generateMarkdownContent = function (_a) {
    var term = _a.term, definition = _a.definition, videoURL = _a.videoURL, exampleURL = _a.exampleURL;
    var markdownContent = "# ".concat(term, "\n\n#### Definition\n").concat(definition, "\n");
    if (videoURL) {
        markdownContent += "\n#### Video Example\n<iframe width=\"560\" height=\"315\" src=\"".concat(videoURL, "\" title=\"").concat(term, " video\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n");
    }
    if (exampleURL) {
        markdownContent += "\n#### Example Link\n[See Example](".concat(exampleURL, ")\n");
    }
    return markdownContent;
};
// Function to create markdown files for each term
var generateGlossaryMarkdown = function () {
    // Ensure the docs directory exists
    if (!(0, fs_1.existsSync)(docsPath)) {
        (0, fs_1.mkdirSync)(docsPath);
    }
    // Generate a markdown file for each term in the glossary
    var sidebarItems = [];
    terms.forEach(function (termObj) {
        var markdownContent = generateMarkdownContent(termObj);
        var fileName = "".concat(termObj.term.toLowerCase().replace(/\s+/g, '-'), ".md");
        var filePath = (0, path_1.join)(docsPath, fileName);
        // Write the markdown content to a file
        (0, fs_1.writeFileSync)(filePath, markdownContent, 'utf8');
        console.log("Generated ".concat(filePath));
        // Add the term to the sidebar items list
        sidebarItems.push(fileName.replace('.md', ''));
    });
    // Update the sidebars.ts file
    updateSidebars(sidebarItems);
};
// Function to update the sidebars.ts file
var updateSidebars = function (items) {
    var sidebarContent = "\nconst sidebars = {\n  sidebar: [\n    {\n      type: 'category',\n      label: 'Glossary of Terms',\n      items: [\n        ".concat(items.map(function (item) { return "'".concat(item, "'"); }).join(',\n        '), ",  \n      ],\n    },\n  ],\n};\n\nexport default sidebars;\n");
    // Write the updated sidebar content to the sidebars.ts file
    (0, fs_1.writeFileSync)(sidebarsPath, sidebarContent, 'utf8');
    console.log("Updated ".concat(sidebarsPath));
};
// Run the script
generateGlossaryMarkdown();
