# Color System Architecture

```
📁 landingpage/
├── 📁 main/
│   ├── 📁 static/
│   │   ├── 📁 main/
│   │   │   ├── 📁 css/
│   │   │   │   ├── 🎨 colors.css          ← ALL COLOR VARIABLES HERE
│   │   │   │   ├── 📄 style.css           ← Imports colors.css
│   │   │   │   └── 📖 COLOR_GUIDE.md      ← Documentation
│   │   │   └── ...
│   │   └── ...
│   ├── 📁 templates/
│   │   └── 📁 main/
│   │       └── 📄 index.html              ← Links to style.css
│   └── ...
└── 📖 COLOR_SYSTEM_SETUP.md               ← This guide
```

## How It Works

```
┌─────────────────┐
│   index.html    │
│                 │
│  <link to       │
│  style.css>     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   style.css     │
│                 │
│  @import        │
│  colors.css     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   colors.css    │  ← CHANGE COLORS HERE!
│                 │
│  :root {        │
│    --primary    │
│    --accent     │
│    --bg-dark    │
│    ...          │
│  }              │
└─────────────────┘
```

## Variable Usage Flow

```
colors.css                style.css                 HTML
──────────                ─────────                 ────
--primary: #000      →    color: var(--primary) →  <button>
--accent: #333       →    border: var(--accent) →  <div>
--bg-dark: #fff      →    background: var(--bg-dark) → <body>
```

## Quick Color Change Example

### Before (Scattered Colors):
```css
/* In style.css - line 150 */
.navbar { background: #ffffff; }

/* In style.css - line 360 */
.btn-primary { background: #000000; }

/* In style.css - line 494 */
.glass-panel { background: #ffffff; }
```

### After (Centralized):
```css
/* In colors.css - ONE PLACE */
:root {
  --bg-dark: #ffffff;
  --primary: #000000;
}

/* In style.css - Uses variables */
.navbar { background: var(--bg-dark); }
.btn-primary { background: var(--primary); }
.glass-panel { background: var(--bg-dark); }
```

**Result**: Change `--bg-dark` once in `colors.css` → Updates everywhere! 🎉

## Available Themes

| Theme Name | Background | Primary | Accent | Best For |
|------------|------------|---------|--------|----------|
| **Clean White** ✅ | White | Black | Gray | Current (Professional) |
| **Dark Indigo** | Dark | Indigo | Cyan | Modern/Tech |
| **Ocean Blue** | Navy | Blue | Teal | Trust/Medical |
| **Purple Sunset** | Dark Purple | Purple | Pink | Creative/Luxury |
| **Emerald Forest** | Dark Green | Green | Teal | Nature/Health |
| **Crimson Night** | Dark Red | Red | Orange | Bold/Energy |

## Color Variable Categories

### 🎨 Brand Colors
- `--primary` - Main brand color
- `--accent` - Secondary brand color
- `--success` - Positive actions

### 📄 Background Colors
- `--bg-dark` - Main background
- `--bg-panel` - Cards/panels
- `--bg-dim` - Subtle sections

### ✍️ Text Colors
- `--text-main` - Primary text
- `--text-muted` - Secondary text

### 🔲 UI Elements
- `--border` - Borders/dividers
- `--hover-bg` - Hover states
- `--glass-bg` - Glass effects

### 🌈 Special Effects
- `--orb-1`, `--orb-2`, `--orb-3` - Ambient orbs
- `--gradient-*` - Gradient colors
- `--badge-*` - Badge colors
- `--highlight-*` - Highlight colors
