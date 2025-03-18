# Welcome to Looper! 👋

This repository contains tools and examples for browser automation and web interaction using JavaScript.

## Getting Started

Looper makes it easy to automate browser tasks, scrape data, and test web applications. Here's how to get started:

### Prerequisites

- Node.js (version 12 or higher)
- A modern web browser (Chrome recommended)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/localLoopers/welcome-looper.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Make sure port 3025 is available for the browser tools server

### Your First Automation

```javascript
// Simple example to get you started
const puppeteer = require('puppeteer');

async function firstAutomation() {
  // Launch a browser
  const browser = await puppeteer.launch({
    headless: false
  });
  
  // Open a new page
  const page = await browser.newPage();
  
  // Visit a website
  await page.goto('https://example.com');
  
  // Take a screenshot
  await page.screenshot({ path: 'my-first-automation.png' });
  
  // Close the browser
  await browser.close();
  
  console.log('Automation complete!');
}

firstAutomation().catch(console.error);
```

## Key Features

- **Browser Control**: Open, navigate, and interact with web pages
- **Form Automation**: Fill out forms and submit data automatically
- **Data Extraction**: Extract text, images, and other content from websites
- **Testing**: Create automated tests for your web applications
- **Scheduling**: Run automations on a schedule

## Configuration

This project uses Model Control Protocol (MCP) servers to enable various functionalities. You can find configuration templates in the `mcp.json.template` file.

## Need Help?

- Check out the documentation in the main README file
- Explore the example scripts
- Join our community forum

## Happy Looping!

We're excited to see what you automate with Looper. Share your projects and feedback with the community!