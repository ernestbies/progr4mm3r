export const WEBSITE_NAME = 'ernestbies.com';
export const HIDDEN_URL = 'aHR0cHM6Ly9lcm5lc3RiaWVzLmNvbS9oYWxsLW9mLWZhbWU=';

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

export const calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
