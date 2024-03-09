## Byte the Budget React Components Structure

The Byte the Budget project organizes React components into a structured folder hierarchy to improve code organization and maintainability. Below is an overview of the component structure:

### Folder Structure
   ```
   /src
  /components
    /common        // Commonly used components
      Header.js
      Footer.js
      Button.js
    /auth          // Components related to authentication
      LoginForm.js
      SignupForm.js
    /dashboard     // Components for the user dashboard
      Dashboard.js
      AccountList.js
      TransactionHistory.js
    /profile       // Components for user profile management
      UserProfile.js
      ChangePasswordForm.js
    /settings      // Components for user settings
      Settings.js
      NotificationPreferences.js
    /budget        // Components for budget management
      BudgetOverview.js
      ExpenseChart.js
      SavingsTracker.js
    /shared        // Shared components used across different sections
      Modal.js
      LoadingSpinner.js
 ```

### Description

- **`common`**: Contains reusable components used throughout the application, such as Header, Footer, and Button.

- **`auth`**: Contains components related to authentication, such as LoginForm and SignupForm.

- **`dashboard`**: Contains components specific to the user dashboard, such as Dashboard, AccountList, and TransactionHistory.

- **`profile`**: Contains components for user profile management, such as UserProfile and ChangePasswordForm.

- **`settings`**: Contains components for managing user settings, such as Settings and NotificationPreferences.

- **`budget`**: Contains components related to budget management, such as BudgetOverview, ExpenseChart, and SavingsTracker.

- **`shared`**: Contains shared components that are used across different sections of the application, such as Modal and LoadingSpinner.
