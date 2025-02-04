# Blocks Documentation

## **Definition**  
**Blocks** are modular sub-tasks that work together to form a **Magic Loop**. Each block performs a specific function, enabling users to create automated workflows by combining different types of tasks efficiently. These blocks are the **building blocks** of automation within Magic Loops.

---

## **Types of Blocks**  
Magic Loops supports various block types, each designed for different automation purposes:

### **1. Time Blocks** ⏳  
   - Schedule tasks to run at specific intervals or at a predefined time.  
   - Example: A task that triggers **daily at 8:00 AM** to fetch and process data.  

### **2. Web Scraping Blocks** 🌐  
   - Extract real-time data from websites dynamically.  
   - Example: Scraping the latest **tech news articles** from a blog.  

### **3. Code Blocks** 💻  
   - Execute **custom scripts** in Python, JavaScript, or other supported languages.  
   - Example: Running a **Python script** to clean and structure scraped data.  

### **4. API Call Blocks** 🔗  
   - Send HTTP requests and retrieve data from external APIs.  
   - Example: Fetching real-time **weather data** from an API.  

### **5. Data Processing Blocks** 📊  
   - Manipulate, format, and transform data for further processing.  
   - Example: Converting **CSV data** into structured JSON format.  

### **6. Logic Blocks** 🔄  
   - Implement **conditional statements (IF/ELSE)** to control workflow execution.  
   - Example: If **temperature > 30°C**, send a notification; otherwise, log the data.  

---

## **Example Workflow**  

In **Magic Loops**, users can configure blocks by defining input variables and connecting different block types.

Example: **Automating a Daily News Summary**
1. **Time Block** → Runs every morning at 7:00 AM.  
2. **Web Scraping Block** → Extracts news articles from predefined sources.  
3. **Data Processing Block** → Summarizes the extracted content.  
4. **API Call Block** → Sends the summary to a messaging platform (e.g., Slack, Email).  

### **Example JSON Representation of a Workflow**
```json
{
  "workflow_name": "Daily News Summary",
  "blocks": [
    {
      "type": "time",
      "schedule": "07:00 AM"
    },
    {
      "type": "web_scraping",
      "source": "https://news.example.com"
    },
    {
      "type": "data_processing",
      "action": "summarize"
    },
    {
      "type": "api_call",
      "endpoint": "https://api.messaging.com/send",
      "method": "POST",
      "data": {
        "message": "Here is your daily news summary!"
      }
    }
  ]
}
```

---

## **Best Practices for Using Blocks**  

✅ **Keep workflows modular** → Use separate blocks for distinct tasks.  
✅ **Optimize execution order** → Ensure dependencies are processed logically.  
✅ **Use Logic Blocks efficiently** → Prevent unnecessary executions with IF/ELSE conditions.  
✅ **Monitor and Debug** → Regularly test blocks to ensure smooth automation.  