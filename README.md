# Gadget Grammar

## Tech Stack

- Vue 3
- Boostrap 5 (for styling) - https://getbootstrap.com/docs/5.0/getting-started/introduction/
- NodeJS
- MongoDB

## Branching Strategy
Let's go with a fairly standard branching strategy used in most agile based teams.

Everytime we go to make a change, we should create a new branch from main - even if it is something as simple as fixing a typo. This will ensure that every change we make across our whole group will make its way into our final product. It will also minimize the risk of us from having any merge conflicts when we go to merge a completed feature into main.

Once you have completed the task/feature you are working on, and have ensured it works without bugs, open a pull request and merge it into the main branch. This repo is set-up so that you can't push directly to main, so opening a pull request is the only way to merge - this will help make sure that everyone is aware of changes being made.

Another good thing to get into the habit of is pulling and pushing code. When you sit down to work on something, pull from the repo to ensure you have the most up to date code (you may need to run `npm install` if someone has added a new dependency. When you are done with your coding session, commit and push all of your changes so that everyone else has access to it - even if your feature isn't complete. This will help ensure that even if you are just taking a break for the night, that everyone else can still access it and pick up where you left off if needed.

As we get deeper and deeper into the project, the README files in some of the branches may not match exactly due to when a branch was created. Always reference the README on the main branch as that is the one that will always be up to date.

## To Run the Project:

1. Open split terminals in VS Code. In one terminal, cd into `api` and in the other, cd into `Gadget-Grammar`
2. Run `npm install` in each terminal
3. In `Gadget-Grammar` run `npm run dev`

## Project Structure

## Api

- This is all the backend code. Nothing exists yet so it won't run anything

### Future Features
- Develop endpoint to retrieve a word from the database
- Develop endpoints for user authentication and account creation

## Gadget-Grammar

- This is all the frontend code.
- Our game board is separated into components:
  - GridSquare - a singular tile in our grid that will hold a letter value and a state value to determine how it is rendered
  - Grid - The entire grid that will contains rows of GridSqaures. We will also probably handle keyboard input here
- Router handles the URL and displays pages based on what is in the URL
- For authentication, we can use PassportJS or any other authentication library we may come across

## Possible Issues
- Where will we host? Frontend should be easy as we can host for free on github pages. What about backend? Heroku is easy to use, though not free (can always put on Preston's if needed)
- Some hosting platforms do not allow you to set cookies on their free domain. Cookies will be required for storing user authentication state during a session (or use local storage?). We can CNAME a subdomain on Preston's domain if needed (no cost since I already have one)
