#React-Redux-Firebase
this project is about an admin page so control the data (CRUD operations) and Authentication using Mobile verfication 

I used a sotre folder to put all the logic in it and make the components dummy as possible and it is the store of course that handle all Redux and Thunk.

in the store folder:
    1- index.js is the Redux store.
    2- ui-slice.js , edit-Id-handler.js , data.js , loading.js and auth.js all are the reducers and actions using redux toolkit.
    3- auth-actions.js and fetch-actions.js are the Redux Thunk which handle async code.
    4- in each file there is a comment to describe which for this file.

the authentication and mobile verification using Firebase 
All the CRUD operations logic in data.js in store folder

in the hooks folder:
1- is just file upload custom hook and to the file in Firebase Storage

in the UI folder:
1- spinner loading 
2- Not Found page 
3- Notifications
