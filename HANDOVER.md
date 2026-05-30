# AI Coding Agent Handover & Architecture Manual
## QUARTZITE TS (Premium Geological Instruments, Mining & PPE Distribution Hub)

This document is a machine-readable developer manual and handover guide designed specifically for AI Coding Agents to understand the architecture, data structures, state management, and visual guidelines of the **Quartzite TS** platform.

---

## 🚀 Technical Core Facts & Stack

*   **Runtime/Framework**: React 18+ (SPA with client-side routing) powered by Vite.
*   **Language**: TypeScript (strict typing enabled).
*   **Styling**: Tailwind CSS utility classes using direct `@import "tailwindcss";` in `src/index.css`.
*   **Icons**: Lucide React (`lucide-react`) exclusively.
*   **Main Color Palette**:
    *   `#0a0f1d`: Deep Luxury Navy (Main background/header and hero areas)
    *   `#FAF9F5`: Light Sand/Cream/Off-White (Product catalog sections background)
    *   `#B8A99A`: Sand/Biege accent (Primary action points, highlight icons, headings)
    *   `#ffffff`: Pure White cards & text
    *   `#059669` / `#10b981`: Emerald Green (In Stock indicators)

---

## 📂 Key File Layout & Directory Tree

```bash
/
├── package.json              # Dependency declarations (Vite, React, Lucide, standard tooling)
├── metadata.json              # Applet configuration, Frame permissions, and Major capabilities
├── src/
│   ├── App.tsx                # Main Router, Navigation switches, and Homepage view definitions
│   ├── data.ts                # CRITICAL: Central product catalog database & category specifications
│   ├── main.tsx              # React mounting entry point
│   ├── index.css              # PostCSS imports & global custom font-surface overrides
│   ├── types.ts              # Declarations of Product, Category, and Feature interfaces
│   └── components/
│       ├── Navbar.tsx         # Unified sticky header navigation bar
│       ├── Footer.tsx         # Clean brand footer with sand tint elements
│       ├── SoftAurora.tsx     # Ambient decorative background graphics tool
│       └── ContactForm.tsx    # Interactive quotation submission handler
│   └── pages/
│       └── CategoryDetail.tsx # Category detail rendering template with filters & basket system
```

---

## 🏷️ How to Manage Categories

Categories are defined inside `src/data.ts` and their types are declared in `src/types.ts`.

### 1. The Category Type (`src/types.ts`):
```typescript
export interface Category {
  id: string;              // URL Slug identifier (e.g., 'ppe-safety-gear')
  name: string;            // Visual display name (e.g., 'PPE & Safety')
  description: string;     // Brief card description
  longDescription?: string;// Large banner summary description for detail page
  iconName: string;        // String identifying Lucide icons (used inside App.tsx)
  image: string;           // Grid collection background hero image
}
```

### 2. To Add or Edit a Category:
1.  Open `src/data.ts` and modify the `CATEGORIES` array.
2.  Open `src/App.tsx` and ensure that your new category icon is correctly referenced in the dynamic icon resolver or route matcher.
3.  Ensure the navigation options in `src/components/Navbar.tsx` (`menuItems` array) are in alignment if you want the category highlighted directly in the header.

---

## 📦 How to Manage the Product Catalog

All products live under `PRODUCTS` inside `src/data.ts`.

### 1. The Product Type (`src/types.ts`):
```typescript
export interface Product {
  id: string;               // Unique product SKU slug (e.g., 'estwing-rock-hammer')
  name: string;             // Exact commercial product name
  category: string;         // Matches Category 'id' exactly
  brand: string;            // Uppercased manufacturer brand indicator (e.g., 'ESTWING')
  description: string;      // 2-3 sentence technical description
  imageUrl: string;         // High-quality contextual photo link (refer to image guidelines below)
  specifications: string[]; // Standardized technical key-value specification string list
  features: string[];       // 2-3 core benefit bullet points
  price?: number;           // Commercial price in USD (defaults to direct quote logic if omitted)
  isFeatured?: boolean;     // Places a "FEATURED" tag on top-left of the card
  inStock?: boolean;        // Boolean. Omitted or true indicates IN STOCK; false triggers direct inquiry
}
```

### 2. Adding a New Product (Example):
```typescript
{
  id: 'safety-vest-deluxe',
  name: 'Multi-Pocket Premium Safety Vest',
  category: 'ppe-safety-gear',
  brand: 'PROTECTR',
  description: 'High visibility safety vest made of ultra-breathable mesh with double lock heavy-duty zippers.',
  imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=600',
  specifications: [
    'GRAMMAGE: 160 grams light',
    'REFLECTIVE STANDARD: EN ISO 20471 Class 2',
    'MATERIAL: 100% Breathable Polyester'
  ],
  features: [
    'Equipped with dedicated mobile phone pocket and pen slots',
    'Heavy-duty non-slip zippers guarantee quick action extraction'
  ],
  price: 15,
  isFeatured: false,
  inStock: true
}
```

---

## 🖼️ Image Sourcing & Guidelines

The website relies on high-quality, high-contrast, professional photography.
*   **Sourcing Principle**: Use clean, public, un-authenticated CDN links (Unsplash, etc.) that render instantly in sandboxed iframes.
*   **Markup Safeguard**: Always render images with JSX attribute `referrerPolicy="no-referrer"` to bypass permission header limitations inside frames:
    ```tsx
    <img 
      src={product.imageUrl} 
      alt={product.name} 
      referrerPolicy="no-referrer" 
      loading="lazy"
    />
    ```
*   **Visual Strategy**: Utilize a healthy mixture of actual product focus and industrial context (labs, surveyors climbing, field exploration camps) to represent heavy-duty performance.

---

## 🧭 Routing & Navigation

Routing is accomplished on the client-side via simple path string states in the parent `App.tsx` layout structure.
*   `currentPath === '/'` -> Main homepage consisting of company profile, category directory grids, trusted brands, "Why Quartzite" features, and the primary contact quotation area.
*   `currentPath.startsWith('/categories/')` -> Dynamic loading of the `CategoryDetail.tsx` page template.
*   **Header Link Integration**: Clicking category navigation paths automatically extracts the slug from the path (e.g. `/categories/lab-equipment` is parsed in `App.tsx`), updates the path state, and shifts screen focus to the respective `CategoryDetail` view.
*   **Anchor Scrolling**: Path updates that start with hashes (e.g., `#contact`) automatically trigger fluid smooth-scrolling behavior to move the user straight down to specific form targets.

---

## 🛒 Enquiry & Basket State Synchronization

Inside `CategoryDetail.tsx` is an built-in **Enquiry Basket State Engine**:
1.  **Add to Enquiry**: Appends the target product name into local React state arrays.
2.  **Form Prefill**: Automatically locates the global contact form message area (via `document.getElementById('message')`), appends the selected item into the quotation description text-field, and dispatches dynamic inputs to let React synchronize state variables.
3.  **Floating Action Bar**: Displays an interactive bottom bar whenever one or more products are in focus, leading users instantly to finalize their corporate quota requests.

---

## 🛠️ Validation and Verification Protocols

Before committing modifications:
1.  Run the linter to verify TypeScript types:
    ```bash
    npm run lint
    ```
2.  Build the applet to verify the bundler handles all component exports cleanly:
    ```bash
    npm run build
    ```
3. Ensure no trailing syntax symbols remain (e.g., leftover fragments like `];ck: true`).
