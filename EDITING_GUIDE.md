# E-Portfolio Content Editing Guide

## 📝 How to Edit Your E-Portfolio Content

Your e-portfolio content is **fully editable** at any time! All content is stored in the code files, so you can update it whenever you want - before, during, or after your practicum.

---

## 🎯 What You Can Edit

### 1. **Personal Information** (About Page)
**File:** `/app/frontend/src/pages/AboutPage.jsx`

**Line 66-67:** Your introduction
```jsx
Hi, I'm <span className="font-semibold">Loke Wei Feng</span>...
```

**Line 78:** Court division/officer placeholder
```jsx
<span className="inline-block px-3 py-1 bg-lilac/30 font-medium text-ink">
  [Add court division / officer here]
</span>
```
Replace `[Add court division / officer here]` with your actual court division name.

**Line 87:** Supervisor information
```jsx
My lecturer supervisor is <span className="font-medium text-ink">Dr. Khuzaimah Bt Mat Salleh (986)</span>
```

**Lines 106-111:** Academic details grid
- Programme name
- University name
- Practicum placement
- Academic period

---

### 2. **Practicum I Journal** (4 Weeks)
**File:** `/app/frontend/src/pages/PracticumIPage.jsx`

**Lines 97-103:** Each day's diary entry
```jsx
<em>[Write what you did, what you learned, and any important reflection here.]</em>
```

**How to add your diary entries:**
1. Find the day you want to edit (Monday, Tuesday, etc.)
2. Replace the placeholder text with your actual entry
3. Remove the `<em>` and `</em>` tags for normal text
4. Keep the formatting clean and readable

**Example:**
```jsx
<div className="font-body text-base leading-relaxed p-4 rounded">
  Today I observed civil case proceedings in Court 3. Learned about the proper protocol for submitting evidence. The judge explained the importance of procedural compliance. Key takeaway: always verify document authenticity before submission.
</div>
```

---

### 3. **Practicum II Journal** (8 Weeks)
**File:** `/app/frontend/src/pages/PracticumIIPage.jsx`

Same editing process as Practicum I, but for 8 weeks instead of 4.

**Lines 98-104:** Each day's diary entry placeholder

---

### 4. **Gallery Images**
**File:** `/app/frontend/src/pages/GalleryPage.jsx`

**Current Status:** Uses placeholder icons

**To add real photos:**
1. Upload your images to a hosting service (recommended: Cloudinary, ImgBB, or your own server)
2. Replace the icon placeholders with actual image tags

**Example replacement (Lines 79-95):**

Replace this:
```jsx
<item.icon size={64} ... />
```

With this:
```jsx
<img 
  src="YOUR_IMAGE_URL_HERE" 
  alt={item.title}
  className="w-full h-full object-cover"
/>
```

**Gallery items you can customize:**
- Mahkamah Tinggi Muar (exterior photo)
- First day (orientation photo)
- Daily notes (documentation)
- Learning in practice (courtroom photo)
- Closing reflections (team photo)

---

### 5. **Dates and Timeline**
**File:** `/app/frontend/src/pages/PracticumIPage.jsx`

**Line 30:** Practicum I dates
```jsx
02 · Practicum I · 3–27 August 2026
```

**Line 47:** Description
```jsx
A record of the first month at Mahkamah Tinggi Muar...
```

---

### 6. **Contact Information**
**File:** `/app/frontend/src/components/ContactSection.jsx`

**Line 62:** Email
```jsx
href="mailto:weifeng603@gmail.com"
```

**Line 73:** LinkedIn
```jsx
href="https://www.linkedin.com/in/loke-wei-feng-129513303"
```

---

## 🚀 How to Apply Your Changes

After editing any file:

1. **Save the file** in your code editor
2. **The website will automatically reload** (hot reload is enabled)
3. **Check your browser** to see the changes live

**No restart needed!** Just save and refresh.

---

## 💡 Best Practices

### For Diary Entries:
- **Be specific:** Mention court cases, documents, people you worked with
- **Reflect:** What did you learn? What surprised you?
- **Be professional:** This is a formal record
- **Use proper grammar:** Proofread before saving

### For Images:
- **High quality:** Use clear, professional photos
- **Proper size:** Optimize images (max 1-2MB each)
- **Relevant content:** Court building, workspace, team activities

### Before Your Practicum:
- ✅ Leave placeholders as they are
- ✅ You can update personal info (About page)
- ✅ Prepare the structure

### During Your Practicum:
- ✅ Update daily entries as you go
- ✅ Take photos for the gallery
- ✅ Keep notes for reflections

### After Your Practicum:
- ✅ Complete all diary entries
- ✅ Upload all photos
- ✅ Add final reflections

---

## 📂 File Structure

```
/app/frontend/src/
├── pages/
│   ├── HomePage.jsx          # Landing page with hero
│   ├── AboutPage.jsx          # Your bio and details
│   ├── PracticumIPage.jsx     # 4-week journal
│   ├── PracticumIIPage.jsx    # 8-week journal
│   └── GalleryPage.jsx        # Photo gallery
└── components/
    ├── Navigation.jsx         # Top menu
    └── ContactSection.jsx     # Footer with map & contact
```

---

## ❓ Common Questions

**Q: Can I edit content after the site is live/deployed?**
A: Yes! Just edit the files and redeploy. Your content is part of the code.

**Q: What if I make a mistake?**
A: Don't worry! You can always undo changes in your code editor or ask for help.

**Q: Can I add more weeks?**
A: Yes! Just duplicate the week structure in the PracticumIPage.jsx file.

**Q: How do I add formatting (bold, italic)?**
A: Use HTML tags:
- Bold: `<strong>text</strong>`
- Italic: `<em>text</em>`
- Line break: `<br />`

**Q: Can I change colors or fonts?**
A: Yes! The color system is in `/app/frontend/src/App.css` (CSS variables at the top).

---

## 🆘 Need Help?

If you need assistance editing any content, just ask! The files are well-organized and easy to navigate.

**Happy documenting your practicum journey! 🎓⚖️**
