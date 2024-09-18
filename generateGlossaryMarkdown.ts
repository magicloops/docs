// generateGlossaryMarkdown.ts

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Define the Term type
interface Term {
  term: string;
  nonTechnical: string;
  technical: string;
  videoURL?: string | null;
  exampleURL?: string | null;
}

// The glossary terms array (your object structure)
const terms: Term[] = [
  {
    term: 'Loops',
    nonTechnical: "Loops in Magic Loops are a set of instructions that run over and over again, automatically repeating a set of tasks until all requirements have been met.",
    technical: "Loops in Magic Loops are automated sequences that iterate over a set of instructions or tasks, allowing for repeated execution until a certain condition is met or the process is completed.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Runs',
    nonTechnical: "A run is each time your Magic Loop is executed.",
    technical: "Runs refer to the execution of a Magic Loop.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Blocks',
    nonTechnical: "Blocks are sub-tasks that are combined to create a Magic Loop. There are different types of blocks such as time blocks, web scraping blocks, code blocks, and many more.",
    technical: "Blocks are modular units of functionality in Magic Loops that perform specific tasks, such as handling data input/output, web scraping, or making API calls. These can be combined to create complex workflows.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Time Trigger',
    nonTechnical: "A Time Trigger lets you set a specific time or interval for your Magic Loop to execute, like every day at noon, on the last day of the month or every Monday and Wednesday.",
    technical: "A Time Trigger is a scheduling mechanism that initiates the execution of a loop or block at predefined intervals, based on time-based conditions.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Output Variable',
    nonTechnical: "An output variable is where the results from one task are stored so they can be used in the next task. In Magic Loops, place a dollar sign ($) before the variable name so the computer knows it is a variable, not plain text. An example is $TIME_BLOCK_OUTPUT.",
    technical: "An output variable stores the result of a block or loop execution, allowing for the transfer of data between blocks or for use in subsequent tasks within a workflow.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Authorization Token',
    nonTechnical: "An authorization token is like a password that proves you have permission to access certain information or services on a website or app.",
    technical: "An authorization token is a secure, encoded string generated by a server, used to authenticate a user’s identity and grant access to specific resources or actions. It typically contains user credentials, permissions, and an expiration time, and is passed with requests to validate access control in APIs or web services.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Fetch',
    nonTechnical: "Fetch is a way for a program to grab data or information from another place on the web.",
    technical: "Fetch is a method to make asynchronous requests to retrieve resources, typically through APIs, using HTTP methods like GET, POST, or PUT.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'JSON',
    nonTechnical: "JSON (JavaScript Object Notation) is a way to format data so that it can be easily sent and read by computers. It looks like text but is structured in a specific way that computers can understand.",
    technical: "JSON (JavaScript Object Notation) is a lightweight data-interchange format that uses human-readable text to represent structured data as key-value pairs. It is language-independent but primarily based on JavaScript syntax, making it easy to parse and generate in many programming languages.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Templates',
    nonTechnical: "Templates are pre-made loops that you can copy and customize to fit your needs. They were created by the Magic Loops team or other Magic Loops users.",
    technical: "Templates in Magic Loops are reusable code structures that encapsulate common workflows, allowing you to quickly customize and deploy them for specific tasks.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // Replace with actual video URL
    exampleURL: null, // Example URL can be added here
  },
  {
    term: 'Markdown',
    nonTechnical: "Markdown is a simple way to write text that can be easily turned into nicely formatted documents, like web pages or emails.",
    technical: "Markdown is a lightweight markup language that uses plain text formatting syntax to create structured documents, which can be easily converted to HTML or other formats.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Scrape',
    nonTechnical: "Web scraping is a way to automatically gather information from websites. It essentially scans the website for information that you want to get from it. After you get all the data you want, you can analyze it using another type of block from Magic Loops such as an LLM call.",
    technical: "Scraping is the process of extracting structured data from web pages by using automated scripts or tools that navigate through HTML elements and gather specified information.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'API Endpoint',
    nonTechnical: "An API endpoint is like a web address where a specific task or piece of information can be accessed by a program, enabling different apps or websites to work together by sharing data.",
    technical: "An API endpoint is a specific URL or URI within an API that represents a distinct function or resource, allowing clients to interact with the server by sending requests and receiving responses.",
    videoURL: "https://www.youtube.com/embed/exampleVideo1", // No video provided
    exampleURL: null,
  },
  {
    term: 'Dashboard',
    nonTechnical: "The Magic Loops dashboard presents you with different options for working with Magic Loops. There are the following sections: \n\n- New Manual Loop \n- Templates \n- My Loops \n- Runs \n- Blocks",
    technical: '',
    videoURL: "https://www.youtube.com/embed/exampleVideo1",
    exampleURL: null, // Example URL can be added here
  },
  {
    term: 'Manual Loop',
    nonTechnical: "Manual Loops are Magic Loops that you create by typing in a prompt. After you type in a prompt, generative AI first deduces what type of Blocks you will need to achieve the task you are trying to complete. It does this by creating an outline.",
    technical: 'A',
    videoURL: "https://www.youtube.com/embed/exampleVideo1",
    exampleURL: null, // Example URL can be added here
  }
];

  // Define the path to the docs and sidebars
const docsPath = join(process.cwd(), 'docs');
const sidebarsPath = join(process.cwd(), 'sidebars.ts');

// Function to generate markdown content with embedded video iframe
const generateMarkdownContent = ({ term, nonTechnical, technical, videoURL, exampleURL }: Term): string => {
  let markdownContent = `# ${term}

## Non-Technical Description
${nonTechnical}

## Technical Description
${technical}
`;

  if (videoURL) {
    markdownContent += `
## Video Example
<iframe width="560" height="315" src="${videoURL}" title="${term} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;
  }

  if (exampleURL) {
    markdownContent += `
## Example Link
[See Example](${exampleURL})
`;
  }

  return markdownContent;
};

// Function to create markdown files for each term
const generateGlossaryMarkdown = () => {
  // Ensure the docs directory exists
  if (!existsSync(docsPath)) {
    mkdirSync(docsPath);
  }

  // Generate a markdown file for each term in the glossary
  const sidebarItems: string[] = [];
  
  terms.forEach((termObj) => {
    const markdownContent = generateMarkdownContent(termObj);
    const fileName = `${termObj.term.toLowerCase().replace(/\s+/g, '-')}.md`;
    const filePath = join(docsPath, fileName);
    
    // Write the markdown content to a file
    writeFileSync(filePath, markdownContent, 'utf8');
    console.log(`Generated ${filePath}`);

    // Add the term to the sidebar items list
    sidebarItems.push(fileName.replace('.md', ''));
  });

  // Update the sidebars.ts file
  updateSidebars(sidebarItems);
};

// Function to update the sidebars.ts file
const updateSidebars = (items: string[]) => {
  const sidebarContent = `
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Glossary of Terms',
      items: [
        ${items.map(item => `'${item}'`).join(',\n        ')},  
      ],
    },
  ],
};

export default sidebars;
`;

  // Write the updated sidebar content to the sidebars.ts file
  writeFileSync(sidebarsPath, sidebarContent, 'utf8');
  console.log(`Updated ${sidebarsPath}`);
};

// Run the script
generateGlossaryMarkdown();