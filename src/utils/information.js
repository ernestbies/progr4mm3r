export const WEBSITE_NAME = 'ernestbies.com';
export const WEBSITE_URL = 'http://localhost:3000/';
export const BACKEND_URL = 'https://ernestbies-backend.herokuapp.com';
export const HALL_OF_FAME_MYSTERY = 'aHR0cHM6Ly9lcm5lc3RiaWVzLmNvbS9oYWxsLW9mLWZhbWU=';
export const NOT_RELEASED_PROJECT = 'project_h_01';
export const WEBSITE_TITLE = {
    en: 'Ernest Bieś - portfolio website',
    pl: 'Ernest Bieś - strona portfolio'
};

export const languages = {
    en: 'en',
    pl: 'pl'
};

export const introduction = {
    en: {
        about: 'GET TO KNOW ME BETTER...',
        projects: 'BROWSE MY PROJECTS...',
        skills: 'GET TO KNOW MY SKILLS...',
        hobby: 'FIND OUT WHAT I\'M INTERESTED IN...',
        contact: '... AND CONTACT WITH ME'
    },
    pl: {
        about: 'DOWIEDZ SIĘ CZEGOŚ O MNIE...',
        projects: 'ZOBACZ MOJE PROJEKTY...',
        skills: 'POZNAJ MOJE UMIEJĘTNOŚCI...',
        hobby: 'DOWIEDZ SIĘ CZYM SIĘ INTERESUJĘ...',
        contact: '... SKONTAKTUJ SIĘ ZE MNĄ'
    }
};

export const shortInfo = {
    en: ['programmer', 'semi-professional e-sports athlete', 'movies enthusiast'],
    pl: ['programista', 'półprofesjonalny e-sportowiec', 'entuzjasta filmów']
};

export const info = {
    en: {
        name: 'Ernest',
        surname: 'Bieś',
        country: {
            name: 'Poland',
            short: 'PL'
        },
        languages: [
            {
                name: 'Polish',
                shortcut: 'PL',
                level: 'native'
            },
            {
                name: 'English',
                shortcut: 'GB',
                level: 'upper-intermediate'
            },
            {
                name: 'German',
                shortcut: 'DE',
                level: 'basic'
            }
        ],
        degree: 'Bachelor\'s in Computer Science',
        dateOfBirth: '1998-03-25',
        text: 'Welcome on my official website! My name is Ernest and I come from Poland. I am a graduate of the State Higher Vocational School in Tarnów in the field of Computer Science (with a grade of 5.0 on the diploma). From an early age, I was interested in many things related to Information Technology. While studying at schools, I took part in numerous IT competitions. In my youth, I ran on-line gaming servers that were popular all over the country. I was also a moderator and mentor at the largest forum in Poland at that time - MPCforum about technical news, programming and creating plugins for online game servers. I am constantly trying to develop my skills and broaden my knowledge. In addition to Computer Science, I am interested in many other things, mainly e-sports and cinematography. I have participated in many esports tournaments and played with many players who are famous in the esports world. I always do everything with full commitment.',
        achievements:
            {
                it: ['aspiring developer', 'owner of multiple game servers', 'ex-moderator at MPCforum'],
                eSport: ['team player', 'competitive e-sports player', 'participant of many international tournaments']
            },
    },
    pl: {
        name: 'Ernest',
        surname: 'Bieś',
        country: {
            name: 'Polska',
            short: 'PL'
        },
        languages: [
            {
                name: 'Język polski',
                shortcut: 'PL',
                level: 'ojczysty'
            },
            {
                name: 'Język angielski',
                shortcut: 'GB',
                level: 'wyższy średniozaawansowany'
            },
            {
                name: 'Język niemiecki',
                shortcut: 'DE',
                level: 'podstawowy'
            }
        ],
        degree: 'Inżynier Informatyki',
        dateOfBirth: '1998-03-25',
        text: 'Witam na mojej oficjalnej stronie! Nazywam się Ernest i pochodzę z Polski. Jestem absolwentem Państwowej Wyższej Szkoły Zawodowej w Tarnowie na kierunku Informatyka (z wynikiem 5,0 na dyplomie). Od najmłodszych lat interesowałem się informatyką. Podczas nauki brałem udział w licznych konkursach informatycznych. W młodości prowadziłem popularne w całym kraju serwery gier online. Byłem też moderatorem i mentorem na największym w tym czasie forum w Polsce - MPCforum, o nowinkach technicznych, programowaniu i tworzeniu wtyczek do serwerów gier online. Nieustannie staram się rozwijać swoje umiejętności i poszerzać wiedzę. Oprócz informatyki interesuje mnie wiele innych rzeczy, głównie e-sport i kinematografia. Brałem udział w wielu turniejach e-sportowych i grałem z wieloma sławnymi graczami ze świata e-sportu. Zawsze wykonuję swoją pracę z pełnym zaangażowaniem. ',
        achievements:
            {
                it: ['aspirujący developer', 'właściciel serwerów gier on-lnie', 'były moderator MPCforum'],
                eSport: ['gracz zespołowy', 'półprofesjonalny e-sportowiec', 'uczestnik wielu turniejów międzynarodowych']
            },
    }
};

