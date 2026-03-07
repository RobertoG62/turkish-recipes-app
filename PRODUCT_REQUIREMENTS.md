# Product Requirements Document (PRD)
## Turkish Recipes App — המטבח התורכי

**Version**: 1.0
**Date**: 2026-03-07
**Author**: Claude Sonnet 4.5 (via recipe-app-generator skill)
**Status**: Ready for Implementation

---

## Executive Summary

The **Turkish Recipes App** is a mobile-first, Hebrew RTL web application featuring 50 authentic Turkish recipes. Built as a zero-build-step vanilla JavaScript SPA, it provides an elegant, accessible way for Hebrew speakers to discover and cook Turkish cuisine.

**Key Metrics**:
- 50 curated recipes across 5 categories
- Zero external dependencies (CDN-only)
- GitHub Pages deployment ready
- Full RTL Hebrew interface
- WhatsApp integration for shopping lists

---

## Problem Statement

### User Pain Points
1. **Language Barrier**: Most Turkish recipe resources are in Turkish or English
2. **Scattered Content**: No centralized Hebrew resource for Turkish cuisine
3. **Mobile Access**: Cooking requires mobile-friendly, distraction-free interfaces
4. **Shopping Lists**: Users need easy ways to share ingredient lists

### Solution
A dedicated Hebrew web app with authentic Turkish recipes, intuitive search/filter, and WhatsApp shopping list sharing — all accessible from any device without installation.

---

## Target Audience

### Primary Personas

**1. Miriam (35, Home Cook)**
- Wants to cook authentic Turkish dishes for family dinners
- Needs clear Hebrew instructions
- Uses mobile phone while cooking
- Values authentic, traditional recipes

**2. Yoni (28, Food Enthusiast)**
- Explores different cuisines
- Shares recipes with friends via WhatsApp
- Appreciates beautiful food presentation
- Looks for variety (kebabs, desserts, mezze)

**3. Sarah (45, Cultural Explorer)**
- Interested in Ottoman and Turkish culture
- Hosts dinner parties with themed menus
- Needs recipes with original Turkish names
- Values historical context

---

## Core Features

### 1. Recipe Browsing (MVP)
**Description**: Users can browse all 50 recipes in a responsive grid layout.

**User Stories**:
- As a user, I want to see all recipes at a glance
- As a user, I want recipes displayed with appetizing images
- As a user, I want to see prep/cook time and difficulty at a glance

**Acceptance Criteria**:
- [x] Recipe cards display: image, title, description, time, servings, difficulty
- [x] Responsive grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- [x] Card hover effect (lift animation)
- [x] Click to navigate to recipe detail

---

### 2. Category Filtering (MVP)
**Description**: Users can filter recipes by 5 predefined categories.

**Categories**:
1. קבבים ובשרים (Kebabs & Meats)
2. מזה וסלטים (Mezze & Salads)
3. מאפים ובורקס (Pastries & Börek)
4. מרקים ותבשילים (Soups & Stews)
5. קינוחים ומתוקים (Desserts & Sweets)

**User Stories**:
- As a user, I want to filter recipes by category
- As a user, I want to see how many recipes match my filter
- As a user, I want to clear filters easily

**Acceptance Criteria**:
- [x] Sticky category filter pills below hero
- [x] Active filter highlighted
- [x] Result count displayed
- [x] "הכל" (All) option to reset

---

### 3. Real-time Search (MVP)
**Description**: Users can search recipes by title, description, ingredients, or tags.

**User Stories**:
- As a user, I want to search for recipes by ingredient (e.g., "חציל")
- As a user, I want search results to update instantly
- As a user, I want to clear search quickly

**Acceptance Criteria**:
- [x] Search input in hero section
- [x] 200ms debounce for performance
- [x] Searches across: title, description, ingredients, tags
- [x] Clear button appears when typing
- [x] Empty state if no results

---

### 4. Recipe Detail View (MVP)
**Description**: Full recipe page with ingredients, instructions, and metadata.

**User Stories**:
- As a user, I want to see full recipe details
- As a user, I want to read step-by-step instructions
- As a user, I want to know prep time, cook time, servings, difficulty

**Acceptance Criteria**:
- [x] Hero image with title and description
- [x] Meta cards: prep time, cook time, servings, difficulty
- [x] Ingredients list with quantities
- [x] Numbered instructions
- [x] Tags for discoverability
- [x] Back button to return to home

---

### 5. WhatsApp Shopping List (MVP)
**Description**: Share ingredients list via WhatsApp.

**User Stories**:
- As a user, I want to send the shopping list to my phone
- As a user, I want to share the recipe with a friend

**Acceptance Criteria**:
- [x] "שלח רשימת מצרכים ל-WhatsApp" button on recipe detail
- [x] Pre-formatted message with:
  - Recipe title
  - Ingredient checklist (▢ format)
  - Link back to recipe
- [x] Opens WhatsApp with message ready to send

---

### 6. Hash-based Routing (MVP)
**Description**: Client-side routing without page reloads.

**Routes**:
- `#/` — Home view (recipe grid)
- `#/recipe/:id` — Recipe detail view

**User Stories**:
- As a user, I want to navigate without page reloads
- As a user, I want to share direct links to recipes
- As a user, I want browser back/forward to work

**Acceptance Criteria**:
- [x] Hash-based routing using `window.location.hash`
- [x] View transitions (fade-in animation)
- [x] Deep-linkable recipe URLs
- [x] Browser history support

