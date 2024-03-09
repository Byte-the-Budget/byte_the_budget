# Developer's Guide to Contributing to Byte the Budget

## Setup

`server/`

The server/ directory contains all of your backend code.

**app.py** is your Flask application. You'll want to use Flask to build a simple API backend like we have in previous modules. You should use Flask-RESTful for your routes. You should be familiar with **models.py** and **seed.py** by now, but remember that you will need to use Flask-SQLAlchemy, Flask-Migrate, and SQLAlchemy-Serializer instead of SQLAlchemy and Alembic in your models.

`client/`

The client/ directory contains all of your frontend code. The file **package.json** has been configured with common React application dependencies, include **react-router-dom**. The file also sets the proxy field to forward requests to `"http://localhost:5555"`. Feel free to change this to another port- just remember to configure your Flask app to use another port as well!

## Getting Started


1. **Fork the Repository**: Click the "Fork" button on the GitHub repository to create your own copy of the project.

2. **Clone the repository**:
`git clone git@github.com:Byte-the-Budget/byte_the_budget.git`

3. The project contains a default Pipfile with some basic dependencies. You may adapt the Pipfile if there are additional dependencies you want to add for your project.

   To download the dependencies for the backend server, run:
   ```
   pipenv install
   pipenv shell
   ```
   You can run your Flask API on `localhost:5555` by running:
   ```
   python server/app.py
   ```
   *Check that your server serves the default route http://localhost:5555. You should see a web page with the heading "Project Server".*

4. To download the dependencies for the frontend client, run:
   ```
   npm install --prefix client
   ```
   You can run your React app on `localhost:3000` by running:
   ```
   npm start --prefix client
   ```
   *Check that your the React client displays a default page http://localhost:3000. You should see a web page with the heading "Project Client".*


## Feature Development Workflow

1. **Create a New Branch**:

   * Verify current branch is `main`

     The git branch command will let you know what branch you are in, and what branch names are already in use.
     ```
     git branch
     ```
     You will see a list of all of your branches. There will be a star (*) next to the branch that you are currently in. By default you should start on the `main` branch.

     *Note: When you work on future issues, you must always be in the `main` branch when creating a new branch.*

     If you are not currently in the `main` branch, run the following command to return to it:
     ```
     git checkout main
     ```

   * Update your main branch with upstream changes
     ```
     git pull upstream main
     ```

   * Create a new branch for your changes using a descriptive name:
     ```
     git checkout -b feature-name
     ```

2. **Make Changes**: Implement your feature or make necessary changes to the codebase.

3. **Commit Changes**: Commit your changes with descriptive commit messages:
   ```
   git add .
   git commit -m "Add feature XYZ"
   ```

4. **Push Changes**: Push your feature branch to your forked repository:
   ```
   git push origin your-feature-name
   ```

5. **Create a Pull Request (PR)**: Go to the GitHub repository, switch to your feature branch, and click "New Pull Request." Fill out the PR template with details about your changes.

   ```
   # Pull Request

   ## Description

   Please include a brief description of the changes introduced by this pull request.

   ## Related Issue

   If this pull request addresses a specific issue, please reference it here.

   ## Changes Made

   List the changes made in this pull request:

   - Change 1
   - Change 2
   - ...

   ## Screenshots (if applicable)

   Include screenshots or GIFs showcasing the changes, if applicable.

   ## Checklist

   - [ ] My code follows the project's coding style guidelines.
   - [ ] I have tested my changes locally and ensured they work as expected.
   - [ ] I have added necessary documentation or updated existing documentation, if applicable.
   - [ ] I have assigned the appropriate labels to this PR.
   - [ ] I have assigned a code reviewer to review my changes.
   - [ ] I have addressed any feedback provided by the code reviewer.

   ## Additional Notes

   Add any additional notes or context about the changes made in this PR.
   ```

6. **Assign Labels**: Assign relevant labels to your PR, such as `enhancement`,`bug`, or any other applicable labels.

7. **Assign Code Reviewer**: Assign a team member as the code reviewer for your PR. This ensures that your changes are reviewed before merging.

8. **Code Reviewer Checks Your Changes**: The assigned code reviewer will review your changes, provide feedback, and approve the PR if everything looks good.

9. **Address Feedback (If Any)**: If there are suggested changes, address them in your local branch, commit the changes, and push them to your forked repository.

10. **Re-request Review (Optional)**: If necessary, re-request review after addressing feedback.

11. **Merge into main**: Once the code reviewer approves your changes, the branch will be merged into `main`. The branch will then be deleted.

## Code Style Guidelines

When contributing code to Byte the Budget, please adhere to the following guidelines:

- Follow the existing code style and formatting conventions.
- Write clear and concise code with descriptive variable names and comments where necessary.
- Test your changes thoroughly to ensure they work as expected.


## Questions or Need Help?

If you have any questions or need assistance with contributing to Byte the Budget, feel free to reach out to the project maintainers or open an issue on GitHub. We're here to help!

Thank you for your interest in contributing to Byte the Budget. Together, we can make personal finance management easier and more accessible for everyone!
