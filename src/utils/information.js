export const info = {
    name: 'Ernest',
    surname: 'Bieś',
    country: 'Poland',
    languages: ['PL', 'GB', 'DE'],
    degree: 'Bachelor\'s in Computer Science',
    dateOfBirth: '1998-03-25',
    text: 'Hi! My name is Ernest and I come from Poland. I am a graduate of the State Higher Vocational School in Tarnów in the field of Computer Science (with a grade of 5.0 on the diploma). From an early age, I was interested in many things related to Information Technology. In my youth, I ran on-line gaming servers that were popular all over the country. I was also a moderator and mentor at the largest forum in Poland at that time - MPCforum about technical innovations, games and programming scripts and plugins for on-line game servers. I constantly develop my skills and expand my knowledge. I learn fast, I am communicative and ready to work in a team. I am a kind, reliable and helpful person. In addition to Computer Science, I am interested in many other things, mainly e-sports and cinematography. Take a look at my website to get to know me better.',
    achievements: ['aspiring developer', 'owner of multiple game servers', 'ex-moderator at the largest game servers forum']
};

export const calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
