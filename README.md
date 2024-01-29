this is a new type of CMS, might not work :


# theme colors

create folder and file in your theme folder as followed

@/theme/[themeName]/css/theme.css

add the default tailwind classes to use tailwind in your theme

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

add :root colors for default colors
```css
:root {
    --primary: [hashColor];
    --secondary: [hashColor];
    --accent: [hashColor];
    --background: [hashColor];
    --text: [hashColor];
}
```
dont use ' or " for the hash color otherwise it wont work