### Main Screen

_As a user, I want to see the details page of a psychologist._
#### Scenario 1 - Details Page
    Given that the user wants to enter the main screen
    When he click on "Ver perfil completo"
    Then he should be redirected to the psychologist's details page


### Details Page

_As a user, I want to schedule an appointment.._
#### Scenario 2 - Schedule an appointment
    Given that the user wants to schedule an appointment
    When he select the time and date on the psychologist's details page
    And click the "Confirm and schedule" button
    Then a card with the appointment details should appear

<br><br>

_As a user, I want to leave the details page._
#### Scenario 3 - Leave the details page
    Given that the user wants to leave the details page
    When they click on "Retornar à Lista"
    Then they should be redirected to the main page