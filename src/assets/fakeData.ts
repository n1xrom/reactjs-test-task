import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpeg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import userAvatar from "./images/avatar.jpg";

export interface IStep1 {
  avatar: string;
  name: string;
}
export interface IStep2 {
  image: string;
  title: string;
  desc: string;
  id: number;
}
export interface IFakeData {
  step1: IStep1;
  step2: IStep2[];
}
const fakeData: IFakeData = {
  step1: {
    avatar: userAvatar,
    name: "John Connor",
  },
  step2: [
    {
      image: img1,
      title: "Tom Cruise",
      desc:
        "Thomas Cruise (born Thomas Cruise Mapother IV; July 3, 1962) is an American actor and producer. He has received several accolades for his work, including three Golden Globe Awards and three nominations for Academy Awards. With a net worth of $570 million as of 2020, he is one of the highest-paid actors in the world. In addition, his films have grossed over $4 billion in North America and over $10.1 billion worldwide, making him one of the highest-grossing box office stars of all time.",
      id: 1,
    },
    {
      image: img2,
      title: "Matthew McConaughey",
      desc:
        "Matthew David McConaughey (/məˈkɒnəheɪ/; born November 4, 1969) is an American actor and producer. He first gained notice for his supporting performance in the coming-of-age comedy Dazed and Confused (1993), considered by many to be his breakout role. After a number of supporting roles in films including Angels in the Outfield (1994) and Texas Chainsaw Massacre: The Next Generation (1994), his breakthrough performance as a leading man came in the legal drama A Time to Kill (1996). He followed this with leading performances in the science fiction film Contact (1997) and the historical drama Amistad (1997), the comedy-drama The Newton Boys (1998), the satire EDtv (1999), the war film U-571 (2000), and the psychological thriller Frailty (2001).",
      id: 2,
    },
    {
      image: img3,
      title: "Jennifer Lawrence",
      desc:
        "Jennifer Shrader Lawrence (born August 15, 1990) is an American actress. The films she has acted in have grossed over $6 billion worldwide, and she was the highest-paid actress in the world in 2015 and 2016. Lawrence appeared in Time's 100 most influential people in the world list in 2013 and in the Forbes Celebrity 100 list in 2014 and 2016.",
      id: 3,
    },
    {
      image: img4,
      title: "Samuel L. Jackson",
      desc: `Samuel Leroy Jackson (born December 21, 1948) is an American actor and film producer. Jackson has won critical acclaim and numerous accolades and awards, and is the highest-grossing actor of all time (when cameo appearances are excluded).
      He came to prominence in the early 1990s with films such as Goodfellas (1990), Jungle Fever (1991), Patriot Games (1992), Amos & Andrew (1993), True Romance (1993), Jurassic Park (1993) and his collaborations with director Quentin Tarantino including Pulp Fiction (1994), Jackie Brown (1997), Django Unchained (2012), and The Hateful Eight (2015). For his role in Pulp Fiction, he was nominated for the Academy Award for Best Supporting Actor.`,
      id: 4,
    },
    {
      image: img5,
      title: "Scarlett Johansson",
      desc:
        "Scarlett Ingrid Johansson (/dʒoʊˈhænsən/; born November 22, 1984) is an American actress and singer. The world's highest-paid actress since 2018, she has made multiple appearances in the Forbes Celebrity 100. Her films have grossed over $14.3 billion worldwide, making Johansson the third-highest-grossing box office star of all time. She is the recipient of numerous accolades, including a Tony Award and a BAFTA Award, as well as nominations for two Academy Awards and five Golden Globe Awards.",
      id: 5,
    },
    {
      image: img6,
      title: "Bradley Cooper",
      desc:
        "Bradley Charles Cooper (born January 5, 1975) is an American actor and filmmaker. He has been nominated for many awards, including eight Academy Awards and a Tony Award, and has won two Grammy Awards and a BAFTA Award. Cooper appeared in Forbes Celebrity 100 on three occasions and Time's list of 100 most influential people in the world in 2015. His films have grossed $11 billion worldwide and he was named one of the world's highest-paid actors for four years.",
      id: 6,
    },
    {
      image: img7,
      title: "Dustin Hoffman",
      desc:
        "Dustin Lee Hoffman (born August 8, 1937) is an American actor and filmmaker. He is known for his versatile portrayals of antiheroes and emotionally vulnerable characters. He is the recipient of numerous accolades including two Academy Awards, six Golden Globe Awards (including the Cecil B. DeMille Award), four BAFTAs, three Drama Desk Awards, and two Emmy Awards. Hoffman received the AFI Life Achievement Award in 1999 and the Kennedy Center Honors Award in 2012.",
      id: 7,
    },
    {
      image: img8,
      title: "Natalie Portman",
      desc: `Natalie Portman (born Neta-Lee Hershlag; June 9, 1981) is an actress and filmmaker with dual Israeli and American citizenship. Prolific in film since a teenager, she has starred in blockbusters and also played psychologically troubled women in independent films, for which she has received various accolades, including an Academy Award and two Golden Globe Awards.
      Portman began her acting career at age 12 by starring as the young protégée of a hitman in the action drama film Léon: The Professional (1994). While in high school, she made her Broadway theatre debut in a 1998 production of The Diary of a Young Girl and gained international recognition for starring as Padmé Amidala in Star Wars: Episode I – The Phantom Menace (1999). From 1999 to 2003, Portman attended Harvard University for a bachelor's degree in psychology, while continuing to act in the Star Wars prequel trilogy (2002, 2005) and in The Public Theater's 2001 revival of Anton Chekhov's play The Seagull. In 2004, Portman was nominated for an Academy Award for Best Supporting Actress and won a Golden Globe Award for playing a mysterious stripper in the romantic drama Closer.`,
      id: 8,
    },
    {
      image: img9,
      title: "Clinton Eastwood",
      desc:
        "Clinton Eastwood Jr. (born May 31, 1930) is an American actor, filmmaker, musician, and politician. After achieving success in the Western TV series Rawhide, he rose to international fame with his role as the Man with No Name in Italian filmmaker Sergio Leone's Dollars Trilogy of spaghetti Westerns during the 1960s and as antihero cop Harry Callahan in the five Dirty Harry films throughout the 1970s and 1980s. These roles, among others, have made Eastwood an enduring cultural icon of masculinity.",
      id: 9,
    },
    {
      image: img10,
      title: "Leonardo DiCaprio",
      desc: `Leonardo Wilhelm DiCaprio (/dɪˈkæprioʊ/, Italian: ˈkaːprjo]; born November 11, 1974) is an American actor, producer, and environmentalist. He has often played unconventional parts, particularly in biopics and period films. As of 2019, his films have earned US$7.2 billion worldwide, and he has placed eight times in annual rankings of the world's highest-paid actors. His accolades include an Academy Award and three Golden Globe Awards.
      Born in Los Angeles, DiCaprio began his career by appearing in television commercials in the late 1980s. In the early 1990s, he played recurring roles in various television series, such as the sitcom Parenthood. He had his first major film role in This Boy's Life (1993), and received acclaim for the supporting role of a developmentally disabled boy in What's Eating Gilbert Grape (1993), which earned him an Academy Award nomination. He achieved international fame as a star in the epic romance Titanic (1997), which became the highest-grossing film at that point. After a few commercially failed films, DiCaprio starred in two successful features in 2002: the biographical crime drama Catch Me If You Can and the historical drama Gangs of New York, which marked his first of many collaborations with director Martin Scorsese.`,
      id: 10,
    },
    {
      image: img11,
      title: "Thomas Hanks",
      desc: `Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon. Hanks' films have grossed more than $4.9 billion in North America and more than $9.96 billion worldwide, making him the fifth-highest-grossing actor in North America.
      Hanks made his breakthrough with leading roles in the comedies Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched him as a director, producer, and screenwriter.`,
      id: 11,
    },
    {
      image: img12,
      title: "Alfredo Pacino",
      desc: `Alfredo James Pacino (/pəˈtʃiːnoʊ/; Italian: [paˈtʃiːno]; born April 25, 1940) is an American actor and filmmaker. In a career spanning over five decades, he has received many awards and nominations, including an Academy Award, two Tony Awards and two Primetime Emmy Awards. He is one of the few performers to have received the Triple Crown of Acting. He has also been honored with the AFI Life Achievement Award, the Cecil B. DeMille Award, and the National Medal of Arts.
      A method actor and former student of the HB Studio and the Actors Studio, where he was taught by Charlie Laughton and Lee Strasberg, Pacino's film debut came at the age of 29 with a minor role in Me, Natalie (1969). He gained favorable notice for his first lead role as a heroin addict in The Panic in Needle Park (1971). Wide acclaim and recognition came with his breakthrough role as Michael Corleone in Francis Ford Coppola's The Godfather (1972), for which he received his first Oscar nomination, and he would reprise the role in the sequels The Godfather Part II (1974) and The Godfather Part III (1990). His portrayal of Corleone is regarded as one of the greatest performances in film history.`,
      id: 12,
    },
    {
      image: img13,
      title: "Robert De Niro",
      desc: `Robert Anthony De Niro Jr. (/də ˈnɪəroʊ/, Italian: [de ˈniːro]; born August 17, 1943) is an American actor, producer, and director. He has received numerous accolades, including two Academy Awards, a Golden Globe Award, the Cecil B. DeMille Award, the Golden Lion, the AFI Life Achievement Award, Presidential Medal of Freedom, and has been nominated for six BAFTA Awards, four Primetime Emmy Awards, and four Screen Actors Guild Awards. He also has Italian citizenship.
      De Niro was cast as the young Vito Corleone in the 1974 film The Godfather Part II; he won the Academy Award for Best Supporting Actor. His longtime collaboration with director Martin Scorsese earned him the Academy Award for Best Actor for his portrayal of Jake LaMotta in the 1980 film Raging Bull.`,
      id: 13,
    },
    {
      image: img14,
      title: "John Joseph Nicholson",
      desc: `John Joseph Nicholson (born April 22, 1937) is an American actor and filmmaker whose career has spanned more than 60 years. He is known for playing a wide range of starring or supporting roles, including comedy, romance, and darkly comic portrayals of anti-heroes and villainous characters. In many of his films, he played the "eternal outsider, the sardonic drifter", someone who rebels against the social structure.
      His most known and celebrated films include the road drama Easy Rider (1969); the dramas Five Easy Pieces (1970) and One Flew Over the Cuckoo's Nest (1975); the comedy-dramas Carnal Knowledge (1971), The Last Detail (1973), Terms of Endearment (1983), Prizzi's Honor (1985), As Good as It Gets (1997), and About Schmidt (2002); the neo-noir mystery Chinatown (1974); the horror film The Shining (1980); the biopic Reds (1981); the fantasy comedy The Witches of Eastwick (1987); the superhero film Batman (1989); the legal drama A Few Good Men (1992); the romantic horror film Wolf (1994); the science fiction comedy Mars Attacks! (1996); the comedy Anger Management (2003); the romantic comedy Something's Gotta Give (2003); and the crime drama The Departed (2006). He has also directed three films, including The Two Jakes (1990), the sequel to Chinatown.`,
      id: 14,
    },
  ],
};

export default fakeData;
