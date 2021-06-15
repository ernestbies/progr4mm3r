export const knowledge = {
    frontend: {
        name: 'frontend',
        color: '#00ACEE',
        image: 'images/knowledge/frontend.png',
        technology_stack: ['JavaScript', 'HTML', 'CSS', 'React', 'React Native', 'Java', 'NetBeans IDE', 'IntelliJ IDEA'],
        text: {
            en: 'I started my adventure with JavaScript in university. I learned the basics of the language, issues related to asynchronicity and functional programming. The first framework I started using that uses JavaScript was React Native (I also wrote my engineering thesis using this framework). I learned how to create my own components and design a user interface for mobile applications. I have used various libraries such as React Native Navigation, React Native Elements, React Native Paper and React Native SVG. I am familiar with the Redux & MobX data storage mechanism. Currently I am focusing on getting to know React.js (this page was also created using this framework). Getting to know this programming environment allows me to improve my JavaScript, HTML and CSS skills. My first contact with HTML and CSS was while studying the UI Design at the university. Then I also learned the basics of the Angular framework. I also can create applications with a graphical interface using NetBeans IDE and Java programming language. I use IntelliJ IDEA environment on a daily basis during development.',
            pl: 'Swoją przygodę z JavaScriptem zacząłem na studiach. Poznałem podstawy języka, zagadnienia związane z asynchronicznością i programowaniem funkcjonalnym. Pierwszym frameworkiem, którego zacząłem używać, który używa JavaScript, był React Native (napisałem również swoją pracę inżynierską przy użyciu tego frameworka). Nauczyłem się tworzyć własne komponenty i projektować interfejs użytkownika dla aplikacji mobilnych. Korzystałem z różnych bibliotek, takich jak React Native Navigation, React Native Elements, React Native Paper i React Native SVG. Znam mechanizm przechowywania danych Redux oraz MobX. Obecnie skupiam się na poznaniu React.js (ta strona również została stworzona z wykorzystaniem tego frameworka). Poznanie tego środowiska programistycznego pozwala mi doskonalić umiejętności w zakresie JavaScript, HTML i CSS. Pierwszy kontakt z HTML i CSS miałem na studiach na zajęciach z programowania UI. Wtedy też poznałem podstawy frameworka Angular. Potrafię również tworzyć aplikacje z interfejsem graficznym przy użyciu NetBeans IDE i języka programowania Java. Podczas programowania na co dzień korzystam ze środowiska IntelliJ IDEA.'
        }
    },
    backend: {
        name: 'backend',
        color: '#FF8C00',
        image: 'images/knowledge/backend.png',
        technology_stack: ['JavaScript', 'Node.js', 'Hapi.js', 'Express.js', 'JSON Web Token', 'Java', 'Spring', 'UML'],
        text: {
            en: 'I created several projects based on client-server architecture. I can create simple API servers using Node.js. In my engineering thesis, I created an API server that allows you to search for movies, series and people from the film industry. This server contains about 100 endpoints using the most popular HTTP requests such as GET, POST, PATCH and DELETE. It was my first bigger API server. Server was built on the basis of DAO, business and REST layers. All queries were properly secured using the Joi library in terms of the correctness of the transmitted parameters. I also learned the methods of user authentication and authorization using JSON Web Token (JWT). I can create roles on the server that have access to specific resources. I also used the Swagger library to generate API documentation. As for Java, this was my first object-oriented language I learned. During my studies, I created a few simple API servers using the Spring library. I know the concepts of object-oriented programming. I also learned the basics of Unified Modeling Language.',
            pl: 'W swojej karierze stworzyłem kilka projektów opartych na architekturze klient-serwer. Potrafię tworzyć proste serwery API przy użyciu Node.js. W swojej pracy inżynierskiej stworzyłem serwer API, który umożliwia wyszukiwanie filmów, seriali i osób z branży filmowej. Serwer ten zawiera około 100 punktów końcowych korzystających z najpopularniejszych żądań HTTP, takich jak GET, POST, PATCH i DELETE. Był to mój pierwszy, większy serwer API. Serwer został zbudowany w oparciu o warstwy DAO, biznes i REST. Wszystkie zapytania zostały odpowiednio zabezpieczone biblioteką Joi pod względem poprawności przesyłanych parametrów. Poznałem również metody uwierzytelniania i autoryzacji użytkowników za pomocą JSON Web Token (JWT). Potrafię tworzyć role na serwerze, które mają dostęp do określonych zasobów. Wykorzystałem również bibliotekę Swagger do wygenerowania dokumentacji API. Jeśli chodzi o Javę, był to mój pierwszy język zorientowany obiektowo, którego się nauczyłem. Znam pojęcia programowania obiektowego. W trakcie studiów stworzyłem kilka prostych serwerów API z wykorzystaniem biblioteki Spring. Nauczyłem się również podstaw UML.'
        }
    },
    databases: {
        name: 'databases',
        color: '#008000',
        image: 'images/knowledge/databases.png',
        technology_stack: ['SQL', 'PL/pgSQL', 'PostgreSQL', 'pgAdmin', 'MongoDB', 'mongoose', 'SQLite', 'TDM'],
        text: {
            en: 'I learned the basics of SQL in my university classes. I was working with the PostgreSQL database at the time. I learned the basics of relational databases. I learned the DML instruction set (INSERT, UPDATE, DELETE) and the DDL instruction set (CREATE, ALTER, DROP). I wrote various database queries using table joins, aggregate functions and subqueries. I also learned the basics of the PL/pgSQL programming language. I have written triggers and trigger procedures. I also got acquainted with the mechanism of transactions in databases and ACID rules. I also learned the principles of normalization of relational databases. I can also create rules and perspectives. While working with the PostgreSQL database, I used the pgAdmin utility. While creating the project as part of my engineering thesis, I got acquainted with the non-relational MongoDB database based on documents. I was using the mongoose library. While creating applications for mobile devices, I used a single-file SQLite database. I also used tools such as Toad Data Modeler for designing databases.',
            pl: 'Podstawy języka SQL poznałem na studiach. Pracowałem wtedy z bazą danych PostgreSQL. Nauczyłem się wtedy podstaw relacyjnych baz danych. Poznałem zestaw instrukcji DML (INSERT, UPDATE, DELETE) i DDL (CREATE, ALTER, DROP). Tworzyłem różne zapytania do baz danych, używając złączeń, funkcji agregujących i podzapytań. Nauczyłem się również podstaw języka programowania PL/pgSQL. Pisałem wyzwalacze i procedury wyzwalania. Zapoznałem się również z mechanizmem transakcji w bazach danych oraz zbiorem zasad ACID. Poznałem także zasady normalizacji relacyjnych baz danych. Potrafię również tworzyć widoki i perspektywy. Podczas pracy z bazą danych PostgreSQL korzystałem z narzędzia pgAdmin. Tworząc projekt w ramach pracy inżynierskiej zapoznałem się z nierelacyjną bazą danych MongoDB opartą na dokumentach. Korzystałem z biblioteki mongoose. Tworząc aplikacje na urządzenia mobilne korzystałem z jednoplikowej bazy danych SQLite. Do projektowania baz danych wykorzystywałem również narzędzia takie jak Toad Data Modeler.'
        }
    },
    testing: {
        name: 'testing_code_quality',
        color: '#9400D3',
        image: 'images/knowledge/testing.png',
        technology_stack: ['JavaScript', 'Jest', 'Java', 'JUnit', 'Groovy', 'Spock', 'Git (Version Control System)'],
        text: {
            en: 'I got acquainted with testing in the class on \'Testing and Software Quality\' in my university. I wrote my first tests using JUnit and Spock. The Java applications that included the tests are on my Bitbucket. While learning testing, I also got acquainted with the principles of clean code, The Law of Demeter, SOLID, KISS and DRY. I try to make the code I create readable, clear and understandable. I also pay attention to the correct formatting of the code and dividing the code into smaller modules. I am familiar with refactoring the source code. I also learned how to use the Jest library and write simple unit tests to check the correct functioning of the functions used in the application. I also wrote integration tests that validated the server-side endpoints. When introducing new functions to the system, I always try to check their correctness with the greatest accuracy. I am also familiar with the GIT version control system. I can work in a team using the possibilities of this system. I know how to manage the repository, create new branches, commits, pull requests and more. I use platforms such as Github, Bitbucket and Gitlab.',
            pl: 'Zapoznałem się z testowaniem na zajęciach „Testowanie i jakość oprogramowania” na mojej uczelni. Pierwsze testy napisałem przy użyciu JUnit i Spock. Aplikacje Java, które obejmowały testy, znajdują się na moim profilu w serwisie Bitbucket. Podczas nauki testowania poznałem również zasady czystego kodu, prawo Demeter, SOLID, KISS i DRY. Staram się, aby kod, który tworzę, był czytelny, przejrzysty i zrozumiały. Zwracam też uwagę na prawidłowe formatowanie kodu i podział kodu na mniejsze moduły. Jestem zaznajomiony z refaktoryzacją kodu źródłowego. Dowiedziałem się również, jak korzystać z biblioteki Jest i pisać proste testy jednostkowe sprawdzające poprawność działania funkcji wykorzystywanych w aplikacji. Napisałem również testy integracyjne, które walidowały punkty końcowe po stronie serwera. Wprowadzając nowe funkcje do systemu zawsze staram się sprawdzać ich poprawność z największą dokładnością. Jestem również zaznajomiony z systemem kontroli wersji GIT. Potrafię pracować w zespole korzystając z możliwości tego systemu. Wiem, jak zarządzać repozytorium, tworzyć nowe gałęzie, commity, pull requesty i nie tylko. Korzystam z platform takich jak Github, Bitbucket i Gitlab.'
        }
    }
}