---

## Non-Functional Requirements

### Performance
- **Page Load**: < 2 seconds on 3G connection
- **Search Latency**: < 200ms debounce
- **Image Loading**: Lazy loading with placeholder icons

### Accessibility
- **Language**: Full Hebrew RTL support
- **Keyboard Navigation**: Tab-accessible UI
- **Semantic HTML**: Proper heading hierarchy, ARIA labels

### Browser Support
- Chrome/Edge (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

### Security
- No user data collection
- No cookies or tracking
- All assets served over HTTPS (GitHub Pages)

---

## Technical Architecture

### Tech Stack
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Vanilla JavaScript | Zero build step, maximum simplicity |
| **Styling** | Tailwind CSS v4 (CDN) + Custom CSS | Rapid prototyping, responsive utilities |
| **Icons** | Font Awesome 6 | Consistent iconography |
| **Fonts** | Google Fonts (Heebo, Playfair) | Hebrew support, elegant typography |
| **Deployment** | GitHub Pages | Free, fast, no backend needed |

### Data Flow
```
User Action → App.js (Router) → RecipeData.js (Filter/Search) → UI.js (Render) → DOM
```

### File Size Budget
- `index.html`: ~5 KB
- `style.css`: ~8 KB
- `data.js`: ~2 KB
- `ui.js`: ~5 KB
- `app.js`: ~3 KB
- `recipes.json`: ~80 KB
- **Total (excl. images)**: ~103 KB
- **CDN Resources**: ~200 KB (Tailwind, FA, Fonts)

---

## Recipe Content Guidelines

### Recipe Criteria
Each recipe must be:
1. **Authentic**: Traditional Turkish dish, not fusion
2. **Accessible**: Ingredients available in Israeli supermarkets
3. **Tested**: Proportions and instructions verified
4. **Bilingual**: Hebrew title + Turkish original name

### Ingredient Naming
- Use Hebrew names (e.g., "בשר כבש" not "lamb")
- Include Turkish name in `originalName` field
- Specify units in Hebrew (כפות, כוסות, גרם, מ״ל)

### Instructions Style
- Clear, sequential steps
- Active voice ("לערבב", "להוסיף")
- Short sentences (< 20 words)
- No assumed knowledge

---

## Deployment Strategy

### Phase 1: Initial Deployment
1. ✅ Generate all code files
2. ⏳ User adds 51 images
3. ⏳ Test locally with Python server
4. ⏳ Initialize Git repository
5. ⏳ Deploy with `/gh-pages-deploy`

### Phase 2: Post-Launch (Optional)
- Add Google Analytics (privacy-focused)
- Monitor popular recipes (via GA)
- Collect user feedback (GitHub Issues)
- Iterate based on usage patterns

---

## Success Metrics (Future)

### KPIs (if analytics added)
1. **Engagement**
   - Avg. recipes viewed per session
   - Time spent on recipe detail pages
   - Search usage rate

2. **Sharing**
   - WhatsApp share button clicks
   - URL shares (via GA referrals)

3. **Retention**
   - Return visitor rate
   - Bounce rate < 40%

---

## Out of Scope (V1)

The following features are **explicitly excluded** from V1:

- ❌ User accounts / authentication
- ❌ Favorites / bookmarks
- ❌ User-generated content (comments, ratings)
- ❌ Recipe submission form
- ❌ Multi-language support (only Hebrew)
- ❌ Backend server
- ❌ Database
- ❌ Print-friendly CSS
- ❌ Offline support (PWA)
- ❌ Ingredient scaling (2x, 0.5x servings)
- ❌ Cooking timers
- ❌ Nutritional information
- ❌ Video tutorials

---

## Open Questions & Risks

### Risks
1. **Image Quality**: User-generated images may vary in quality
   - **Mitigation**: Provide detailed image generation guide (`RECIPES_LIST.md`)

2. **Mobile Performance**: Large images on slow connections
   - **Mitigation**: Lazy loading, recommend optimized image sizes

3. **Content Accuracy**: Recipe authenticity may be challenged
   - **Mitigation**: Include sources, allow GitHub Issues for feedback

### Open Questions
1. Should we add a "Print Recipe" feature in V2?
2. Should we track analytics (privacy implications)?
3. Should we add English language support later?

---

## Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Code Generation** | 1 hour | All HTML/CSS/JS files, JSON data |
| **Image Generation** | 2-4 hours | 51 images via AI tools (user task) |
| **Local Testing** | 30 min | Verify all images load, test routing |
| **Deployment** | 15 min | GitHub repo creation, Pages deployment |
| **Total** | ~4 hours | Live website on GitHub Pages |

---

## Appendix

### A. Recipe ID Naming Convention
- Use kebab-case (e.g., `adana-kebab`)
- Based on Turkish or transliterated name
- Keep under 30 characters
- No special characters (only `a-z`, `0-9`, `-`)

### B. Image Specifications
- **Format**: JPG (or WebP if supported)
- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **File Size**: < 200 KB per image
- **Style**: Professional food photography, natural lighting

### C. Browser Testing Checklist
- [ ] Chrome Desktop (Windows/Mac)
- [ ] Safari Desktop (Mac)
- [ ] Firefox Desktop
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)
- [ ] Edge Desktop

---

**Document End**

For implementation details, see `CLAUDE.md` and `RECIPES_LIST.md`.
