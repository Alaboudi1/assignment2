# Introduction:
This assignment is designed to deepen your practical understanding of modern authentication technologies by focusing on two core objectives. The first is the implementation of Sign-In with Google using OAuth2/OpenID Connect. This task is aimed at enabling a secure and seamless authentication process by allowing users to log in with their Google accounts. The second objective is to incorporate WebAuthn for passwordless authentication. Together, these tasks underscore the advancement of your skills and knowledge in applying state-of-the-art authentication methods in real-world applications.

### The current authentication system uses a password-based method. To run it:
1.	Navigate to the 'authentication_System' folder using the terminal.
2.	Enter npm i to install necessary packages.
3.	Enter npm run start to start the system.
4.	Review and familiarize yourself with the code for a better understanding.
This is assignment folder that you need to modify to accomplish task 1 and task 2.





## Task-1 (7 points): Implement Sign-In with Google (Continue with Google):
In this task, you are tasked with integrating the 'Sign-In with Google' feature into a web application. This requires the use of OAuth2/OpenID Connect protocols to facilitate user logins via Google accounts, emphasizing a secure and efficient authentication process backed by Google's extensive security infrastructure.
### Instructions:
1.	Refer to the class slides/lab for detailed guidance on implementing OAuth2 with Google.
2.	When creating a Google Developer Console, ensure you download your Google secrets and store them in the client_secret.json file inside assignment 2/oauth2 example folder.
3.	Familiarize yourself with the OAuth2 example code in the lab.
4.	Implement  Sign-In with Google (no sign-up needed).
5.	Integrate the Sign-In with Google implementation into the 'assignment2' project folder, ensuring it works seamlessly with the existing application structure.

### Grading Instructions:
Grading will be based on the successful integration of the 'Continue with Google' (also known as sign-in with google) feature. Users should be able to sign in using their Google credentials. Full points will be awarded if the feature functions as intended. Incomplete or incorrect implementations will result in a deduction of at least 4 points, based on the quality and competence of the code submitted.
Here are screenshots demonstrating how the program should operate upon successful implementation of the feature. These images serve as a visual guide for the expected functionality and user interface design.



<img width="414" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/23e76144-c3a0-4ab9-bba0-86e2b2b6a61e">



<img width="527" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/e84ef9ce-f0cc-492e-a987-4be8a7155b06">



<img width="828" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/2fb8cc9d-02ba-4871-b7aa-d988b04383c1">








## Task-2 (8 points): Implement WebAuthn (Sign-In / Sign-Up with Passkeys):

In this task, you are asked to implement Webauthn for a passwordless authentication experience in the web application. Webauthn (Web Authentication) is a modern web standard that allows servers to authenticate users through public key cryptography instead of traditional passwords. This task aims to provide a more secure and user-friendly authentication method, leveraging biometrics as passkeys for authentication.

### Instructions:

1.	Study the class slides and make sure you understand the webauthn flow.
2.	Familiarize yourself with the webauthn example code in the lab. 
3.	Implement both Sign-Up and Sign-In functionalities using Webauthn in the web application. Ensure that the authentication process supports passkeys, such as security keys or biometric authentication.
4.	Test the functionality thoroughly in the provided example to ensure you undersand hwo the sign-up process registers a new user and the sign-in process authenticates the user with the passkey.
5.	Integrate the WebAuthn implementation into the 'assignment2' project folder, ensuring it works seamlessly with the existing application structure.

### Grading
For this task, grading will be based on the successful implementation of the WebAuthn-based Sign-In and Sign-Up processes. Full points will be awarded for a fully functional implementation. In cases of a nonfunctional implementation, a deduction of 25 points will be applied. Additional deductions may occur if the code deviates significantly from the correct implementation.
Here are screenshots demonstrating how the program should operate upon successful implementation of the feature. These images serve as a visual guide for the expected functionality and user interface design.

### signup
<img width="540" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/43ad6b50-342d-4eb2-bd69-6733506b4b3b">

<img width="450" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/7afe0806-a0ef-4b4e-88f9-a117e8357191">


<img width="800" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/18bdb0d8-4e45-450d-bfee-1eb7f28459e3">
 


### login

<img width="540" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/b8bdb99b-9235-4db7-a41e-2cc388252d76">

<img width="450" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/76833266-5332-4fb0-bd9c-fb0797163621">

<img width="800" alt="image" src="https://github.com/Alaboudi1/assignment2/assets/16814184/2b6b7070-1c20-42a9-8821-664150e5c063">

## Submission:
Please ensure to test and verify the functionality of your code on all team members' computers before submission. It is crucial that the implementation works across different systems. If the submitted code fails to work correctly on my computer, points will be deducted accordingly. Please only submit your final code in authentication_System folder. No other document is needed.


### Troubleshooting:

If running npm i is not working, here are a few solutions to troubleshoot the issue:
•	Delete the 'node_modules' Folder and Reinstall: Sometimes, the existing 'node_modules' folder can cause conflicts. Delete this folder and then run npm i again to reinstall the packages.
•	Use Sudo (For Linux or MacOS): Permission issues can prevent npm from installing packages. On Linux or MacOS, you can use sudo to run the command with administrative privileges. sudo npm I.
•	Restart Your Computer.


### If you have any other problems, please try to search the internet for answer before asking me.



## Bonus Section (1 points): Implementing OAuth2 with Providers Beyond Google
In addition to the core tasks, there is an opportunity to earn bonus points by implementing OAuth2 authentication with a service provider other than Google. This extension to the assignment is designed to challenge and enhance your understanding of OAuth2 protocols and their application with various service providers. This is extra work and I do not expect all of you to do it. Please if you decide to do it, be aware that I will not answer any questions regarding the Bonus.


