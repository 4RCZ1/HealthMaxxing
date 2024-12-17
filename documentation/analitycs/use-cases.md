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
|<a id="healthDocumentation">Health documentation</a>|E.g. blood tests results, MRI results|
|<a id="managing">Managing</a>|Includes chosen elements from CRUD (depends on case)|

## Use cases

### General

#### Use case 1: Account login
User opens the app. User enters their [login ID](#userLogin) and [login key](#userKey) into system. System positively verifies the user. User logs in to app.
#### Use case 2: Account logout
User is logged in to app. User chooses to log out. App asks if the user is sure of that decision. User confirms their decision. User is being logged out.
#### Use case 3: Change app setting
User goes to the "settings" section. User chooses the setting they want to change. User sets the parameters and confirms changes.

### Patient oriented

#### Use case 4: Patient account sign up
Patient opens the app. Patient chooses to sign up. Patient enters unused [email address](#userLogin), valid [password](#userKey) and then repeats it. Patient confirms their choises and then system sends and email message. Patient verifies their email address. Patient logs in to app.
#### Use case 5: Patient account recovery
Patient chooses to recover their account. Patient provides an email address assigned to their account. System sends a recovery email message. Patient uses the message, sets new valid [password](#userKey) and confirms it. User logs into app.
#### Use case 6: Patient managing position on medication list
Patient enters "medication" section. Patient chooses one position from the medication list and [manages](#managing) it. Patient confirms all changes.
#### Use case 7: Reminder managing
Patient enters "reminders" section. Patient chooses one reminder and [manages](#managing) it. Patient confirms all changes.
#### Use case 8: Medication intake marking
Patient enters "reminders" section. Patient marks a dosage as taken.
#### Use case 9: Health parameter record adding
Patient enters "[health parameters](#healthParameters)" section. Patient gives necessary information and confirms addition.
#### Use case 10: Patient adding supporting user
Patient A enters "[supporting user](#supportingUser)" section. Patient A invites patient B to be their supporting user. Patient B accepts the invitation.
#### Use case 11: Patient managing supporting user
Patient enters "[supporting user](#supportingUser)" section. Patient [manages](#managing) supporting users. Patient confirms changes.
#### Use case 12: Health documentation managing
Patient enters "[health documentation](#healthDocumentation)" section. Patient [manages](#managing) their health documentation. Patient confirms changes.
#### Use case 13: Urgent help signaling
Patient opens the app. Patient selects Urgent Help option. System sends an information to the nearest medical facility.
#### Use case 14: Patient-doctor messaging

#### Use case 15: Virtual pet customization
#### Use case 16: Virtual pet interaction
#### Use case 17: Change login settings


### Doctor oriented

#### Use case 17: Doctor managing position on medication list
#### Use case 18: Assigning non-medical recommendation
#### Use case 19: Assigning a patient
#### Use case 20: Accessing a patient's medication\parameter record
#### Use case 21: Accessing a patient's documentation
#### Use case 22: Adding patient's documentation
#### Use case 23: Accessing a patient's record
#### Use case 24: Doctor-patient messaging

### Med. Facility Admin oriented

#### Use case 25: Doctor account sign up
#### Use case 26: Doctor account recovery
#### Use case 27: Doctor account suspension