export const quote = {
    text: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
    author: 'Henry Ford'
};

export const hallOfFameFaq = [
    {
        id: 0,
        q: 'What is it?',
        a: 'Hall of Fame is a place where each user visiting my website can leave one unique message. Leaving a message is only possible after solving the puzzle. After solving the puzzle, your answer will be saved in local storage (you don\'t need to solve it again).'
    },
    {
        id: 1,
        q: 'What does it mean unique?',
        a: 'The message is unique for the given username (after sending the message, the username is taken and cannot be used again).'
    },
    {
        id: 2,
        q: 'Are messages editable or deletable?',
        a: 'No, messages are not editable nor deletable.'
    },
    {
        id: 3,
        q: 'What tools were used to create this page?',
        a: 'This page was created using the React framework and JavaScript, HTML and CSS languages. Hall of Fame Console was created using HTML and CSS only. This page also uses the Redux library.'
    },
    {
        id: 4,
        q: 'What do the console statuses mean?',
        a: 'The console status informs the user about the successful or negative course of the actions performed. Full list of statuses: \n\nSTATUSES_LIST'
    }
];

export const calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

export const formatData = (date) => {
    const timezoneOffSet = new Date(date).getTimezoneOffset() * 60000;
    return new Date(date - timezoneOffSet).toISOString().slice(0, 19).replace("T", " ");
};

export const statusList = {
    fetch: {
        no: 0,
        code: 'FETCHING',
        message: 'Fetching data.',
        color: 'gray',
        description: 'Data is retrieved from an external server.'
    },
    connect: {
        no: 1,
        code: 'CONNECTED',
        message: 'Connected with server.',
        color: '#F8F8FF',
        description: 'Connection to an external server has been established.'
    },
    solve: {
        no: 2,
        code: 'SOLVED',
        message: 'Correctly answered.',
        color: '#228B22',
        description: 'Puzzle was solved correctly.'
    },
    send: {
        no: 3,
        code: 'SENT',
        message: 'Message sent.',
        color: 'green',
        description: 'Message was sent successfully and posted on the Hall of Fame board.'
    },
    error_connect: {
        no: 4,
        code: 'ERROR',
        message: 'Fetching error.',
        color: 'red',
        description: 'There was a problem connecting with server.'
    },
    error_solve: {
        no: 5,
        code: 'ERROR',
        message: 'Wrong answer.',
        color: 'red',
        description: 'Incorrect answer was given while solving the puzzle.'
    },
    error_send: {
        no: 6,
        code: 'ERROR',
        message: 'Sending error.',
        color: 'red',
        description: 'There was a problem sending the message (data validation problem).'
    }
};
