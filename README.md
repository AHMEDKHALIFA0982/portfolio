# Ahmed Khalifa Portfolio Website

This is a clean static portfolio website for Ahmed Khalifa.

## What is included

- `index.html` — main website page
- `css/style.css` — responsive styling
- `js/main.js` — project cards and filtering
- `assets/` — folder for your images, screenshots and CV file

## How to edit

### 1. Change your GitHub and LinkedIn links
Open `index.html` and find:

```html
<a href="#" aria-label="GitHub link">GitHub — add your link here</a>
<a href="#" aria-label="LinkedIn link">LinkedIn — add your link here</a>
```

Replace `#` with your real links.

### 2. Add project screenshots
Put screenshots inside the `assets` folder.

Then you can edit the project cards in `js/main.js`.

### 3. Add or remove projects
Open `js/main.js` and edit the `projects` array. The current version includes the Smart Solar Grass-Cutting Robot project and removes the TechNovaStruct and Birthday website projects.

Example:

```js
{
  title: "My New Project",
  category: "dotnet web",
  icon: "🚀",
  description: "Write a short project description here.",
  tags: ["C#", ".NET", "SQL Server"]
}
```

### 4. Run locally
Just open `index.html` in your browser.

### 5. Deploy on Netlify
1. Create a GitHub repository.
2. Upload all files.
3. Open Netlify.
4. Choose **Add new site**.
5. Connect your GitHub repo.
6. Deploy.

Because this is a static portfolio, you do not need a backend to publish it.
