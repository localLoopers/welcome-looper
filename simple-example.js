/**
 * Simple Looper Example
 * 
 * This is a basic example of browser automation using Puppeteer.
 * It demonstrates how to launch a browser, navigate to websites,
 * interact with page elements, and extract data.
 */

const puppeteer = require('puppeteer');

/**
 * Main function that runs a simple automation workflow
 */
async function runSimpleExample() {
  console.log('🚀 Starting simple browser automation example');
  
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false, // Set to true for invisible automation
    defaultViewport: null, // Use default viewport size
    args: ['--start-maximized'] // Start with maximized window
  });
  
  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Enable console logging from the browser
    page.on('console', message => console.log(`Browser console: ${message.text()}`));
    
    // Step 1: Visit a website
    console.log('Visiting a website...');
    await page.goto('https://example.com');
    console.log('✅ Website loaded successfully');
    
    // Step 2: Take a screenshot
    console.log('Taking a screenshot...');
    await page.screenshot({ path: 'example-site.png' });
    console.log('✅ Screenshot saved as example-site.png');
    
    // Step 3: Extract text content
    const pageTitle = await page.title();
    const headingText = await page.evaluate(() => {
      return document.querySelector('h1').innerText;
    });
    const paragraphText = await page.evaluate(() => {
      return document.querySelector('p').innerText;
    });
    
    console.log('📄 Extracted content:');
    console.log(`Page title: ${pageTitle}`);
    console.log(`Main heading: ${headingText}`);
    console.log(`Paragraph: ${paragraphText}`);
    
    // Step 4: Search for something on DuckDuckGo
    console.log('Navigating to DuckDuckGo...');
    await page.goto('https://duckduckgo.com/');
    
    // Type a search query
    console.log('Searching for "browser automation javascript"...');
    await page.type('#searchbox_input', 'browser automation javascript');
    
    // Press Enter to submit the search
    await Promise.all([
      page.waitForNavigation(),
      page.keyboard.press('Enter')
    ]);
    console.log('✅ Search results loaded');
    
    // Take a screenshot of the search results
    await page.screenshot({ path: 'search-results.png' });
    console.log('✅ Search results screenshot saved');
    
    // Step 5: Extract search result titles
    const searchResults = await page.evaluate(() => {
      const results = Array.from(document.querySelectorAll('.nrn-react-div'));
      return results.slice(0, 5).map(result => {
        const titleElement = result.querySelector('h2');
        return titleElement ? titleElement.innerText : 'No title found';
      });
    });
    
    console.log('📄 Top 5 search results:');
    searchResults.forEach((title, index) => {
      console.log(`${index + 1}. ${title}`);
    });
    
  } catch (error) {
    console.error('❌ An error occurred:', error);
  } finally {
    // Always close the browser when done
    await browser.close();
    console.log('🏁 Browser closed. Automation complete!');
  }
}

// Run the example
runSimpleExample().catch(console.error);