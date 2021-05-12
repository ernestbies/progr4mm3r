const knowledge = {
    frontend: {
        name: 'Frontend',
        color: '#00ACEE',
        image: 'images/knowledge/frontend.png',
        technology_stack: ['JavaScript', 'HTML', 'CSS', 'React', 'React Native', 'Java', 'NetBeans IDE', 'IntelliJ IDEA'],
        text: 'I started my adventure with JavaScript in university. I learned the basics of the language, issues related to asynchronicity and functional programming. The first framework I started using that uses JavaScript was React Native (I also wrote my engineering thesis using this framework). I learned how to create my own components and design a user interface for mobile applications. I have used various libraries such as React Native Navigation, React Native Elements, React Native Paper and React Native SVG. I am familiar with the MobX data storage mechanism. Currently I am focusing on getting to know React.js (this page was also created using this framework). Getting to know this programming environment allows me to improve my JavaScript, HTML and CSS skills. My first contact with HTML and CSS was while studying the UI Design at the university. Then I also learned the basics of the Angular framework. I also can create applications with a graphical interface using NetBeans IDE and Java programming language. I use IntelliJ IDEA environment on a daily basis during development.'
    },
    backend: {
        name: 'Backend',
        color: '#FF8C00',
        image: 'images/knowledge/backend.png',
        technology_stack: ['JavaScript', 'Node.js', 'Hapi.js', 'Express.js', 'JSON Web Token', 'Java', 'Spring', 'UML'],
        text: 'I created several projects based on client-server architecture. I can create simple API servers using Node.js. In my engineering thesis, I created an API server that allows you to search for movies, series and people from the film industry. This server contains about 100 endpoints using the most popular HTTP requests such as GET, POST, PATCH and DELETE. It was my first bigger API server. I also know the DAO, business and REST layers pattern. All queries were properly secured using the Joi library in terms of the correctness of the transmitted parameters. I also learned the methods of user authentication and authorization using JSON Web Token (JWT). I can create roles on the server that have access to specific resources. I also used the Swagger library to generate API documentation. As for Java, this was my first object-oriented language I learned. I know concepts such as, for example, object, class, inheritance, polymorphism and serialization. During my studies, I created a few simple API servers using the Spring library. I also learned the basics of Unified Modeling Language.'
    },
    databases: {
        name: 'Databases',
        color: '#008000',
        image: 'images/knowledge/databases.png',
        technology_stack: ['SQL', 'PL/pgSQL', 'PostgreSQL', 'pgAdmin', 'MongoDB', 'mongoose', 'SQLite', 'TDM'],
        text: 'I learned the basics of SQL in my university classes. I was working with the PostgreSQL database at the time. I learned the basics of relational databases. I learned the DML instruction set (INSERT, UPDATE, DELETE) and the DDL instruction set (CREATE, ALTER, DROP). I wrote various database queries using table joins, aggregate functions and subqueries. I also learned the basics of the PL/pgSQL programming language. I have written triggers and trigger procedures. I also got acquainted with the mechanism of transactions in databases and ACID rules. I also learned the principles of normalization of relational databases. I can also create rules and perspectives. While working with the PostgreSQL database, I used the pgAdmin utility. While creating the project as part of my engineering thesis, I got acquainted with the non-relational MongoDB database based on documents. I was using the mongoose library. While creating applications for mobile devices, I used a single-file SQLite database. I also used tools such as Toad Data Modeler for designing databases.'
    },
    testing: {
        name: 'Testing & Code quality',
        color: '#9400D3',
        image: 'images/knowledge/testing.png',
        technology_stack: ['JavaScript', 'Jest', 'Java', 'JUnit', 'Groovy', 'Spock', 'Git (Version Control System)'],
        text: 'I got acquainted with testing in the class on \'Testing and Software Quality\' in my university. I wrote my first tests using JUnit and Spock. The Java applications that included the tests are on my Bitbucket. While learning testing, I also got acquainted with the principles of clean code, The Law of Demeter, SOLID, KISS and DRY. I try to make the code I create readable, clear and understandable. I also pay attention to the correct formatting of the code and dividing the code into smaller modules. I am familiar with refactoring the source code. I also learned how to use the Jest library and write simple unit tests to check the correct functioning of the functions used in the application. I also wrote integration tests that validated the server-side endpoints. When introducing new functions to the system, I always try to check their correctness with the greatest accuracy. I am also familiar with the GIT version control system. I can work in a team using the possibilities of this system. I know how to manage the repository, create new branches, commits, pull requests and more.  I use platforms such as Github, Bitbucket and Gitlab.'
    }
}

export default knowledge;
