# Output Variable Documentation

## **Definition**  
An **output variable** stores the results of a task so they can be used in subsequent tasks within a **Magic Loop**. In **Magic Loops**, output variables are identified using a **dollar sign (`$`)** before the variable name, ensuring the system recognizes it as a dynamic value rather than plain text.  

---

## **How Output Variables Work**  

1. **Task Execution** → A block performs an operation (e.g., fetching data, processing information).  
2. **Result Storage** → The output is stored in a variable.  
3. **Variable Reference** → The output variable is used in the next block to pass the data forward.  

For example, if a **Time Block** runs at **8:00 AM**, its output might be stored as:  

```plaintext
$TIME_BLOCK_OUTPUT = "08:00 AM"
```
This value can then be used in other blocks for further processing.  

---

## **Example Usage**  

### **Scenario: Automated Weather Notification**  

1. **Time Block** → Triggers at 7:00 AM.  
   - **Output Variable:** `$TIME_BLOCK_OUTPUT` → `"07:00 AM"`  
2. **API Call Block** → Fetches weather data.  
   - **Output Variable:** `$WEATHER_API_OUTPUT` → `"Sunny, 22°C"`  
3. **Email Block** → Uses stored output variables to generate an email.  

**Example Email Content (Using Output Variables):**  
```plaintext
Good morning! As of $TIME_BLOCK_OUTPUT, the weather forecast is: $WEATHER_API_OUTPUT.
```
**Final Output (After Variable Replacement):**  
```plaintext
Good morning! As of 07:00 AM, the weather forecast is: Sunny, 22°C.
```

---

## **Example JSON Representation of Output Variables**  

```json
{
  "loop_name": "Morning Weather Alert",
  "blocks": [
    {
      "type": "time",
      "output": "$TIME_BLOCK_OUTPUT"
    },
    {
      "type": "api_call",
      "endpoint": "https://api.weather.com/data",
      "output": "$WEATHER_API_OUTPUT"
    },
    {
      "type": "email",
      "recipient": "user@example.com",
      "subject": "Daily Weather Report",
      "body": "As of $TIME_BLOCK_OUTPUT, the weather is: $WEATHER_API_OUTPUT."
    }
  ]
}
```

---

## **Best Practices for Using Output Variables**  

✅ **Use Descriptive Variable Names** → `$USER_INPUT`, `$API_RESPONSE`, `$EMAIL_BODY`.  
✅ **Ensure Variable Availability** → Check that the task generating the output runs before using it.  
✅ **Validate Data** → Ensure output variables contain expected values before using them in later steps.  
✅ **Avoid Overwriting Outputs** → Use separate variables for different data points to prevent conflicts.  
