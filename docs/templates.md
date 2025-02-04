# Templates Documentation 

## **Definition**  
**Templates** are **pre-built Magic Loops** that users can **copy, customize, and deploy** based on their automation needs. These templates are created by the **Magic Loops team** or other **Magic Loops users**, providing ready-to-use workflows for common automation tasks.  

---

## **How Templates Work**  

1. **Select a Template** → Choose a pre-made loop from the template library.  
2. **Customize Blocks** → Modify inputs, outputs, and logic to match your requirements.  
3. **Deploy the Loop** → Activate and monitor the loop execution.  

Templates **eliminate the need to build automation from scratch**, saving time while maintaining flexibility.  

---

## **Example Use Cases for Templates**  

### **1. Daily Email Summary Template** 📩  
- **Function:** Sends a daily email summary of trending news.  
- **Customization:** Change the news source, summary length, or email recipient.  

### **2. Social Media Auto-Poster Template** 📢  
- **Function:** Fetches content from an API and posts it to Twitter or Facebook.  
- **Customization:** Adjust posting frequency, hashtags, or content filters.  

### **3. Web Scraper & Data Formatter Template** 🌐  
- **Function:** Scrapes a website and structures the data in JSON format.  
- **Customization:** Change the target website, data fields, or output format.  

---

## **Example JSON Representation of a Template**  

```json
{
  "template_name": "Daily News Email",
  "description": "Sends a daily email summary of top news articles.",
  "blocks": [
    {
      "type": "time",
      "trigger": "07:00 AM",
      "output": "$TIME_TRIGGER"
    },
    {
      "type": "scrape",
      "source": "https://news.example.com",
      "output": "$NEWS_DATA"
    },
    {
      "type": "llm_call",
      "input": "$NEWS_DATA",
      "output": "$SUMMARY"
    },
    {
      "type": "email",
      "recipient": "user@example.com",
      "subject": "Daily News Update",
      "body": "$SUMMARY"
    }
  ]
}
```

---


## **Benefits of Using Templates**  

✅ **Time-Saving** → No need to build a loop from scratch.  
✅ **Customizable** → Modify pre-built templates to fit your needs.  
✅ **Reliable** → Created by experienced users and the Magic Loops team.  
✅ **Scalable** → Reuse templates across different automation workflows.  
