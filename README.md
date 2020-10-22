## Backend points
https://watertheplants.herokuapp.com/api/auth/register
Jonathan Stickrod  18:17
login: https://watertheplants.herokuapp.com/api/auth/login register: https://watertheplants.herokuapp.com/api/auth/register

Ben Dennett  18:20
get/post: https://watertheplants.herokuapp.com/api/plants (edited) 
18:22
put/delete: https://watertheplants.herokuapp.com/api/plants/:id   
Slightly cuter and more complete version of plant endpoints: https://documenter.getpostman.com/view/12284941/TVYC9KV7 (edited) 


## Front end
### What my plants Project ###
## ☝️
WaterMyPlants will remind users when it's time to feed that foliage and quench your plants' thirst.



## ☝️ **Pitch**

Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, WaterMyPlants will remind users when it's time to feed that foliage and quench your plants' thirst.

## ✅  **MVP**    

**Web & iOS**

1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 
2. `user` can login to an authenticated session using the credentials provided at account creation / signup.
3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
4. Authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 
5. Authenticated `user` can update their `phoneNumber` and `password`.
6. **( iOS only )** User can employ the camera to capture a photo of their plant, collecting image data and pushing it to the API for "create a plant" flow. Still can be optional.
7. (**iOS only)** Set up application to allow local notifications.
8. Authenticated `user` can update their `phoneNumber` and `password`.

## 🏃‍♀️ **Stretch**

1. Authenticated `user` can set up push notifications to be triggered when an `h2oFrequency` of any `plant` arrives / has elapsed. 

2. Implement a feature that allows an authenticated `user` to see an appropriate suggested `h2oFrequency` based on `species` using the API of your choice. 

3. Authenticated `user` can upload `image`s of a `plant`. If no user `image` is provided, a placeholder `image` of a plant of the same `species` populates the view.



## Deploy on heroku 


Install the Heroku CLI

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login

Create a new Git repository

Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a water-the-plants-app

Deploy your application

Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master

You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here.
Existing Git repository

For existing repositories, simply add the heroku remote
says its here 

$ heroku git:remote -a water-the-plants-app

 https://water-the-plants-app.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/water-the-plants-app.git
