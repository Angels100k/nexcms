this is a new type of CMS, might not work :

# Database

## mysql
download the database from https://nexjscms.com/db/download

create new database in your mysql

import the downloaded database in your mysql

## env
Copy the .env.example to .env

### Windows (Command Prompt)
```
copy .env.example .env
```
### Windows (PowerShell)
```
Copy-Item .env.example -Destination .env
```
### macOS (Terminal) and Linux (Bash)
```
cp .env.example .env
```
edit the DATABASE_URL to your mysql database

# setup own theme

## Fields setup

To use fields in your theme you have to create them, once you've inistiated your theme and activated it you need to go to http://localhost:3000/admin/settings/fields and create your fields that you'll be using in the components page for your components

## component setup
to create components in the application add folder to
@/theme/[themeName]/component
in there you can create all your components



for possible atoms (like button)
create folder
@theme/[themeName]/component/atom

## custom css setup

create folder and file in your theme folder as followed

@/theme/[themeName]/css/theme.css

In here you can use your css as you please, use the @apply in your classes to use tailwind classes

## color setup
Go to your admin -> settings -> theme -> colors 

In here you can use the color picker or the input field to add your colors to the system

```css
    --primary
    --secondary
    --accent
    --background
    --text
```

## Globals

Currently there are 2 globals. both globals are required or the website will not work.

### Nav
### Footer

@/theme/[themeName]/global/nav.tsx
@/theme/[themeName]/global/footer.tsx