# JSON Documentation 

## **Definition**  
**JSON (JavaScript Object Notation)** is a lightweight, text-based data format used for structuring and exchanging information between systems. It is easy for humans to read and write while being simple for computers to parse and generate. JSON is widely used in web development, APIs, and data storage.

---

## **JSON Structure**  
JSON consists of **key-value pairs** and supports the following data types:  

- **Strings** → `"name": "John Doe"`  
- **Numbers** → `"age": 30`  
- **Booleans** → `"isStudent": false`  
- **Arrays** → `"hobbies": ["reading", "gaming", "coding"]`  
- **Objects** → `"address": { "city": "New York", "zip": "10001" }`  

---

## **Example JSON Object**  
```json
{
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "isStudent": true,
  "skills": ["Python", "JavaScript", "SQL"],
  "address": {
    "city": "San Francisco",
    "state": "CA",
    "zip": "94107"
  }
}
```

---

## **Common Use Cases**  

🔹 **APIs** – Sending and receiving structured data between clients and servers.  
🔹 **Configuration Files** – Storing settings in applications.  
🔹 **Database Storage** – Used in NoSQL databases like MongoDB.  
🔹 **Data Exchange** – Communication between different programming languages.  

---

## **Parsing JSON in Different Languages**  

### **JavaScript Example**  
```javascript
const jsonData = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonData); // Convert JSON to JavaScript object
console.log(obj.name); // Output: Alice
```

### **Python Example**  
```python
import json

json_data = '{"name": "Alice", "age": 25}'
data = json.loads(json_data)  # Convert JSON to Python dictionary
print(data["name"])  # Output: Alice
```

---

## **Video Example** 🎥  
For a visual explanation of JSON, watch the following video:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/exampleVideo1" title="JSON Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

---

## **Best Practices for Using JSON**  

✅ **Validate JSON format** → Ensure proper syntax to avoid errors.  
✅ **Use JSON for structured data** → Ideal for APIs and data storage.  
✅ **Keep JSON lightweight** → Avoid unnecessary nesting for better performance.  
✅ **Escape special characters** → Handle quotes, newlines, and special characters properly.  