# Tab Component Task

First time attempting to develop a tab component. Using react (see package.json for dependencies).

**Given:** I am a site user  
**When:** I click on a tab  
**Then:** Then the related block should be shown  
**And:** Any other open tabs should be closed

**Given:** I am a site user  
**When:** I click on a tab  
**Then:** That tab should be marked as active

**Given:** I am a site user  
**When:** I view the component  
**Then:** I want it to render appropriately on whatever device I am currently using

### Run Instructions

```
git clone https://github.com/MandSolo/tab-component.git
npm install
npm start
```
### Acknowledgements

Barney at code :)

And a bit of inspiration from this: https://www.w3schools.com/howto/howto_js_tabs.asp

All filler text from:
https://www.bobrosslipsum.com/

### SOME THOUGHTS FOR FUTURE MAND!!!
Use media queries to make sure it looks good on small screens. Maybe design for mobile first?
Suggested tab titles are terminal 1, terminal 2 and terminal 3 with directions in each tab. Maybe use lorem ipsum to fill the text for now?
Do I need a json file with the text content of each tab? How would his be imported and passed down? Can I do it without?
