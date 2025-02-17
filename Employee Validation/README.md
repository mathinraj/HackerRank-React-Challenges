
# 

# Employee Validation

Your task is to create a React app that helps employees validate and update their existing information through a survey form. The application requirements are detailed below, and the finished application must pass all of the unit tests.

![image](https://s3.amazonaws.com/hr-assets/0/1729723881-648947a309-Untitledvideo-MadewithClipchamp-ezgif.com-optimize.gif)

  

**Detailed Requirements**

1.  The EmployeeValidationForm component collects employee details through four input fields: Name, Email, Employee ID, and Joining Date.
2.  Each input field should have validation logic to ensure that the data entered meets the specified requirements.
3.  A Submit button should be present at the bottom of the form but remain disabled until all fields are valid.
4.  If a field does not meet the criteria, an error message should be displayed below that field.
5.  When the form is valid and submitted, all input fields should be cleared, and the form should be reset to its initial state.

  

**Validation Criteria**

-   Name Field: Must be at least 4 characters long and can only contain alphabetical characters (A-Z, a-z) and spaces.
-   Email Field: Must be in a valid email format (e.g., user@example.com).
-   Employee ID Field: Must be exactly 6 numeric digits.
-   Joining Date Field: Cannot be set to a date in the future.

  

**Error Messages**

-   Name: "Name must be at least 4 characters long and only contain letters and spaces."
-   Email: "Email must be a valid email address."
-   Employee ID: "Employee ID must be exactly 6 digits."
-   Joining Date: "Joining Date cannot be in the future."

  

**Form Submission Requirements**

-   Form State Reset: Upon successful form submission, all fields should be cleared, and the form should revert to its initial state.
-   Submit Button: Should only be enabled when all input fields are valid.

  

**Sample Interaction**

**Initial State**

1.  All input fields are empty.
2.  The Submit button is disabled.
3.  Error messages are displayed below each empty input field.

**User Action 1**

1.  The user types "John" into the Name field.
2.  The error message below the Name field disappears if it meets the criteria.
3.  The Submit button remains disabled as not all fields are valid.

**User Action 2**

1.  The user types "john.doe@example.com" into the Email field.
2.  The error message below the Email field disappears if it meets the criteria.

**User Action 3**

1.  The user enters "123456" in the Employee ID field and selects a Joining Date that is not in the future.
2.  All input fields are now valid, and the Submit button becomes enabled.

**User Action 3**  1. The user clicks the Submit button. 2. All input fields are cleared, the Submit button is disabled, and the form resets to its initial state.