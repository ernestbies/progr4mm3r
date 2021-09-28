export const projects = [
    {
        id: 0,
        name: 'Media Browser',
        description: {
            en:  'System for searching information about audiovisual materials. Project implemented as part of an engineering thesis. The application allows you to search and view information about movies, series and people related to the film industry. The application is designed for devices with Android and iOS. The application supports Polish and English.',
            pl: 'System do wyszukiwania informacji o materiałach audiowizualnych. Projekt realizowany w ramach pracy inżynierskiej. Aplikacja umożliwia wyszukiwanie i przeglądanie informacji o filmach, serialach i osobach związanych z branżą filmową. Aplikacja przeznaczona jest na urządzenia z systemem Android oraz iOS. Obsługuje język polski i angielski.'
        },
        technologies: {
            mobile: ['JavaScript', 'React Native', 'React Native Navigation', 'React Native SVG', 'MobX', 'SQLite'],
            server: ['JavaScript', 'Node.js', 'Hapi.js', 'lodash', 'JSON Web Token', 'bcrpyt', 'Nodemailer'],
            database: ['MongoDB', 'mongoose']
        },
        os: ['Windows', 'Linux', 'Android', 'iOS'],
        color: 'orange',
        languages: ['PL', 'US'],
        image: 'images/projects/mediabrowser-dashboard.png',
        links: {
            github: 'https://github.com/ernestbies/MediaBrowser-mobile',
            youtube: 'https://youtu.be/7r1r9JiKsYc'
        }
    },
    {
        id: 1,
        name: 'Personal website',
        description: {
            en:  'Portfolio page showing me and my projects. It was the first website I created using React.js. While creating a porfolio website, I learned how to use the JavaScript scripting language and how to design websites with the use of HTML and CSS.',
            pl: 'Strona portfolio przedstawiająca moją osobę oraz projekty. Była to pierwsza strona internetowa którą stworzyłem z wykorzystaniem React.js. Podczas tworzenia strony porfolio uczyłem się jak używać języka skryptowego JavaScript oraz jak projektować strony internetowe z wykorzystaniem HTML oraz CSS.'
        },
        technologies: {
            desktop: ['JavaScript', 'HTML', 'CSS', 'React.js', 'React Router', 'React Redux', 'Styled Components', 'Google Recaptcha'],
            server: ['JavaScript', 'Node.js', 'express.js', 'Nodemailer'],
            database: ['MongoDB', 'mongoose']
        },
        os: ['Windows', 'Linux'],
        color: '#FF8C00',
        languages: ['PL', 'US'],
        image: 'images/projects/personal-website.png',
        links: {
            github: 'https://github.com/ernestbies/personal-website',
        }
    },
    {
        id: 2,
        name: 'Football club website',
        description: {
            en:  'The official website of the Forest Żabiec football team. The website presents information about the club, reports and details of statistics.',
            pl: 'Oficjalna strona drużyny piłkarskiej Forest Żabiec. Na stronie przedstawione są informacje dotyczące klubu, relacje oraz szczegółówe statystyki .'
        },
        technologies: {
            desktop: ['JavaScript', 'HTML', 'CSS', 'React.js', 'React Router', 'React Redux', 'Styled Components'],
            server: ['JavaScript', 'Node.js', 'Hapi.js'],
            database: ['MongoDB', 'mongoose']
        },
        os: ['Windows', 'Linux'],
        color: '#d3fd25',
        languages: ['PL'],
        image: 'images/projects/football-club.png',
        links: {
            github: 'https://github.com/ernestbies/forestzabiec',
        }
    },
    {
        id: 3,
        name: 'Restaurant Management System',
        description: {
            en:  'System for searching information about audiovisual materials. Project implemented as part of an engineering thesis. The application allows you to search and view information about movies, series and people related to the film industry. The application is designed for devices with Android and iOS. The application supports Polish and English.',
            pl: 'System do wyszukiwania informacji o materiałach audiowizualnych. Projekt realizowany w ramach pracy inżynierskiej. Aplikacja umożliwia wyszukiwanie i przeglądanie informacji o filmach, serialach i osobach związanych z branżą filmową. Aplikacja przeznaczona jest na urządzenia z systemem Android oraz iOS. Obsługuje język polski i angielski.'
        },
        technologies: {
            desktop: ['JavaScript', 'HTML', 'CSS', 'React.js', 'React Router', 'React Redux', 'Styled Components'],
            server: ['JavaScript', 'Node.js', 'express.js', 'Nodemailer'],
            database: ['MongoDB', 'mongoose']
        },
        os: ['Windows', 'Linux'],
        color: 'deepskyblue',
        languages: ['US'],
        image: 'images/projects/rms.png',
        links: {
            github: 'https://github.com/ernestbies/restaurant-management',
        }
    },
    {
        id: 4,
        name: 'Camera Fingerprint PRNU',
        description: {
            en: 'Camera Fingerprint PRNU (Autopsy module) uses photo response non-uniformity of camera sensor (PRNU) to check if a photo was truly taken by a suspected camera or not. Module is not based on metadata such as EXIF, performs a physical analysis of the camera sensor, determines photo response non-uniformity (PRNU). The project was presented at the 2020 Open Source Digital Forensics Conference (#OSDFCon) and placed on the organizer\'s home page.',
            pl: 'Camera Fingerprint PRNU (moduł Autopsy) wykorzystuje niejednorodność reakcji na zdjęcie czujnika aparatu (PRNU), aby sprawdzić, czy zdjęcie zostało rzeczywiście zrobione przez podejrzany aparat, czy nie. Moduł nie bazuje na metadanych takich jak EXIF, przeprowadza fizyczną analizę matrycy aparatu, określa niejednorodność reakcji foto (PRNU). Projekt został zaprezentowany na konferencji Open Source Digital Forensics 2020 (#OSDFCon) i umieszczony na stronie głównej organizatora.'
        },
        technologies: {
            desktop: ['Autopsy (ver. 4.15.0)', 'Apache Netbeans IDE (ver. 9.0)', 'Python (ver. 3.6.0)']
        },
        os: ['Windows'],
        color: '#808080',
        additionalData: {
            name: 'OSDF',
            image: 'images/projects/osdfcon.png',
            link: 'https://www.osdfcon.org/2020-event/2020-module-development-contest/',
            text: 'presented_at_conference'
        },
        image: 'images/projects/camerafingerprint.png',
        links: {
            github: 'https://github.com/ernestbies/Camera-Fingerprint-PRNU',
            youtube: 'https://www.youtube.com/watch?v=lsoqVuuq9T0'
        }
    },
    {
        id: 5,
        name: 'Spaceships',
        description: {
            en: 'Spaceships is a puzzle game combining two popular games "Ships" and "Minesweeper". Project is based on a client-server architecture. The aim of the game is to find all the ships on the board in the fewest possible steps.',
            pl: 'Statki kosmiczne to gra logiczna, która łączy w sobie dwie popularne gry „Statki” i „Saper”. Projekt oparty jest na architekturze klient-serwer. Celem gry jest znalezienie wszystkich statków na planszy w jak najmniejszej liczbie kroków. '
        },
        technologies: {
            desktop: ['Java', 'C++', 'Apache Netbeans IDE', 'Swing', 'Qt'],
            mobile: ['Java', 'Android Studio'],
            server: ['Java', 'Spring', 'C++', 'Qt', 'Postman'],
            database: ['PostgreSQL', 'Java Persistence API'],
            documentation: ['Microsoft Word', 'Libre Office', 'LaTeX', 'Unified Modeling Language (UML)']
        },
        os: ['Windows', 'Android'],
        color: 'purple',
        image: 'images/projects/spaceships.png',
        links: {
            github: 'https://github.com/ernestbies/SpaceShips'
        }
    },
    {
        id: 6,
        name: 'ApocalyptoGame',
        description: {
            en: 'ApocalyptoGame is a first-person shooter (FPS) game. In the game, we play the role of a soldier set in a post-apocalyptic world. The player\'s task is to destroy the enemy ship. The player has the ability to interact with the environment, can pick up items. In order to destroy a ship, the player must collect four cells that will help him power the generator. The way to get cells is different - some of them are located on the map, some of them can be obtained by the player by killing aliens, and the last one is possible after killing the boss. After collecting all the cells, the player can power the generator on the map, which will blow up the enemy ship. The game has a developed combat and healing system.',
            pl: 'ApocalyptoGame to strzelanka z perspektywy pierwszej osoby (FPS). W grze wcielamy się w żołnierza osadzonego w postapokaliptycznym świecie. Zadaniem gracza jest zniszczenie wrogiego statku. Gracz ma możliwość interakcji z otoczeniem, może podnosić przedmioty. Aby zniszczyć statek, gracz musi zebrać cztery ogniwa, które pomogą mu zasilić generator. Sposób zdobywania ogniw jest różny - część z nich znajduje się na mapie, część z nich gracz może zdobyć zabijając przeciwników, a ostatnią po zabiciu bossa. Po zebraniu wszystkich ogniw gracz może zasilić znajdujący się na mapie generator, który wysadzi wrogi statek kosmiczny w powietrze. Gra posiada rozbudowany system walki i leczenia.'
        },
        technologies: {
            desktop: ['C#', 'Unity']
        },
        os: ['Windows'],
        color: 'red',
        image: 'images/projects/apocalyptogame.png',
        links: {
            github: 'https://github.com/ernestbies/ApocalyptoGame'
        }
    },
    {
        id: 7,
        name: 'Quiz app',
        description: {
            en: 'Mobile application that allows you to solve on-line tests. Tests are downloaded from an external server. The user has the option of solving a specific test and has a specific time to answer a question. In addition, user can choose a random test and view results. The application has a drawer menu that makes it easy to access all screens. The application is designed for Android and iOS.',
            pl: 'Aplikacja mobilna umożliwiająca rozwiązywanie testów on-line. Testy są pobierane z serwera zewnętrznego. Użytkownik ma możliwość rozwiązania konkretnego testu i ma określony czas na udzielenie odpowiedzi na pytanie. Dodatkowo użytkownik może wybrać losowy test i przejrzeć wyniki. Aplikacja posiada menu wysuwane, które ułatwia dostęp do wszystkich ekranów. Przeznaczona jest na systemy Android i iOS.'
        },
        technologies: {
            mobile: ['JavaScript', 'React Native', 'RN Navigation', 'Async Storage', 'NetInfo', 'Vector icons', 'SQLite']
        },
        image: 'images/projects/quiz-dashboard.png',
        os: ['Android', 'iOS'],
        color: 'yellow',
        links: {
            github: 'https://github.com/ernestbies/Quiz'
        }
    },
    {
        id: 8,
        name: 'Image binarizer',
        description: {
            en: 'The application allows you to binarize images. The application supports the basic types of binarization - low-level, high-level, two-threshold and conditional. It allows you to load any image (color or black and white), and then select a specific operation. The application works in a distributed environment using Remote Method Invocation (RMI) - a mechanism that enables remote methods of objects invocation. These objects can reside in other Java virtual machines that can be on other computers. In RMI technology, it is necessary to run three processes: client, server and register of objects.',
            pl: 'Aplikacja umożliwia binaryzację obrazów. Aplikacja obsługuje podstawowe typy binaryzacji - niskopoziomowe, wysokopoziomowe, dwuprogowe oraz warunkowe. Umożliwia wczytanie dowolnego obrazu (kolorowego lub czarno-białego), a następnie wybranie określonej operacji. Aplikacja działa w środowisku rozproszonym z wykorzystaniem Remote Method Invocation (RMI) - mechanizmu umożliwiającego zdalne wywoływanie obiektów. Te obiekty mogą znajdować się na innych maszynach wirtualnych Java, które mogą znajdować się na innych komputerach. W technologii RMI konieczne jest uruchomienie trzech procesów: klienta, serwera i rejestru obiektów.'
        },
        technologies: {
            desktop: ['Java', 'Apache NetBeans IDE', 'Swing', 'Remote Method Invocation (RMI)']
        },
        image: 'images/projects/imagebinarizer.png',
        os: ['Windows'],
        color: 'grey',
        links: {
            github: 'https://github.com/ernestbies/ImageBinarizer'
        }
    },
    {
        id: 9,
        name: 'Calculator',
        description: {
            en: 'Calculator is an app created using the React Native framework. It was my first app created in React Native. The application works in landscape and potrait modes. The application has a basic set of math functions such as addition, subtraction, multiplication, division, percent. After changing the orientation, additional math functions are available.',
            pl: 'Kalkulator to aplikacja stworzona z wykorzystaniem frameworka React Native. To była moja pierwsza aplikacja stworzona w React Native. Aplikacja działa w trybie krajobrazowym i portretowym. Aplikacja posiada podstawowy zestaw funkcji matematycznych, takich jak dodawanie, odejmowanie, mnożenie, dzielenie, procent. Po zmianie orientacji dostępne są dodatkowe funkcje matematyczne.'
        },
        technologies: {
            mobile: ['JavaScript', 'React Native']
        },
        os: ['Android', 'iOS'],
        color: '#1E90FF',
        image: 'images/projects/calculator-dashboard.png',
        links: {
            github: 'https://github.com/ernestbies/CalculatorRN'
        }
    },
    {
        id: 10,
        name: 'Database Connection App',
        description: {
            en: 'The application allows you to connect to any PostgreSQL database using the JDBC engine. The login data can be saved and read because the application uses serialization. In the application, it is possible to view all tables in the database. If the table contains users\' contact details (e-mail address), it is possible to send a message. Sending e-mails is performed by Javax Mail. User can add recipients (TO, CC, BCC), message subject and content. After approval, the e-mail is sent to the selected users.',
            pl: 'Aplikacja umożliwia połączenie się z dowolną bazą danych PostgreSQL za pomocą silnika JDBC. Dane logowania można zapisywać i odczytywać, ponieważ aplikacja korzysta z serializacji. W aplikacji istnieje możliwość podglądu wszystkich tabel w bazie danych. Jeżeli w tabeli znajdują się dane kontaktowe użytkowników (adres e-mail), istnieje możliwość wysłania wiadomości. Wysyłanie wiadomości e-mail jest realizowane przez Javax Mail. Użytkownik może dodać odbiorców (DO, DW, UDW), temat i treść wiadomości. Po zatwierdzeniu, wiadomość e-mail jest wysyłana do wybranych użytkowników.'
        },
        technologies: {
            desktop: ['Java', 'Apache NetBeans IDE', 'Swing', 'JDBC', 'PostgreSQL', 'Javax Mail']
        },
        os: ['Windows'],
        color: 'blue',
        image: 'images/projects/databaseApp.png',
        links: {
            github: 'https://github.com/ernestbies/databaseApp'
        }
    },
    {
        id: 11,
        name: 'Database Analyzer',
        description: {
            en: 'Application for analyzing database performance while using VIEW, MATERIALIZED VIEW, WITH and TEMPORARY TABLE. The application allows you to connect to any PostgreSQL database using the JDBC engine. The login data can be saved and read because the application uses serialization.',
            pl: 'Aplikacja do analizy wydajności bazy danych podczas korzystania z widoku (VIEW), widoku zmaterializowanego (MATERIALIZED VIEW), WITH oraz tabeli tymczasowej (TEMPORARY TABLE). Aplikacja umożliwia połączenie się z dowolną bazą danych PostgreSQL za pomocą silnika JDBC. Dane logowania można zapisywać i odczytywać, ponieważ aplikacja korzysta z serializacji.'
        },
        technologies: {
            desktop: ['Java', 'Apache NetBeans IDE', 'Swing', 'JDBC', 'PostgreSQL']
        },
        os: ['Windows'],
        color: '#0000CD',
        image: 'images/projects/databaseAnalyzer.png',
        links: {
            github: 'https://github.com/ernestbies/databaseAnalyzer'
        }
    },
    {
        id: 12,
        name: 'Task planner',
        description: {
            en: 'My first school project in Angular. Task Planner covers the basics of Angular. The application includes data binding, the basic appearance of pages using HTML and CSS, forms, tables, dialogs, downloading data using the HTTP protocol from an external server and others.',
            pl: 'Mój pierwszy projekt szkolny w Angular. Task Planner obejmuje podstawy Angulara. Aplikacja obejmuje wiązanie danych, podstawowy wygląd stron z wykorzystaniem HTML i CSS, formularze, tabele, dialogi, pobieranie danych za pomocą protokołu HTTP z zewnętrznego serwera i inne.'
        },
        technologies: {
            desktop: ['Angular', 'TypeScript', 'HTML', 'CSS']
        },
        os: ['Windows'],
        color: '#DC143C',
        image: 'images/projects/taskplanner.png',
        links: {
            github: 'https://github.com/ernestbies/task_planner'
        }
    },
    {
        id: 13,
        name: 'Chess server',
        description: {
            en: 'An academic project that checks the correctness of moves on a chess board using unit tests. The project uses the Java programming language, the Spring platform and the JUnit library, which allows you to carry out tests.',
            pl: 'Projekt naukowy sprawdzający poprawność ruchów na szachownicy za pomocą testów jednostkowych. W projekcie wykorzystano język programowania Java, platformę Spring oraz bibliotekę JUnit, która umożliwia przeprowadzanie testów.'
        },
        technologies: {
            desktop: ['Java', 'Spring Framework', 'JUnit', 'IntelliJ IDEA']
        },
        os: ['Windows'],
        color: 'red',
        image: 'images/projects/chess-server.png',
        links: {
            bitbucket: 'https://bitbucket.org/ernestbies/tijo-11'
        }
    },
    {
        id: 14,
        name: 'Bank App',
        description: {
            en: 'An academic project that validates sample basic banking operations using unit tests. The project uses the Java programming language and tests carried out with the Spock library and the Groovy programming language. The basic things related to functional programming were also used, such as streams, maps and filters.',
            pl: 'Projekt akademicki, który weryfikuje przykładowe podstawowe operacje bankowe za pomocą testów jednostkowych. Projekt wykorzystuje język programowania Java oraz testy przeprowadzone z biblioteką Spock i językiem programowania Groovy. Wykorzystano również podstawowe funkcje związane z programowaniem funkcjonalnym, takie jak strumienie, mapy i filtry.'
        },
        technologies: {
            desktop: ['Java', 'Groovy', 'Spock', 'IntelliJ IDEA']
        },
        os: ['Windows'],
        color: 'green',
        image: 'images/projects/bank-app.png',
        links: {
            bitbucket: 'https://bitbucket.org/ernestbies/tijo-12'
        }
    },
    {
        id: 15,
        name: 'Pizzeria database',
        description: {
            en: 'Pizzeria database created with Toad Data Modeler. Basic SQL components (functions, triggers, etc.) have been implemented in the project. The main goal of the project was to create a database for a pizzeria that allows the customer to place orders for the selected type of pizza along with extras, as well as after agreeing to register in the pizzeria database, getting appropriate discounts. Placing an order is possible via the Internet, by phone or in person. After confirming the payment, the preparation of the pizza is transferred for implementation. When ordering via the Internet or by phone, the customer makes payment by the pizza delivery man.',
            pl: 'Baza danych pizzerii utworzona za pomocą Toad Data Modeler. W projekcie zaimplementowano podstawowe komponenty SQL (funkcje, wyzwalacze itp.). Głównym celem projektu było stworzenie bazy danych dla pizzerii umożliwiającej klientowi składanie zamówień na wybrany rodzaj pizzy wraz z dodatkami, a także po wyrażeniu zgody na rejestrację w bazie pizzerii, uzyskanie odpowiednich rabatów. Złożenie zamówienia możliwe jest przez internet, telefon lub osobiście. Po potwierdzeniu wpłaty przygotowanie pizzy zostaje przekazane do realizacji. Zamawiając przez internet lub telefon, klient dokonuje płatności za pośrednictwem dostawcy pizzy.'
        },
        technologies: {
            desktop: ['Toad Data Modeler', 'SQL', 'PostgreSQL']
        },
        os: ['Windows'],
        color: '#228B22',
        image: 'images/projects/pizzeria-database.png',
        links: {
            github: 'https://github.com/ernestbies/pizzeria-database'
        }
    },
    {
        id: 16,
        name: 'Car service station',
        description: {
            en: 'Project implemented as part of POWER Project (Projekt Współpraca Synergia Zarządzanie w Tarnowie). The subject of the project was to describe and model processes using Business Process Modeling Notation (BPMN) showing the operation of car service station. A detailed course of the repair process of the damaged vehicle will be presented in this project, starting from delivering damaged car for repair to handing over the vehicle. A description of the car engine repair, spare parts ordering, car handover and payment process is presented. The main goal of the project is to present the processes that work in most car service stations.',
            pl: 'Projekt realizowany w ramach projektu POWER (Projekt Współpraca Synergia Zarządzanie w Tarnowie). Przedmiotem projektu było opisanie i zamodelowanie procesów z wykorzystaniem notacji modelowania procesów biznesowych (BPMN) obrazujących działanie stacji obsługi samochodów. W ramach tego projektu zostanie przedstawiony szczegółowy przebieg procesu naprawy uszkodzonego pojazdu, począwszy od dostarczenia uszkodzonego samochodu do naprawy, a skończywszy na przekazaniu pojazdu. Przedstawiono opis procesu naprawy silnika samochodu, zamawiania części zamiennych, odbioru samochodu oraz procesu płatności. Głównym celem projektu jest przedstawienie procesów zachodzących na większości stacji obsługi samochodów.'
        },
        technologies: {
            desktop: ['Signavio Process Manager - Academic', 'Business Process Model and Notation (BPMN)']
        },
        os: ['Windows'],
        color: '#D51A1A',
        image: 'images/projects/car_service_station.png',
        links: {
            github: 'https://github.com/ernestbies/Car-service-station-BPMN'
        }
    }
]

export const mainProjects = [
    {
        name: 'Media Browser',
        image: 'images/projects/mediabrowser-dashboard.png',
        url: 'https://youtu.be/7r1r9JiKsYc'
    },
    {
        name: 'Forest Żabiec',
        image: 'images/projects/football-club.png',
        url: 'https://forestzabiec.herokuapp.com'
    },
    {
        name: 'Restaurant',
        image: 'images/projects/rms2.png',
        url: 'https://github.com/ernestbies/restaurant-management'
    }
]
