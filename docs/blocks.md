# Blocks Documentation

## **Definition**  
**Blocks** are the foundational components of Magic Loops. They act as tiny programs that can perform specific tasks like scraping websites, running code, calling LLMs, and more. They serve as the building blocks that enable creating more complex automations.

---

## **Component Hierarchy**

### **1. Blocks** 🧱
- Foundational components
- Perform specific tasks
- Function as AI-powered mini-programs or APIs

### **2. Loops** 🔄
- Use multiple Blocks
- Function as AI-powered functions or APIs
- Automate complete workflows

### **3. Apps** 📱
- Use multiple Loops with a UI
- Are essentially AI-generated Personal Software
- Provide complete solutions

---

## **Types of Blocks**

### **1. Default Blocks** ⚡
Pre-configured components for common tasks:
- **Time Block** → Task scheduling
- **SMS Block** → Text message sending
- **Email Block** → Email management
- **Hook Block** → Webhook handling
- **API Request Block** → API calls
- **Scrape Block** → Web data extraction
- **Code Block** → Custom code execution
- **LLM Block** → Language model interaction
- **Perplexity Block** → Search and analysis
- **Fetch Block** → Data retrieval
- **Exit If Block** → Conditional flow control
- **Diff Block** → Data comparison
- **Update Var Block** → Variable management
- **Email Block** → Email sending
- **SMS Block** → Messaging
- **Hook Notify Block** → Webhook notifications
- **API Response Block** → API responses

### **2. Custom Blocks** 🛠️
- User-created custom blocks
- Tailored to specific use cases
- Extend base functionality

### **3. Block Templates** 📋
Ready-to-use templates for common tasks:
- **Loop Batch Runner** → Batch execution
- **QuickChartData Viz** → Data visualization
- **Sheety (GET)** → Spreadsheet integration

---

## **Usage Example**

### **Scenario: Report Automation**
A flow combining multiple blocks:

```json
{
  "workflow_name": "Daily Report",
  "blocks": [
    {
      "type": "time",
      "schedule": "09:00 AM"
    },
    {
      "type": "scrape",
      "source": "https://data.example.com"
    },
    {
      "type": "llm",
      "action": "summarize"
    },
    {
      "type": "email",
      "recipient": "user@example.com",
      "subject": "Daily Report",
      "body": "$LLM_SUMMARY"
    }
  ]
}
```

---

## **Best Practices for Using Blocks**

✅ **Modularity** → Use specific blocks for each task
✅ **Reusability** → Leverage blocks across multiple flows
✅ **Customization** → Create custom blocks when needed
✅ **Templates** → Use templates to speed up development
✅ **Monitoring** → Track block performance