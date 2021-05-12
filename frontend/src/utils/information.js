export const WEBSITE_NAME = 'ernestbies.com';

export const info = {
    name: 'Ernest',
    surname: 'Bieś',
    country: 'Poland',
    languages: ['PL', 'GB', 'DE'],
    degree: 'Bachelor\'s in Computer Science',
    dateOfBirth: '1998-03-25',
    text: 'Welcome on my official website! My name is Ernest and I come from Poland. I am a graduate of the State Higher Vocational School in Tarnów in the field of Computer Science (with a grade of 5.0 on the diploma). From an early age, I was interested in many things related to Information Technology. In my youth, I ran on-line gaming servers that were popular all over the country. I was also a moderator and mentor at the largest forum in Poland at that time - MPCforum about technical news, programming and creating plugins for online game servers. I am constantly trying to develop my skills and broaden my knowledge. I learn fast, I am communicative and ready to work in a team. I am also a kind, reliable and helpful person. In addition to Computer Science, I am interested in many other things, mainly e-sports and cinematography. I have participated in many esports tournaments and played with many players who are famous in the esports world. I always do everything with full commitment.',
    achievements: ['aspiring developer', 'owner of multiple game servers', 'ex-moderator at the largest game servers forum']
};

export const calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
