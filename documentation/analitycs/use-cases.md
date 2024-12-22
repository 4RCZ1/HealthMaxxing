# Short use cases description

## System goals
#### Patient oriented:
- setting reminders
- medication usage tracking
- health parameters tracking
- easy patient-doctor communication
- supporting users setting
- "tracker" switch for supporting users
- **SAVE** health documentation record
- self-managed medication and supplementation list
- doctor-managed medication and supplementation list
- virtual pet interaction
- virtual pet customization
- urgent help signal
- self-made account sign up
- self-made account recovery

#### Doctor oriented:
- medication treatment leading
- patients' health documentation access
- doctor-patient communication
- patients' medication usage tracking access
- patients' health parameters tracking access
- patient to doctor attribution

#### Medical Facility Admin oriented:
- doctors' account sign up
- doctors' account recovery
- doctors' account suspension

#### General:
- bugs reporting
- login\logout


## Actors

- User
  - General purpose actor
- Patient
- Patient's Supporting User
  - For the sake of use cases, treated as Patient
- Doctor
- Medical Facility Admin
- System Admin

## Dictionary
| **Entry** | **Description** |
|-----------|-----------------|
|<a id="userLogin">User login ID</a>|E.g. email address, ID given by medical facility|
|<a id="userKey">User login Key</a>|E.g. password, generated personal key, certificate file|
|<a id="medicationIntake">Medication intake</a>|One instance of taking medication|
|<a id="healthParameters">Health parameter</a>|E.g. blood pressure, sugar level|
|<a id="supportingUser">Supporting user</a>|Another user allowed to help with patient's account, "second user" for the same patient account|
|<a id="healthDocumentation">Health documentation</a>|E.g. blood tests results, MRI results, diagnosis|
|<a id="managing">Managing</a>|Includes chosen elements from CRUD (depends on case)|
|<a id="vpet">Vitual Pet</a>|An agent, whose status is dependent on patient's performance. Different pets have different characteristics and behaviors.|

## Use cases

### General

#### Use case 1: Account login
User opens the app. User goes to their [login ID](#userLogin) and [login key](#userKey) into system. System positively verifies the user. User logs in to app.
#### Use case 2: Account logout
User is logged in to app. User chooses to log out. App asks if the user is sure of that decision. User confirms their decision. User is being logged out.
#### Use case 3: Change app setting
User goes to the "settings" section. User chooses the setting they want to change. User sets the parameters and confirms changes.

### Patient oriented

#### Use case 4: Patient account sign up
Patient opens the app. Patient chooses to sign up. Patient goes to unused [email address](#userLogin), valid [password](#userKey) and then repeats it. Patient confirms their choises and then system sends and email message. Patient verifies their email address. Patient logs in to app.
#### Use case 5: Patient account recovery
Patient chooses to recover their account. Patient provides an email address assigned to their account. System sends a recovery email message. Patient uses the message, sets new valid [password](#userKey) and confirms it. User logs into app.
#### Use case 6: Patient managing position on medication list
Patient goes to "medication" section. Patient chooses one position from the medication list and [manages](#managing) it. Patient confirms all changes.
#### Use case 7: Reminder managing
Patient goes to "reminders" section. Patient chooses one reminder and [manages](#managing) it. Patient confirms all changes.
#### Use case 8: Medication intake marking
Patient goes to "reminders" section. Patient marks a dosage as taken.
#### Use case 9: Health parameter record adding
Patient goes to "[health parameters](#healthParameters)" section. Patient gives necessary information and confirms addition.
#### Use case 10: Patient adding supporting user
Patient A goes to "[supporting user](#supportingUser)" section. Patient A invites patient B to be their supporting user. Patient B accepts the invitation.
#### Use case 11: Patient managing supporting user
Patient goes to "[supporting user](#supportingUser)" section. Patient [manages](#managing) supporting users. Patient confirms changes.
#### Use case 12: Health documentation managing
Patient goes to "[health documentation](#healthDocumentation)" section. Patient [manages](#managing) their health documentation. Patient confirms changes.
#### Use case 13: Urgent help signaling
Patient opens the app. Patient selects Urgent Help option. System sends an information to the nearest medical facility.
#### Use case 14: Patient-doctor messaging
Patient opens the app. Patient goes to the "contact with Doctor" section. Patient chooses a doctor they want to send a message to. Patient enters a message and sends it. Patient goes out of the chat.
#### Use case 15: Virtual pet customization
Patient goes to "[virtual pet](#vpet)" section. Patient opens a customization panel and chooses items they want to use. Patient confirms their choice. App closes customization panel.
#### Use case 16: Virtual pet interaction
Patient goes to "[virtual pet](#vpet)" section. Patient clicks on the virtual pet. Virtual pet reacts accordingly to its characteristics.
#### Use case 17: Change login settings
Patient goes to "settings" section. Patient selects login settings. Patients changes the settings and confirms changes. Patient goes out the "settings" section.

### Doctor oriented

#### Use case 18: Doctor managing position on medication list
Doctor opens the app. Doctor goes to "[manage](#managing) patients" section. Doctor selects a patient and opens their panel. Doctor goes to "manage medication list" section. Doctor makes changes on the list and confirms them. Doctor goes out to "manage patients" section.
#### Use case 19: Assigning non-medical recommendation
Doctor opens the app. Doctor goes to "[manage](#managing) patients" section. Doctor selects a patient and opens their panel. Doctor goes to "recommendations" section. Doctor writes a non-medical recommendation and adds description. Doctor confirms the content of recommendation. System sends a notification about new recommendation to a patient. Doctor goes out of the "recommendations" section.
#### Use case 20: Assigning a patient
Doctor opens the app. Doctor goes to "[manage](#managing) patients" section. Doctor selects "assign new patient" option. Doctor enters necessary information to find a patient in the database. Doctor selects a patient and confirms the choice. System sends a message to the patient, informing of being assigned. Patient confirms assignment. Doctor opens the patient's panel.
#### Use case 21: Accessing a patient's medication\parameter record
Doctor opens the app. Doctor goes to "[manage](#managing) patients" section. Doctor selects a patient and opens their panel.
Doctor goes to "records" section. Doctor selects a medication\parameter to check. Doctor checks the record and closes the panel.
#### Use case 22: Accessing a patient's documentation
Doctor opens the app. Doctor goes to "[manage](#managing) patients" section. Doctor selects a patient and opens their panel.
Doctor goes to "documentation" section. Doctor selects a document to check. Doctor checks the document and closes the panel.
#### Use case 23: Adding patient's documentation
Doctor opens the app. Doctor goes to "[manage](#managing) patients" section. Doctor selects a patient and opens their panel.
Doctor goes to "documentation" section. Doctor selects "add document" option. Doctor selects a document to share with a patient and confirms the choice. System closes the option panel.
#### Use case 24: Doctor-patient messaging
Doctor opens the app. Doctor goes to the "contact with Patient" section. Doctor chooses a patient they want to send a message to. Doctor enters a message and sends it. Doctor goes out of the chat.

### Med. Facility Admin oriented

#### Use case 25: Doctor account sign up
#### Use case 26: Doctor account recovery
#### Use case 27: Doctor account suspension
