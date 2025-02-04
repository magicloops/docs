# Runs Documentation

## **Definition**  
A **Run** occurs each time a **Magic Loop** is executed. It represents a single instance of the workflow being triggered, processed, and completed. Runs provide **logs, results, and error tracking**, allowing users to monitor the performance and efficiency of their loops.  

---

## **How Runs Work**  

1. **Loop is Triggered** → A run starts when a loop is activated (e.g., scheduled, manually started, or triggered by an event).  
2. **Blocks Execute Sequentially** → The loop processes tasks in the defined order.  
3. **Data is Passed Between Blocks** → Output variables store and transfer data between steps.  
4. **Completion & Logging** → The run completes successfully or logs errors if an issue occurs.  

Each run generates a **log entry** that contains execution details, including:  
- **Timestamp** → When the run started and ended.  
- **Status** → Success, failure, or in-progress.  
- **Block Execution Details** → Information on which blocks ran and their outputs.  
- **Errors (if any)** → Debugging information for failed runs.  

---

## **Example Use Case**  

### **Automated Report Generation**  
A loop that **runs every Monday at 9 AM** to generate and send a weekly report.  

#### **Run Process**  
1. **Time Block** → Triggers the loop at 9:00 AM.  
2. **API Call Block** → Fetches report data from an external API.  
3. **Data Processing Block** → Formats and structures the data.  
4. **Email Block** → Sends the final report to a recipient.  

#### **Example Run Log**  
```json
{
  "run_id": "12345",
  "loop_name": "Weekly Report",
  "timestamp": "2024-02-01T09:00:00Z",
  "status": "Success",
  "executed_blocks": [
    {
      "block": "Time Block",
      "output": "$TIME_BLOCK_OUTPUT = '09:00 AM'"
    },
    {
      "block": "API Call Block",
      "output": "$API_DATA = {'total_sales': 1500, 'new_users': 35}"
    },
    {
      "block": "Data Processing Block",
      "output": "$FORMATTED_REPORT = 'Weekly Report: 1500 Sales, 35 New Users'"
    },
    {
      "block": "Email Block",
      "output": "Email sent to admin@example.com"
    }
  ]
}
```

---

## **Monitoring Runs in Magic Loops**  

Users can view **run logs** in the **Magic Loops Dashboard**, which displays:  
🔹 **Run History** – List of previous executions.  
🔹 **Execution Status** – Success, failure, or pending status for each run.  
🔹 **Block-Level Execution Details** – Insights into individual block outputs.  
🔹 **Error Tracking** – Logs for debugging failed runs.  

---

## **Video Example** 🎥  
For a visual explanation of **Runs in Magic Loops**, watch the following video:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/exampleVideo1" title="Runs Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

---

## **Best Practices for Managing Runs**  

✅ **Monitor Run Logs Regularly** → Track performance and identify potential issues.  
✅ **Use Error Handling** → Implement retry mechanisms for failed runs.  
✅ **Optimize Execution Frequency** → Avoid unnecessary runs to save resources.  
✅ **Test Before Deployment** → Run test loops to ensure proper functionality.  