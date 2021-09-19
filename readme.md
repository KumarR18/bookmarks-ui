# BookMark

This project was created using Stencil.js with Redux Thunk, can be used to manage bookmarks.

## Available Scripts

In the project directory, you can run:
 
### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3334](http://localhost:3334) to view the FrontEnd on the browser. <br />

This simultaneously runs the json server.<br />
Open [http://localhost:8080/bookmarks](http://localhost:8080/bookmarks) to view the JSON on the browser. <br />

For toast notification 'Sweetalert2' [https://sweetalert2.github.io/](https://sweetalert2.github.io/) is used.<br />



### `npm run test.watch`

Launches the test runner in the interactive watch mode.<br />


## Application functionality.

* Allows the user to enter name, link(valid url) and tags. On click of Add button, bookmark is added to the table with a nice confirmation popup.
* The table shows the latest entry on the top.
* The filter field allows the user to filter bookmarks by tags.
* On click of delete button, a popup is displayed to get the confirmation to delete the bookmark.
* On confirming, bookmark gets deleted from the table.

