# ![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) WDI_LDN_PROJECT3

Group MEAN stack project

# GA WDI-32 Project 3 - CRAVE Angular Web Application

For our third project, we decided to build a MEAN stack web application called "CRAVE".

"CRAVE's" target audience are those users,  who are in need of food desperately, after a night out.  The app plots relevant restaurants, onto a users given route/map, depending on how emotional they are feeling:

- Hammered (kebab)
- Hungover (cafes)
- Hardworking (takeaway)
- Hangry (fast food)

##### The app utilises the following technologies:

- AngularJS to allow us to use an MVC framework and updating the state without redirecting the user/reloading the page.
- Angular-messages to run flash messages.
- Balsamiq for wireframing.
- Bluebird for Promises.
- Body-Parser for parsing form data.
- Bulma for styling.
- Express to enable a fully RESTful register, login and profile edit/update process
- GitHub to manage version control.
- Google Maps API - calling these main services: Directions Render, Directions Service, Places Service.
- Heroku to host our final web application.
- JSONWebToken, BCrypt and Satellizer to securely store user passwords.
- Mocha - the test runner, Chai - for assertion libary, nyc - test coverage reporter.
- MongoDB to store our user database/credentials.
- Node.js - to allow us to run our app on a local server.
- SASS for nested styling.     
- Snazzy Maps for Google Map styling.
- Trello to create, submit and manage user stories and manage workflow using Agile methodology.
- UIRouter to allow for state changes.

##### The app is produced with a mobile first experience in mind, so please [visit](https://app-crave.herokuapp.com/) if you're craving food.

*Please be aware that Heroku apps go to sleep after 30 mins of inactivity and may take a little time to load*

---

###### The app loads with Google Maps in view and the user's navigation menu at the bottom of the browser window, making it clear using an animation, that the user can interact with it.

<p align="center">
<img src="https://i.imgur.com/HyA2Gm0.jpg" height="400">
<img src="https://i.imgur.com/Z0DG7Kj.jpg" height="400">
<img src="https://i.imgur.com/1WJ7vBg.png" height="400">

</p>


###### The user can then choose their start point via Google geolocator, or via autocomplete, if this functionality fails.  And then choose their destination, emotional state, followed by travel mode.

<p align="center"><img src="https://i.imgur.com/J1GC2uG.png" height="400"></p>

###### We then utilise Directions Service and Directions Render, to create a polyline from the users origin/destination route and Places Service to plot, the filtered pins/places.  These are sorted by whether the restaurants are open at the time of search.

###### The user can also interact with each pin, by clicking and an info window appears, with relevant data.

###### We then call Directions Render again, to display turn by turn instructions, which our user can also interact with and see where they are on their chosen route.


<p align="center">
<img src="https://i.imgur.com/L2eHbdw.jpg" height="400">
<img src="https://i.imgur.com/f4O7132.jpg" height="400">
<img src="https://i.imgur.com/YGLZyKM.jpg" height="400">
</p>



###### For regular users of the app, they can register and create an account securely, to store their home and work address, which appear in the user's navigation panel, if logged in.

###### Also, once logged in, the user can edit their home address, work address and username at any time.

<p align="center">
<img src="https://i.imgur.com/us1563V.png" height="400">
<img src="https://i.imgur.com/3LY2NfJ.jpg" height="400">
</p>

---

###### Installation Instructions
- You'll need run your yarn package manager, to run the necessary dependencies which are already listed in the package.json.

---


###### Enhancements:
Further enhancements we would make, would be to plot the users location on the map, for a better user experience.  And also build a 'clear button', into the application, allowing the user to restart their search, if they make a mistake.

We also didn't have time to explore, plugging in additional APIs, such as Uber to present the user with cab fares.

'Could's' we didn't have time to develop:
- Saving a user's route history.
- Following the users movements using GPS functionality.

'Would's' we didn't have time to develop:
- Follow mates on Crave.
