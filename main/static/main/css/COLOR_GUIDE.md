# Color Palette System

## Overview
All color variables for the landing page are centralized in `colors.css`. This makes it easy to change the entire color scheme from one file.

## How to Change Colors

### Option 1: Modify Existing Colors
Open `main/static/main/css/colors.css` and edit the color values in the `:root` section:

```css
:root {
  --primary: #6366f1;    /* Change this to your desired primary color */
  --accent: #06b6d4;     /* Change this to your desired accent color */
  --success: #10b981;    /* Change this to your desired success color */
  /* ... and so on */
}
```

### Option 2: Use Pre-made Themes
In `colors.css`, there are several commented-out alternative themes:
- **Ocean Blue Theme** - Blue and teal tones
- **Purple Sunset Theme** - Purple and pink gradient
- **Emerald Forest Theme** - Green nature-inspired
- **Crimson Night Theme** - Red and orange warmth

To use one:
1. Open `colors.css`
2. Find the theme you want (they're at the bottom)
3. Uncomment it by removing the `/*` and `*/` around it
4. The new theme will override the default colors

### Option 3: Create Your Own Theme
1. Copy one of the existing theme blocks
2. Modify the color values to match your brand
3. Uncomment your new theme

## Color Variables Reference

| Variable | Purpose | Default Value |
|----------|---------|---------------|
| `--bg-dark` | Main background | `#050507` |
| `--bg-panel` | Glass panels | `rgba(20, 20, 35, 0.6)` |
| `--primary` | Primary brand color | `#6366f1` |
| `--accent` | Accent highlights | `#06b6d4` |
| `--success` | Success/positive | `#10b981` |
| `--text-main` | Primary text | `#ffffff` |
| `--text-muted` | Secondary text | `#94a3b8` |
| `--border` | Borders/dividers | `rgba(255, 255, 255, 0.08)` |
| `--orb-1` | Ambient orb 1 | `#1e1b4b` |
| `--orb-2` | Ambient orb 2 | `#0f2e2e` |
| `--orb-3` | Ambient orb 3 | `rgba(99, 102, 241, 0.1)` |

## Tips for Choosing Colors

1. **Contrast**: Ensure text colors have good contrast against backgrounds
2. **Consistency**: Keep your primary and accent colors complementary
3. **Accessibility**: Test colors for readability
4. **Brand Alignment**: Match colors to your brand guidelines

## Testing Your Changes

After modifying colors:
1. Save the `colors.css` file
2. Run Django's collectstatic if needed: `python manage.py collectstatic`
3. Refresh your browser (hard refresh: Ctrl+F5)
4. Check all sections of the page to ensure colors look good everywhere
