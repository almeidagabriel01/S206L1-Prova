Feature: GoRest API Test

Background:
  * url 'https://gorest.co.in/public/v2/'
  * def config = read("Token.json")
  * header Authorization = 'Bearer ' + config.token

Scenario: C1 - POST create a new user (Positive case)
  Given path 'users'
And request { name: 'Teste', email: 'teste@exemple.com', gender: "male", status: "active"}
  When method post
  Then status 201
  And match $.name == 'Teste'

Scenario: C2 - GET user details (Positive case)
  Given path 'users/5803719'
  When method get
  Then status 200
  And match $.id == 5803719
  And match $.name == 'Jane Doe'

Scenario: C3 - POST create a new post for a user (Positive case)
  Given path 'users/5803719/posts'
  And request { title: 'Teste', body: 'Exemplo' }
  When method post
  Then status 201
  And match $.title == 'Teste'

Scenario: C4 - PUT update a user's details (Positive case)
  Given path 'users/5803723'
  And request { name: 'Maria', gender: 'female', email: 'maria@example.com', status: 'active' }
  When method put
  Then status 200
  And match $.name == 'Maria'

Scenario: C5 - POST create a new user with invalid email (Negative case)
  Given path 'users'
  And request { name: 'Invalid User', gender: 'male', email: 'invalid_email', status: 'active' }
  When method post
  Then status 422
  And match $.message contains '#notpresent'