export const knowledgeCodes = {
    frontend: [
        {
            type: 'languages',
            name: 'language-js'
        },
        {
            type: 'languages',
            name: 'html'
        },
        {
            type: 'languages',
            name: 'css'
        },
        {
            type: 'technologies',
            name: 'reactjs'
        },
        {
            type: 'technologies',
            name: 'reactnative'
        },
        {
            type: 'languages',
            name: 'language-java'
        },
        {
            type: 'platforms',
            name: 'netbeans'
        },
        {
            type: 'platforms',
            name: 'intellij'
        }
    ],
    backend: [
        {
            type: 'languages',
            name: 'language-js'
        },
        {
            type: 'technologies',
            name: 'nodejs'
        },
        {
            type: 'technologies',
            name: 'hapijs'
        },
        {
            type: 'technologies',
            name: 'jwt'
        },
        {
            type: 'languages',
            name: 'language-java'
        },
        {
            type: 'technologies',
            name: 'spring'
        },
        {
            type: 'technologies',
            name: 'uml'
        }
    ],
    databases: [
        {
            type: 'languages',
            name: 'language-sql'
        },
        {
            type: 'languages',
            name: 'language-plpgsql'
        },
        {
            type: 'technologies',
            name: 'mongodb'
        },
        {
            type: 'technologies',
            name: 'mongoose'
        },
        {
            type: 'technologies',
            name: 'sqlite'
        },
        {
            type: 'technologies',
            name: 'tdm'
        }
    ],
    testing: [
        {
            type: 'languages',
            name: 'language-js'
        },
        {
            type: 'technologies',
            name: 'jest'
        },
        {
            type: 'languages',
            name: 'language-java'
        },
        {
            type: 'technologies',
            name: 'junit'
        },
        {
            type: 'languages',
            name: 'language-groovy'
        },
        {
            type: 'technologies',
            name: 'spock'
        },
        {
            type: 'technologies',
            name: 'git'
        }
    ]
}
