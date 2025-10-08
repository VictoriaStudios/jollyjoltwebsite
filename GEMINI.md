#Gemini Rules

##Objectives
- This is a pure react router website for Jolly Jolt Games, my indie game developer brand
- This website is supposed to showcase cyurrent games in development, as well as host terms and privacy documents
- The game will probably be published with Kwalee on the Google Pklay Store, so this needs to be accounted for in all documets
- All games are free to download and are monetized by IAP's and ads
- The Facebook/Kwalee SDK wil lbe itnegrated for CPI and other testing

##Coding Rules
- The language used is TypeScript
- The techstack is pure react and react router with css modules
- A conservative coding discipline is to be applied: The fewer variables and the shorter the scripts, the better
- Provide rich documentation in the form of comments when generating or editing code
- Use camelCase
- Use descriptive variable names such as "playerName"o or "terminalVelocity"
- local, nonexposed variables have a leading underscore
- use as few NPM dependencies as possible, prompt whenever you want to introduce a new dependency
- this probject will be deployed to gitlab's girtlab pages CI/CD pipeline; I have no experience with that
- use css modules and NO TAILWIND

##Page Layout
- a fake multi page site with react router
- components in /Components
- use the public directory for externally available things such as images
- favor simple flexbox over complex grid alignments
- make sure everything is mobile firendly, down to iphone 5 SE
- major colors: 
ec7530ff for main color
1db3e7ff for secondary color
3eb0a9ff for tertiary color
- make it easy to switch around these colros with global css variables, nothing fancy, functional
- The Logo.svg should be on the hero page
- The layout has a traditional horizontal menu with the a small logo followd by the items "HOME" "GAMES""TERMS OF USE""PRIVACY POLICIES""ABOUT US" 
    - The item "GAMES" of course then opens up a sub-menu on click where the example game will be found
