# Loops Documentation

## **Definition**  
In **Magic Loops**, a **Loop** is a set of instructions that execute **repeatedly** until specific conditions or requirements are met. Loops allow users to automate repetitive tasks, making workflows more efficient and reducing manual effort.  

---

## **How Loops Work**  

1. **Trigger Activation** → A loop starts based on a defined event (e.g., time-based, API call, user action).  
2. **Task Execution** → The loop processes a series of steps using **blocks** (e.g., fetching data, running calculations, making API calls).  
3. **Condition Evaluation** → The loop checks if it should continue running (e.g., a counter limit or success condition).  
4. **Completion or Repetition** → The loop repeats until it fulfills its termination conditions.  

---

## **Example Use Case**  

### **Automated Data Processing Loop**
A loop that **scrapes website data every hour** and **stores it in a database**:

1. **Time Block** → Runs every hour.  
2. **Web Scraping Block** → Extracts new articles from a news website.  
3. **Data Processing Block** → Formats and cleans the extracted data.  
4. **API Call Block** → Sends the processed data to an external database.  
5. **Loop Check** → If an error occurs, retry the loop.  

---

## **Example JSON Representation of a Loop**  
```json
{
  "loop_name": "Hourly News Scraper",
  "trigger": "every_hour",
  "blocks": [
    {
      "type": "web_scraping",
      "source": "https://news.example.com"
    },
    {
      "type": "data_processing",
      "action": "clean_and_format"
    },
    {
      "type": "api_call",
      "endpoint": "https://api.database.com/store",
      "method": "POST",
      "data": {
        "category": "technology"
      }
    }
  ],
  "repeat_until": "success"
}
```

---

## **Types of Loops**  

🔹 **Time-Based Loops** → Run at scheduled intervals (e.g., every 5 minutes, daily at 8 AM).  
🔹 **Event-Triggered Loops** → Start based on user interaction, API calls, or system events.  
🔹 **Conditional Loops** → Continue running until a condition is met (e.g., a threshold is reached).  

---

## **Video Example** 🎥  
For a visual demonstration of **Loops in Magic Loops**, watch the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/exampleVideo1" title="Loops Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

---

## **Best Practices for Using Loops**  

✅ **Optimize execution frequency** → Avoid excessive looping to prevent performance issues.  
✅ **Use error handling** → Ensure proper retries and fail-safes for robustness.  
✅ **Monitor loop performance** → Regularly check logs and execution reports.  
✅ **Keep workflows modular** → Combine loops with different blocks for better organization.  
