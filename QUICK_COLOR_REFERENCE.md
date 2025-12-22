# 🎨 Quick Color Change Reference Card

## 📍 File Location
```
d:\2026\landingpage\main\static\main\css\colors.css
```

## ⚡ Quick Actions

### Change a Single Color
1. Open `colors.css`
2. Find the variable (e.g., `--primary: #000000;`)
3. Change the hex code
4. Save

### Switch to a Different Theme
1. Open `colors.css`
2. Scroll to bottom (Alternative Themes section)
3. Find your theme
4. Remove `/*` and `*/` around the `:root { ... }` block
5. Save

### Create Your Own Theme
1. Copy an existing theme block
2. Modify the color values
3. Uncomment it (remove `/*` and `*/`)
4. Save

## 🎯 Most Common Variables to Change

| Variable | What It Controls | Example |
|----------|------------------|---------|
| `--primary` | Main buttons, links, brand elements | `#000000` |
| `--accent` | Secondary highlights, accents | `#333333` |
| `--bg-dark` | Page background | `#ffffff` |
| `--text-main` | Main text color | `#000000` |
| `--text-muted` | Secondary text, descriptions | `#666666` |
| `--border` | All borders and dividers | `rgba(0,0,0,0.2)` |

## 🌈 Color Format Examples

```css
/* Hex Colors */
--primary: #6366f1;

/* RGB Colors */
--primary: rgb(99, 102, 241);

/* RGBA (with transparency) */
--bg-panel: rgba(255, 255, 255, 0.9);

/* HSL Colors */
--primary: hsl(239, 84%, 67%);
```

## ✅ After Making Changes

1. **Save the file**
2. **Hard refresh browser**:
   - Windows: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`
3. **For production**: Run `python manage.py collectstatic`

## 🔥 Pro Tips

- **Test on different sections**: Check hero, cards, forms, etc.
- **Check contrast**: Ensure text is readable
- **Use color pickers**: Tools like [Coolors.co](https://coolors.co) help find palettes
- **Keep backups**: Save your custom colors somewhere safe

## 🆘 Troubleshooting

**Colors not changing?**
- Hard refresh the browser (Ctrl+F5)
- Check if you saved the file
- Make sure you're editing the right `colors.css` file
- Run `collectstatic` if in production

**Site looks broken?**
- Check for syntax errors (missing semicolons, brackets)
- Make sure `:root {` and `}` are properly closed
- Verify you didn't delete any required variables

## 📚 More Help

- Full guide: `COLOR_SYSTEM_SETUP.md`
- Architecture: `COLOR_ARCHITECTURE.md`
- Detailed docs: `main/static/main/css/COLOR_GUIDE.md`
