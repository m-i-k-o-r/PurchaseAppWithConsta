# Purchase

## Объяснение
В этом проекте для фронтенда была так же дополнительно использована библиотека компонентов Consta. 
Так же, в предыдущем проекте [PurchaseApp](https://github.com/m-i-k-o-r/PurchaseApp) был использован JOOQ и при запуске бэкенда мог понадобиться бубен (для генерации сущностей), поэтому было принято решение написать новый на старом добром JPA. НО они отличаются бэк из PurchaseApp и бэк из PurchaseAppWithConsta совершенно разные!

## Демонстрация работы приложения
[ссылка](https://youtu.be/hGG5vyJIT-w) на видеоролик

## Использованные технологии:

-   [Java](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
-   [Maven](https://maven.apache.org/download.cgi)
-   [Spring Boot](https://spring.io/projects/spring-boot)
-   [JPA](https://www.baeldung.com/learn-jpa-hibernate)
-   [Liquibase](https://www.liquibase.org/)
-   [PostgreSQL](https://www.postgresql.org/download/)
-   [Docker](https://www.docker.com/)
-   [Swagger](https://swagger.io/)
-   [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [React](https://react.dev/)
-   [Consta](https://consta.design/libs)

## Запуск приложения
Для запуска бэкенда необходим Docker. В папке purchase в терминале ввести  `docker-compose up` или просто запустить `docker-compose.yml`. Для тестирования можно использовать  [Postman](https://www.postman.com/downloads/)  или  [Swagger](http://localhost:8080/swagger-ui/index.html).
