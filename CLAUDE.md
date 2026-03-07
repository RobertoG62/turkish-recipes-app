# CLAUDE.md — Turkish Recipes App

> Project-level instructions for the Turkish Recipes App.
> Inherits from workspace root `d:\claude\CLAUDE.md`.

---

## Project Overview

**Turkish Recipes App** — A production-ready, mobile-first Hebrew (RTL) recipe web application featuring 50 authentic Turkish recipes.

- **Technology**: Vanilla HTML/CSS/JS (zero build step)
- **Styling**: Tailwind CSS v4 CDN + Custom CSS
- **Language**: Hebrew RTL (`dir="rtl"`, `lang="he"`)
- **Deployment**: GitHub Pages ready
- **Architecture**: Hash-based SPA routing

---

## Design Tokens

### Color Palette (Turkish Theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `tr-primary` | `#C41E3A` | Turkish red (from flag) — primary accent |
| `tr-primary-light` | `#E85D72` | Light red variant — highlights |
| `tr-primary-dark` | `#8B1528` | Dark red variant — hover states |
| `tr-cream` | `#FAFAFA` | Background color |
| `tr-charcoal` | `#1A1A1A` | Primary text color |
| `tr-navy` | `#0A1628` | Hero overlays, footer |
| `tr-warm-gray` | `#F5F0EB` | Card backgrounds, borders |
| `tr-text-secondary` | `#6B7280` | Secondary text |
| `tr-border` | `#E5E1DC` | Border color |

### Typography
- **Hebrew**: Heebo (sans-serif) — body text
- **Display**: Playfair Display (serif) — headings, original recipe names
- **RTL Support**: Full right-to-left layout

### Recipe Categories (5)
1. **קבבים ובשרים** (Kebabs & Meats) — `fa-fire-flame-curved`
2. **מזה וסלטים** (Mezze & Salads) — `fa-bowl-food`
3. **מאפים ובורקס** (Pastries & Börek) — `fa-bread-slice`
4. **מרקים ותבשילים** (Soups & Stews) — `fa-bowl-rice`
5. **קינוחים ומתוקים** (Desserts & Sweets) — `fa-cake-candles`

---

## File Structure

```
turkish-recipes-app/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Custom styles (uses --tr- prefix)
├── js/
│   ├── app.js             # Router & orchestration
│   ├── data.js            # Data fetching & filtering
│   └── ui.js              # DOM rendering (includes category icons)
├── data/
│   └── recipes.json       # 50 Turkish recipes
├── images/                # User adds images here (51 total)
│   ├── Turkish_Cuisine_Hero_Background.jpg
│   └── [50 recipe images].jpg
├── .gitignore
├── CLAUDE.md              # This file
├── PRODUCT_REQUIREMENTS.md
└── RECIPES_LIST.md        # Image generation reference
```

---

## Key Features

1. **Hash-based Routing**
   - `#/` — Home view (recipe grid)
   - `#/recipe/:id` — Recipe detail view

2. **Real-time Search**
   - 200ms debounce
   - Searches: title, description, ingredients, tags

3. **Category Filtering**
   - Sticky filter pills
   - Combines with search query

4. **WhatsApp Integration**
   - Share shopping list via WhatsApp
   - Auto-generates formatted message

5. **Responsive Design**
   - Mobile-first approach
   - 1 col (mobile) → 2 col (tablet) → 3 col (desktop)

6. **Glassmorphism UI**
   - Search bar, meta cards
   - Card-lift hover effects

---

## Development Workflow

### Adding Images (User Responsibility)
1. Generate all 51 images using `RECIPES_LIST.md` as reference
2. Save images to `images/` directory with exact filenames
3. Update `.home-hero` background in `css/style.css`:
   ```css
   .home-hero {
       background: url('../images/Turkish_Cuisine_Hero_Background.jpg') center / cover no-repeat;
   }
   ```

### Local Testing
```bash
python -m http.server 8000
# Open http://localhost:8000
```

### Deployment
Use `/gh-pages-deploy` skill to publish to GitHub Pages.

---

## Code Conventions

### JSON Schema (recipes.json)
Each recipe must include:
- `id` (kebab-case)
- `title` (Hebrew)
- `originalName` (Turkish)
- `description` (Hebrew, 1-2 sentences)
- `category` (one of 5 categories)
- `image` (path: `images/Name.jpg`)
- `prepTime`, `cookTime` (minutes)
- `servings` (number)
- `difficulty` (קל | בינוני | מאתגר)
- `ingredients` (array of `{name, quantity, unit}`)
- `instructions` (array of Hebrew strings)
- `tags` (array of Hebrew strings)

### CSS Prefix
All custom CSS variables use `--tr-` prefix (e.g., `--tr-primary`).

### JavaScript Modules
- **RecipeData** — Data layer (fetch, filter, search)
- **UI** — Rendering layer (DOM manipulation)
- **App** — Orchestration (routing, events)

---

## Recipe Distribution

| Category | Count | Difficulty Mix |
|----------|-------|----------------|
| קבבים ובשרים | 10 | 5 קל, 3 בינוני, 2 מאתגר |
| מזה וסלטים | 10 | 9 קל, 1 בינוני |
| מאפים ובורקס | 10 | 4 קל, 5 בינוני, 1 מאתגר |
| מרקים ותבשילים | 10 | 4 קל, 2 בינוני, 4 מאתגר |
| קינוחים ומתוקים | 10 | 6 קל, 3 בינוני, 1 מאתגר |
| **Total** | **50** | **28 קל, 14 בינוני, 8 מאתגר** |

---

## Known Limitations

1. **No Backend**: All data is client-side JSON
2. **No User Accounts**: No favorites, comments, or ratings
3. **Static Images**: Images must be manually added
4. **No i18n**: Hebrew only (no multi-language support)
5. **Basic Routing**: Hash-based (not HTML5 pushState)

---

## Future Enhancements (Out of Scope for V1)

- [ ] Add favorites (localStorage)
- [ ] Print recipe functionality
- [ ] Ingredient unit conversion
- [ ] Cooking timer integration
- [ ] Social sharing (Facebook, Twitter)
- [ ] User recipe submissions
- [ ] Multi-language support

---

## Deployment Checklist

- [x] All HTML/CSS/JS files created
- [x] 50 recipes in `recipes.json`
- [ ] 51 images added to `images/` directory
- [ ] Hero background CSS updated
- [ ] Tested locally with `python -m http.server`
- [ ] Git repository initialized
- [ ] Ready for `/gh-pages-deploy`

---

## Contact & Support

For issues or feature requests, create an issue in the GitHub repository after deployment.
