# backend-project

##Funzionamento 
L'app serve a gestire gli allenamenti degli utenti che si registrano ad essa e creano una scheda di allenamenti tramite le 

Per tesare il funzionamento dell'API REST è necessario utilizzare postman, e digitare l'url : localhost:3000/api/user/register

Per chiamare le funzioni dell'API bisogna registrarsi inserendo nome, email e password verrà effettuato un controllo sui dati inseriti tramite il pacchetto joi

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/register.PNG)

In seguito bisognera eseguire il login e verrà generato un token che andrà incollato nella sezione headers di postman sotto il nome di auth-token

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/login.PNG)

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/jwt.PNG)

Con il token nella inserito si potranno effettuare tutte le chiamate come ad esempio creare un allenamento

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/create.PNG)

una volta premuto invio l'allenamento sarà inserito all interno del database

![Scheme](https://github.com/azmi27-12/backend-project/blob/master/screenshoot/database.PNG)




