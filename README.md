# Accenture Take Home Task - Judd Guy
This project aims to display items in a JSON array following a wireframe, both of which provided were provided by Accenture.

# Assumptions and Considerations 
Some areas in the task outline were not specified, so the following were assumptions and considerations were applied
* The JSON data must remain unchanged from what was provided. Attribute values and types were not to be changed from what was provided
* When search terms and filters were applied, strictly items that matched all criteria were presented.
* The drink type filter would be all inclusive (users can select more than 1 drink to filter by)
* Given the size of the data and the wireframe provided, a max of four (4) items per row were provided
* Text search would only be applied to the name, type and price fields
* Price strings would always start with '$' and the number would be in a parseable format
* The site would be a single page site

# Additional Information
This project was developed using `yarn` as the package manager, Node version 16 and was tested Google Chrome.
It is recommended that these are used to run the site and inspect the product in browser.
The default `README.md` created when creating a react app can be found within the `client` folder.

# Setup and Testing
To run the site, please follow these steps:
1. From the root folder, change directory to the `client` folder - `cd client`
2. Install dependencies - `yarn`
3. Start the site - `yarn start`
4. By default, the site will be available at (localhost:3000)
5. To run unit tests, run `yarn test`
