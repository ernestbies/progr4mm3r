export const WEBSITE_NAME = 'ernestbies.com';
export const BACKEND_URL = 'http://localhost:4200';
export const HALL_OF_FAME_MYSTERY = 'aHR0cHM6Ly9lcm5lc3RiaWVzLmNvbS9oYWxsLW9mLWZhbWU=';
export const NOT_RELEASED_PROJECT = 'project_h_01';

export const languages = {
    pl: 'pl',
    en: 'en'
};

export const info = {
    en: {
        name: 'Ernest',
        surname: 'Bieś',
        country: 'Poland',
        languages: ['PL', 'GB', 'DE'],
        degree: 'Bachelor\'s in Computer Science',
        dateOfBirth: '1998-03-25',
        text: 'Welcome on my official website! My name is Ernest and I come from Poland. I am a graduate of the State Higher Vocational School in Tarnów in the field of Computer Science (with a grade of 5.0 on the diploma). From an early age, I was interested in many things related to Information Technology. In my youth, I ran on-line gaming servers that were popular all over the country. I was also a moderator and mentor at the largest forum in Poland at that time - MPCforum about technical news, programming and creating plugins for online game servers. I am constantly trying to develop my skills and broaden my knowledge. I learn fast, I am communicative and ready to work in a team. I am also a kind, reliable and helpful person. In addition to Computer Science, I am interested in many other things, mainly e-sports and cinematography. I have participated in many esports tournaments and played with many players who are famous in the esports world. I always do everything with full commitment.',
        achievements: ['aspiring developer', 'owner of multiple game servers', 'ex-moderator at MPCforum'],
    },
    pl: {
        name: 'Ernest',
        surname: 'Bieś',
        country: 'Polska',
        languages: ['PL', 'GB', 'DE'],
        degree: 'Inżynier informatyki',
        dateOfBirth: '1998-03-25',
        text: 'Witam na mojej oficjalnej stronie! Nazywam się Ernest i pochodzę z Polski. Jestem absolwentem Państwowej Wyższej Szkoły Zawodowej w Tarnowie na kierunku Informatyka (z wynikiem 5,0 na dyplomie). Od najmłodszych lat interesowałem się informatyką. W młodości prowadziłem popularne w całym kraju serwery gier online. Byłem też moderatorem i mentorem na największym w tym czasie forum w Polsce - MPCforum, o nowinkach technicznych, programowaniu i tworzeniu wtyczek do serwerów gier online. Nieustannie staram się rozwijać swoje umiejętności i poszerzać wiedzę. Szybko się uczę, jestem komunikatywny i gotowy do pracy w zespole. Jestem też osobą życzliwą, rzetelną i pomocną. Oprócz informatyki interesuje mnie wiele innych rzeczy, głównie e-sport i kinematografia. Brałem udział w wielu turniejach e-sportowych i grałem z wieloma sławnymi graczami ze świata e-sportu. Zawsze wykonuję swoją pracę z pełnym zaangażowaniem. ',
        achievements: ['przyszły developer', 'właściciel serwerów gier on-line', 'były moderator MPCforum']
    }
};

export const quote = {
    text: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
    author: 'Henry Ford'
}

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
        a: 'This page was created using the React framework and JavaScript, HTML and CSS languages. Hall of Fame Console was created using HTML and CSS only. The website visit counter was implemented using the React Redux library.'
    },
    {
        id: 4,
        q: 'What do the console statuses mean?',
        a: 'The console status informs the user about the successful or negative course of the actions performed. Full list of statuses: \n\nFETCHING // 0 - data is retrieved from an external server.\nCONNECTED // 1 - connection to an external server has been established.\nSOLVED // 2 - the puzzle was solved correctly.\nLOADED // 3 - the messages have been loaded successfully.\nSUCCESS // 4 - the message was sent successfully and posted on the Hall of Fame board.\nERROR // 5 - incorrect answer was given while solving the puzzle.\nERROR // 6 - there was a problem connecting with server (problem with internet connection).\nERROR // 7 - there was a problem sending the message (data validation problem).'
    }
];

export const calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

export const formatData = (date) => {
    const timezoneOffSet = new Date(date).getTimezoneOffset() * 60000;
    return new Date(date - timezoneOffSet).toISOString().slice(0, 19).replace("T", " ");
};
