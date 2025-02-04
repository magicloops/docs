# Time Trigger Documentation

## **Definition**  
A **Time Trigger** is a scheduling mechanism that allows users to set a specific **time** or **interval** for a **Magic Loop** to execute. With a Time Trigger, you can automate tasks to run:  
- **At a fixed time** (e.g., every day at noon).  
- **On specific days** (e.g., every Monday and Wednesday).  
- **On special dates** (e.g., the last day of the month).  

---

## **How Time Triggers Work**  

1. **User Defines a Schedule** → Specify the exact time, day, or interval for execution.  
2. **Trigger Activates the Loop** → At the scheduled time, the Time Trigger starts the loop.  
3. **Tasks Execute in Sequence** → The loop processes all associated blocks in order.  

### **Common Time-Based Triggers**  
✅ **Daily Execution** → Run the loop every day at a set time.  
✅ **Weekly Execution** → Run the loop on selected weekdays.  
✅ **Monthly Execution** → Run on the first, last, or any specific day of the month.  
✅ **Interval Execution** → Run the loop every X minutes, hours, or days.  

---

## **Example Use Case**  

### **Scenario: Automated Meeting Reminder**  
A **Time Trigger** is set to run **every Monday at 8:00 AM** to send a meeting reminder via email.  

#### **Loop Process**  
1. **Time Block** → Triggers the loop at 8:00 AM every Monday.  
2. **Data Processing Block** → Formats the meeting details.  
3. **Email Block** → Sends the reminder to team members.  

#### **Example JSON Representation**  
```json
{
  "loop_name": "Weekly Meeting Reminder",
  "trigger": {
    "type": "time",
    "schedule": "Every Monday at 08:00 AM"
  },
  "blocks": [
    {
      "type": "data_processing",
      "output": "$MEETING_DETAILS"
    },
    {
      "type": "email",
      "recipient": "team@example.com",
      "subject": "Monday Meeting Reminder",
      "body": "Reminder: Our weekly meeting is scheduled for 9:00 AM."
    }
  ]
}
```

---

## **Video Example** 🎥  
For a visual guide on **Time Triggers in Magic Loops**, watch the following video:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/exampleVideo1" title="Time Trigger Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

---

## **Best Practices for Using Time Triggers**  

✅ **Choose the Right Frequency** → Avoid unnecessary executions by selecting the correct interval.  
✅ **Monitor Run History** → Track past executions to verify correct timing.  
✅ **Use Time Zone Settings** → Ensure that scheduled triggers align with the correct time zone.  
✅ **Combine with Other Blocks** → Enhance automation by pairing Time Triggers with Scrape, API Calls, or Email blocks.  
