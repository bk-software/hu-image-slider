# Create Image slider 

# Step 1
We add html page took from bootstrap
https://getbootstrap.com/docs/5.2/getting-started/introduction/

# Step 2
We add a navbar from bootstrap template
https://getbootstrap.com/docs/5.2/components/navbar/#how-it-works
We remove links we don't need

# Step 3
Duplicate the index.html to about.html
We update the links to show the right page.
Home Page link - display the Homepage page.
About link - display the about page.
 
# Step 4 - Homepage clickable 
When pressing homepage link we display the hompage section and we hide the about page section.


# Step 5 - About page is clickable 
Duplicate the homepage link code and adjust it to the about page

# Step 6 - Move javascript code to app.js 


# Step 7 - We add function to remove of duplicate code
The function get a linkId and pageToHide and pageToShow
and show the right page

# Step 8 - Use currentPageId variable
- Hold the shown page in a variable currentPageId
- Hide the shown page using the variable currentPageId
- Show the page you want to display i.e about-page
- change the currentPageId with the new page

# Step 9 - Add news page 
- add news link
- add news div (page)
- call the function makeMenuLinkChangePage with the news page parameters

# Step 10 - Add static image and details
- Add the HTML for a single image and its details
- Set the various Bootstrap classes to enable flex, spacing, and font styles

# Step 11 - Add next and previous buttons
- Add the buttons
- Add Bootstrap `btn` and `btn-primary` classes to the buttons
- Create `slider.js`
    - Array of `pictureData`
    - Functions to move the current picture forwards/backwards and re-render
    - Register the functions to the `click` event of the buttons

# Step 12 - Create table view
- Create a static HTML table
- Setup the table layout



