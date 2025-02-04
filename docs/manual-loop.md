# Manual Loop Documentation

## **Definition**  
A **Manual Loop** in **Magic Loops** is a custom automation workflow created by typing a **natural language prompt**. After entering a prompt, **generative AI** analyzes the request and determines the necessary **blocks** to accomplish the task. This AI-driven process **automatically generates an outline** for the loop structure.

---

## **How Manual Loops Work**  

1. **User Input** → The user types a prompt describing the desired automation (e.g., "Send me a daily email summary of trending tech news.").  
2. **AI Interpretation** → The system analyzes the request and determines the required **blocks** (e.g., a time block, web scraping block, and email block).  
3. **Loop Outline Creation** → The AI generates an initial workflow, organizing the blocks in a logical sequence.  
4. **User Customization** → The user can modify the suggested blocks, fine-tune parameters, or add additional components.  
5. **Execution & Monitoring** → The loop is activated and runs according to the defined structure.  

---

## **Example of Creating a Manual Loop**  

### **Prompt:**  
*"Fetch the latest stock prices for Apple and Tesla every morning at 9 AM and send them to my email."*  

### **Generated Loop Structure:**  

1. **Time Block** → Triggers at **9:00 AM daily**.  
2. **API Call Block** → Fetches stock prices from a finance API.  
3. **Data Processing Block** → Extracts and formats the relevant stock information.  
4. **Email Block** → Sends the stock update to the user’s email.  

---

## **Example JSON Representation of a Manual Loop**  
```json
{
  "loop_name": "Daily Stock Update",
  "trigger": "09:00 AM",
  "blocks": [
    {
      "type": "api_call",
      "endpoint": "https://api.finance.com/stocks",
      "method": "GET",
      "params": {
        "symbols": ["AAPL", "TSLA"]
      }
    },
    {
      "type": "data_processing",
      "action": "extract_prices"
    },
    {
      "type": "email",
      "recipient": "user@example.com",
      "subject": "Daily Stock Prices",
      "body": "Here are the latest stock prices for AAPL and TSLA."
    }
  ]
}
```

---

## **Use Cases for Manual Loops**  

🔹 **Automated Reports** → Fetch and summarize data at scheduled times.  
🔹 **Web Scraping & Notifications** → Extract articles and send them via email or chat.  
🔹 **Custom API Workflows** → Connect external APIs to process and deliver data automatically.  
🔹 **Task Automation** → Set up repetitive workflows using simple prompts.  

---

## **Video Example** 🎥  
For a visual demonstration of **Manual Loops in Magic Loops**, watch the following video:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/exampleVideo1" title="Manual Loop Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

---

## **Best Practices for Using Manual Loops**  

✅ **Be Specific in Prompts** → The clearer your request, the more accurate the loop structure will be.  
✅ **Review AI-Generated Blocks** → Ensure the suggested blocks match your desired workflow.  
✅ **Optimize Execution Time** → Schedule loops efficiently to avoid redundant processing.  
✅ **Monitor Performance** → Track logs and adjust configurations as needed.  
