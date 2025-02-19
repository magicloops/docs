# Introduction to Magic Loops 

## **Welcome to Magic Loops!** 
Welcome to the **official Magic Loops documentation**—your comprehensive guide to building AI-powered automation. Magic Loops enables you to create everything from simple automated tasks to complete personal software solutions.

---

## **Core Concepts**

### **1. Component Hierarchy** 
Magic Loops uses a three-tier architecture:

🧱 **Blocks**
- Foundational components
- Tiny programs for specific tasks
- AI-powered mini-functions

🔄 **Loops**
- Combine multiple Blocks
- Create complete workflows
- Function as AI-powered APIs

📱 **Apps**
- Use multiple Loops
- Include user interfaces
- Create complete software solutions

### **2. Building Blocks**

#### **Default Blocks**
Pre-configured components for common tasks:
- Time scheduling
- Data processing
- API integration
- Web scraping
- And more...

#### **Custom Blocks**
Create your own specialized components:
- Tailored to your needs
- Extended functionality
- Reusable across Loops

#### **Block Templates**
Ready-to-use templates for quick development:
- Batch processing
- Data visualization
- Spreadsheet integration

---

## **Getting Started**

### **1. Choose Your Starting Point**
- **Block Level** → Create custom automation components
- **Loop Level** → Build complete workflows
- **App Level** → Develop full software solutions

### **2. Explore the Documentation**
✅ [Blocks](blocks.md) → Learn about the building blocks
✅ [Loops](loops.md) → Understand workflow automation
✅ [Templates](templates.md) → Use pre-built solutions
✅ [Apps](apps.md) → Build complete applications

---

## **Example: Building Your First Automation**

```json
{
  "name": "Simple Newsletter",
  "type": "loop",
  "blocks": [
    {
      "type": "time",
      "schedule": "daily_9am"
    },
    {
      "type": "scrape",
      "source": "news_website"
    },
    {
      "type": "llm",
      "action": "summarize"
    },
    {
      "type": "email",
      "action": "send_summary"
    }
  ]
}
```

---

## **Resources**

### **Quick Links**
- [Dashboard Overview](dashboard.md)
- [Block Reference](blocks.md)
- [API Documentation](api-endpoint.md)
- [Templates Gallery](templates.md)

### **Community**
- [Discord Community](https://discord.gg/magicloops)
- [GitHub Repository](https://github.com/magicloops)
- [Blog](https://blog.magicloops.ai)

---

## **Next Steps**
Ready to start building? Choose your path:
1. [Create Your First Block](blocks.md)
2. [Build a Loop](loops.md)
3. [Deploy an App](apps.md)