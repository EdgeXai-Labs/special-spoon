# Website Editing Guide

This guide shows you exactly where to edit each piece of content in your website. Every section has clear HTML comments marking where to make changes.

## 🎯 Quick Start

Open `index.html` in any text editor (Notepad, VS Code, etc.) and search for the section you want to edit. Each section starts with a comment like this:

```html
<!-- ============================================
     SECTION NAME
     Edit: What to change here
     ============================================ -->
```

---

## 📝 Content Sections & How to Edit

### 1. **Navigation Bar**
**Search for:** `NAVIGATION BAR`

**What to edit:**
- Company name in the logo
- Menu links (Home, About, Products, etc.)

**Example:**
```html
<div class="logo">Your Company Name</div>
```
Change `Your Company Name` to your actual company name.

---

### 2. **Hero Section (Top of page)**
**Search for:** `HERO SECTION`

**What to edit:**
- Main headline
- Subheading description
- Button text

**Example:**
```html
<h1>
    Engineering Better <span class="hero-highlight">Food Manufacturing</span>
</h1>
```

---

### 3. **Trust Bar (Statistics)**
**Search for:** `TRUST BAR`

**What to edit:**
- Numbers (30+ Years, 1000+ Machines, etc.)
- Text descriptions

**Example:**
```html
<div class="trust-item-number">30+ Years</div>
<div class="trust-item-text">Experience</div>
```

Change the numbers and text to match your actual statistics.

---

### 4. **Industries We Serve**
**Search for:** `INDUSTRIES WE SERVE`

**What to edit:**
- Industry names
- Service descriptions under each industry

**Example:**
```html
<h3>🥔 Snack Foods</h3>
<ul>
    <li>• Namkeen Manufacturing</li>
    <li>• Potato Chips Production</li>
</ul>
```

Add, remove, or modify industries as needed.

---

### 5. **About Company**
**Search for:** `ABOUT COMPANY`

**What to edit:**
- Founding year (replace 1990)
- Company description
- Your company story

**Example:**
```html
<h2>Manufacturing Innovation Since 1990</h2>
```

Change `1990` to your actual founding year.

---

### 6. **Products/Machines**
**Search for:** `WHAT WE MANUFACTURE`

**What to edit:**
- Product names
- Short descriptions
- Emojis (optional)

**Example:**
```html
<h3>Potato Chips Line</h3>
<p>Complete automated production line from washing to packaging</p>
```

You can add more products by copying and pasting a card block:
```html
<div class="card">
    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🥔</div>
    <h3 style="color: #FFFFFF; margin-bottom: 0.5rem;">Product Name</h3>
    <p style="color: #9CA3AF; margin-bottom: 1rem;">Description here</p>
    <a href="#contact">View Details →</a>
</div>
```

---

### 7. **Complete Manufacturing Solutions**
**Search for:** `COMPLETE MANUFACTURING SOLUTIONS`

**What to edit:**
- Services offered (Plant Planning, Machine Design, etc.)
- Service descriptions

---

### 8. **Why Choose Our Machines (Benefits)**
**Search for:** `WHY CHOOSE OUR MACHINES`

**What to edit:**
- Benefit titles
- Benefit descriptions

**Example:**
```html
<h3>Higher Production</h3>
<p>Increase production capacity without increasing manpower</p>
```

---

### 9. **Old Way vs New Way Comparison**
**Search for:** `OLD WAY VS NEW WAY`

**What to edit:**
- Comparison points in the table

**Example:**
```html
<tr>
    <td>❌ More workers required</td>
    <td>✅ Less manpower needed</td>
</tr>
```

Add or remove rows by copying the `<tr>` tags.

---

### 10. **Customer Support Section**
**Search for:** `CUSTOMER SUPPORT SECTION`

**What to edit:**
- Support services offered
- Service promises
- Support descriptions

This is your **KEY DIFFERENTIATOR** — make sure it stands out!

---

### 11. **Testimonials/Success Stories**
**Search for:** `TESTIMONIALS`

**What to edit:**
- Customer names and locations
- Testimonial text
- Results/metrics (+60% Production, -30% Oil Cost, etc.)

**Example:**
```html
<div style="color: #FBBF24; font-size: 1.5rem; font-weight: 700;">+60%</div>
<div style="color: #9CA3AF; font-size: 0.9rem;">Production</div>
```

---

### 12. **Frequently Asked Questions**
**Search for:** `FREQUENTLY ASKED QUESTIONS`

**What to edit:**
- Questions
- Answers

To add a new FAQ, copy this block:
```html
<div style="background: #0F1117; padding: 2rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #FBBF24;">
    <h3 style="color: #FBBF24; font-size: 1.2rem; margin-bottom: 1rem;">Your Question Here?</h3>
    <p style="color: #E5E7EB; line-height: 1.8;">
        Your answer here.
    </p>
</div>
```

---

### 13. **Contact Section**
**Search for:** `CONTACT SECTION`

**What to edit:**
- Factory address
- Phone numbers
- WhatsApp number
- Email addresses
- Working hours

**Example:**
```html
<p style="color: #E5E7EB; line-height: 1.8;">
    Your Factory Address Line 1<br>
    City, State - PIN Code<br>
    India
</p>
```

Replace with your actual address.

**To add Google Maps:**
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the map placeholder section

---

### 14. **Footer**
**Search for:** `FOOTER`

**What to edit:**
- Company name
- Company description
- Social media links
- Footer menu links
- Copyright year

**Example:**
```html
<div style="color: #FBBF24; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Your Company Name</div>
```

---

## 🎨 Changing Colors

The website uses a professional dark theme with yellow accent color (#FBBF24).

**Main colors used:**
- Background dark: `#0F1117`
- Card background: `#171A23`
- Accent yellow: `#FBBF24`
- Text white: `#E5E7EB`
- Text gray: `#9CA3AF`

To change the accent color throughout the site, search for `#FBBF24` and replace with your brand color.

---

## 📸 Adding Images

Currently the site uses emojis and colored backgrounds. To add actual images:

**For product images:**
```html
<img src="your-image.jpg" alt="Product Name" style="width: 100%; border-radius: 6px; margin-bottom: 1rem;">
```

**For background images:**
Replace the hero background in the CSS section at the top.

---

## ✅ Testing Your Changes

1. Save the `index.html` file
2. Double-click the file to open in your browser
3. Press `Ctrl + F5` (or `Cmd + Shift + R` on Mac) to refresh and see changes

---

## 💡 Tips

1. **Always make a backup** before editing
2. **Edit one section at a time** and test
3. **Keep the HTML structure intact** — only change the text between tags
4. **Don't delete the comment markers** — they help you find sections later
5. **Use Find (Ctrl+F)** to search for sections quickly

---

## 🆘 Common Issues

**Problem:** Page looks broken after editing
**Solution:** You likely deleted a closing tag. Use Ctrl+Z to undo and try again carefully.

**Problem:** Changes don't show in browser
**Solution:** Clear your browser cache or do a hard refresh (Ctrl+F5)

**Problem:** Colors look wrong
**Solution:** Make sure you didn't accidentally delete the `#` before color codes

---

## 📞 Need Help?

If you get stuck:
1. Make sure all opening tags have closing tags
2. Check that you didn't accidentally delete quotation marks
3. Compare your changes with the original file
4. Use a code editor like VS Code which highlights syntax errors

---

**Remember:** The website is designed to tell a story, not be a catalog. Focus on:
- Business outcomes (cost reduction, increased production)
- Your support advantage
- Custom engineering capabilities
- Real customer success metrics