

# Sakn's Edits — Splash Screen & Coming Soon Page

## Splash Screen
- **Dark navy/charcoal background** (`~#0f1117`) matching the reference image
- **Centered blue rounded-square icon** with a terminal/code symbol (`>_`) inside
- **Text below**: "**sakn's** edits" — "sakn's" in blue, "edits" in white, clean sans-serif font
- **Wavy entrance animation** — icon and text animate in with a smooth wave/scale/bounce effect on page load
- **Auto-fade out** after ~2.5 seconds

## Coming Soon Page
- Same dark background for seamless transition
- Large centered "Coming Soon" text, minimal and clean
- Smooth fade-in as splash screen fades out

## Flow
1. Page loads → splash screen animates in with wavy motion
2. ~2.5s later → splash fades out, "Coming Soon" fades in
3. All handled in the Index page with React state + CSS animations

