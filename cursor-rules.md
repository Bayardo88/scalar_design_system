# Icon Usage Rules

1. DO NOT generate raw SVG code (e.g. <svg>...</svg>) for icons.
2. DO NOT use 'lucide-react' or other uninstalled libraries.
3. ALWAYS use Google Material Symbols.
4. When you see an icon in the Figma design, identify its name (e.g. "search", "menu", "arrow_forward") and implement it using the class name format.

# Implementation Example

Correct:
<span class="material-symbols-outlined">search</span>

Incorrect:
<svg viewBox="0 0 24 24"><path d="..."/></svg>

