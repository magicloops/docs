# Scrape Documentation

## **Definition**  
**Web scraping** is an automated method for extracting data from websites. It works by scanning web pages and retrieving specific information, which can then be processed and analyzed using other **Magic Loops blocks**, such as an **LLM Call** or **Data Processing Block**.  

---

## **How Web Scraping Works in Magic Loops**  

1. **Define the Target Website** → Specify the URL and elements to extract (e.g., text, images, tables).  
2. **Extract Data** → The Scrape Block scans the webpage and retrieves the relevant content.  
3. **Store Output in a Variable** → The extracted data is saved in an output variable for further processing.  
4. **Analyze or Use Data in Other Blocks** → Pass the extracted information to an LLM call, API call, or data processing block.  

---

## **Example Use Case**  

### **Scenario: Scraping News Headlines**  
A Magic Loop that **scrapes news articles every morning at 8:00 AM** and summarizes them using an LLM.  

#### **Loop Process**  
1. **Time Block** → Runs every morning at 8:00 AM.  
2. **Scrape Block** → Extracts the latest tech news headlines from a website.  
3. **LLM Call Block** → Summarizes the key points.  
4. **Email Block** → Sends the summary to a user's inbox.  

#### **Example JSON Representation**  
```json
{
  "loop_name": "Daily Tech News Scraper",
  "trigger": "08:00 AM",
  "blocks": [
    {
      "type": "scrape",
      "source": "https://technews.example.com",
      "output": "$SCRAPED_NEWS"
    },
    {
      "type": "llm_call",
      "input": "$SCRAPED_NEWS",
      "output": "$NEWS_SUMMARY"
    },
    {
      "type": "email",
      "recipient": "user@example.com",
      "subject": "Daily Tech News Summary",
      "body": "$NEWS_SUMMARY"
    }
  ]
}
```

---

## **Scrape Block Output Example**  

**Scraped Data:**  
```plaintext
1. AI Breakthrough Improves Natural Language Processing  
2. New VR Headset Announced with Advanced Features  
3. Cybersecurity Experts Warn About Rising Threats  
```

**Processed Data (After LLM Call):**  
```plaintext
Today's tech news: AI technology is advancing, a new VR headset has been unveiled, and cybersecurity threats are increasing.  
```

---

## **Video Example** 🎥  
For a visual guide on **Web Scraping in Magic Loops**, watch the following video:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/exampleVideo1" title="Scrape Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

---

## **Best Practices for Web Scraping**  

✅ **Respect Website Policies** → Follow terms of service and use APIs if available.  
✅ **Use Delay Between Requests** → Prevent excessive load on target websites.  
✅ **Extract Only Relevant Data** → Avoid gathering unnecessary information to improve performance.  
✅ **Store and Process Efficiently** → Clean and format scraped data before using it.  
