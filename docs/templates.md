# Templates Documentation 

## **Definition**  
**Templates** in Magic Loops come in two main forms: **Block Templates** and **Loop Templates**. They provide ready-to-use components that users can customize and deploy based on their automation needs.

---

## **Block Templates**  

Block Templates are pre-built, configurable blocks designed for specific tasks:

### **1. Loop Batch Runner** 
- Executes multiple Magic Loops in sequence
- Processes arrays of inputs efficiently
- Handles API responses and error management
- Perfect for bulk operations

### **2. QuickChartData Viz** 
- Visualizes data using QuickChart
- Supports multiple chart types
- Customizable styling and formatting
- Ideal for data reporting

### **3. Sheety (GET)** 
- Integrates with Google Sheets via Sheety
- Fetches spreadsheet data automatically
- Supports authentication
- Perfect for data management

---

## **Loop Templates**  

Loop Templates are complete workflow templates that combine multiple blocks:

### **Common Loop Templates** 
- **Daily Report Generator** → Automated reporting
- **Social Media Publisher** → Content scheduling
- **Data Scraper & Processor** → Web data extraction
- **API Monitor** → Service monitoring

---

## **Using Templates**

### **Block Template Usage**
```json
{
  "template": "QuickChartData Viz",
  "configuration": {
    "chartType": "bar",
    "data": {
      "labels": ["Q1", "Q2", "Q3", "Q4"],
      "datasets": [{
        "label": "Sales",
        "data": [100, 200, 150, 300]
      }]
    }
  }
}
```

### **Loop Template Usage**
```json
{
  "template": "Daily Report",
  "configuration": {
    "schedule": "09:00 AM",
    "dataSources": ["website", "api"],
    "recipients": ["team@example.com"]
  }
}
```

---

## **Best Practices**

✅ **Start with Templates** → Use them as building blocks
✅ **Customize Gradually** → Modify templates incrementally
✅ **Combine Templates** → Mix different templates for complex workflows
✅ **Share Templates** → Contribute to the community
✅ **Version Control** → Track template modifications
