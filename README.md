# backend-project

##Funzionamento 

Per tesare il funzionamento dell'API REST è necessario utilizzare postman, e digitare l'url : localhost:3000/api/user/register

Per chiamare le funzioni dell'API bisogna registrarsi inserendo nome, email e password verrà effettuato un controllo sui dati inseriti tramite il pacchetto joi

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/register.PNG)

In seguito bisognera eseguire il login e verrà generato un token che andrà incollato nella sezione headers di postman sotto il nome di auth-token

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/login.PNG)

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/jwt.PNG)



