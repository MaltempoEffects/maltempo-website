const yearOne = document.getElementById("year-one");
const yearTwo = document.getElementById("year-two");
const yearThree = document.getElementById("year-three");
const yearFour = document.getElementById("year-four");
const yearFive = document.getElementById("year-five");
const yearSix = document.getElementById("year-six");
const yearSeven = document.getElementById("year-seven");
const yearEight = document.getElementById("year-eight");
const yearNine = document.getElementById("year-nine");
const yearTen = document.getElementById("year-ten");
const yearEleven = document.getElementById("year-eleven");
const yearTwelve = document.getElementById("year-twelve");
const yearThirteen = document.getElementById("year-thirteen");

const resumeObject = [
    {   
        year: `2026`, 
        position: `Boom operator`, 
        period: `Jan 2026 - Feb 2026`, 
        project: `S Pogledom na Morje`,
        description:`- feature film`,
        employer: `Viba Film, Kopar, Slovenia`, 
        link: `https://www.rtvslo.si/kultura/film-in-tv/padla-je-prva-klapa-celovecernega-prvenca-s-pogledom-na-morje-v-reziji-katarine-morano/771850`
    },
    
    {   
        year: `2025`, 
        position: `Boom operator`, 
        period: `Nov 2025 - Dec 2025`, 
        project: `Hajka`,
        description:`- feature film`,
        employer: `Kinorama, Gorski Kotar, Croatia`, 
        link: `https://www.novilist.hr/mozaik/u-gorskom-kotaru-se-snima-hajka-detektivska-bozicna-komedija-za-cijelu-obitelj/`
    },
    
    {   
        year: `2025`, 
        position: `Boom operator`, 
        period: `Sep 2025 - Dec 2025`, 
        project: `Držim te`,
        description:`- short film`,
        employer: `Mora Mora, Vodjan, Croatia`, 
        link: `#`
    },
    
    {   
        year: `2025`, 
        position: `Boom operator`, 
        period: `Jan 2025 - Feb 2025`, 
        project: `Svadba`,
        description:`- feature film`,
        employer: `Eclectica, Crikvenica, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt37376089/`
    },
    
    {   
        year: `2025`, 
        position: `Lecturer`, 
        period: `Apr 2025 - Apr 2025`, 
        project: `Sound design workshop`,
        description:`- for kids`,
        employer: `Dječja Kuća, Rijeka, Croatia`, 
        link: `https://djecjakuca.hr/dogadjanje/radionica-foleyja-sinkronizacije-i-zvucnih-efekata/`
    },
    
    {   
        year: `2025`, 
        position: `Boom operator`, 
        period: `Jan 2025 - Feb 2025`, 
        project: `Citizen Vigilante`,
        description:`- feature film`,
        employer: `Borvel Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt35309713/?ref_=nm_knf_i_2`
    },
    
    {   
        year: `2024`, 
        position: `Boom operator`, 
        period: `Dec 2024 - Dec 2024`, 
        project: `Vjetar u Leđa`,
        description:`- short film`,
        employer: `Eclectica, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt38992930/?ref_=nm_flmg_job_1_accord_2_cdt_t_1`
    },
    
    {   
        year: `2024`, 
        position: `Boom operator`, 
        period: `Sep 2024 - Oct 2024`, 
        project: `Danas je Mama Živa`,
        description:`- feature film`,
        employer: `Dinaridi Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt37063260/`
    },
    
    {   
        year: `2024`, 
        position: `Boom operator`, 
        period: `Aug 2024 - Sep 2024`, 
        project: `Drugi Dnevnik Pauline P.`,
        description:`- feature film`,
        employer: `Jaka produkcija, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt38598406/`
    },
    
    {   
        year: `2024`, 
        position: `Boom operator`, 
        period: `Apr 2024 - Apr 2024`, 
        project: `Run`,
        description:`- feature film`,
        employer: `Borvel Film, Baška, Croatia`, 
        link: `https://www.imdb.com/title/tt32046683/?ref_=nm_flmg_job_1_unrel_t_3`
    },

    {   
        year: `2024`, 
        position: `Lecturer`, 
        period: `Apr 2024 - Apr 2024`, 
        project: `Sound design workshop`,
        description:`- for kids`,
        employer: `Dječja Kuća, Rijeka, Croatia`, 
        link: `https://djecjakuca.hr/dogadjanje/radionica-foleyja-sinkronizacije-i-zvucnih-efekata/`
    },

    {   
        year: `2024`, 
        position: `Boom operator`, 
        period: `Jan 2024 - Feb 2024`, 
        project: `Bijeli Put`,
        description:`- TV series`,
        employer: `Maxima film, Šibenik, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt33477410/fullcredits/?ref_=tt_cst_sm`
    },

    {   
        year: `2023`, 
        position: `Boom operator`, 
        period: `Oct 2023 - Nov 2023`, 
        project: `The Wolf, the Fox and the Leopard`,
        description:`- feature film`,
        employer: `Nucleus film, Zagreb, Pula, Croatia, Luxembourg`, 
        link: `https://www.imdb.com/title/tt35528069/?ref_=nm_flmg_job_1_unrel_t_1`
    },

    {   
        year: `2023`, 
        position: `Sound mixer`, 
        period: `Sep 2023 - Sep 2023`, 
        project: `Riba na Torti`,
        description:`- TV reality show`,
        employer: `Nova TV, Zagreb, Croatia`, 
        link: `https://novatv.dnevnik.hr/zabavni/riba-na-torti/`
    },

    {   
        year: `2023`, 
        position: `Boom operator`, 
        period: `Aug 2023 - Sep 2023`, 
        project: `Sluga`,
        description:`- experimental short film`,
        employer: `Apoteka - prostor za suvremenu umjetnost, Pula, Croatia`, 
        link: `https://havc.hr/infocentar/novosti/zavrseno-snimanje-eksperimentalnog-filma-sluga-matije-debeljuha`
    },

    {   
        year: `2023`, 
        position: `Boom operator`, 
        period: `May 2023 - Jul 2023`, 
        project: `Na vlnách Jadranu`,
        description:`- TV series`,
        employer: `Adriatic Studio Produkcija, Brač, Croatia`, 
        link: `https://www.imdb.com/title/tt29546449/?ref_=nm_flmg_job_1_cdt_t_2`
    },

    {   
        year: `2023`, 
        position: `Lecturer`, 
        period: `Apr 2023 - Apr 2023`, 
        project: `Sound design workshop`,
        description:`- for kids`,
        employer: `Dječja Kuća, Rijeka, Croatia`, 
        link: `https://djecjakuca.hr/dogadjanje/radionica-foleyja-sinkronizacije-i-zvucnih-efekata/`
    },

    {   
        year: `2022`, 
        position: `Boom operator`, 
        period: `Dec 2022 - Jan 2023`, 
        project: `Žene, luđaci i malo dobrih pedera`,
        description:`- feature film`,
        employer: `Plavi Mjesec, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt38633418/`
    },

    {   
        year: `2022`, 
        position: `Sound designer`, 
        period: `Apr 2022 - Feb 2023`, 
        project: `Aquatico`,
        description:`- sound effects and mixing`,
        employer: `Intercorona, Zagreb, Croatia`, 
        link: `https://store.steampowered.com/app/1812300/Aquatico`
    },

    {   
        year: `2022`, 
        position: `Lecturer`, 
        period: `Apr 2022 - Apr 2022`, 
        project: `Sound design workshop`,
        description:`- for kids`,
        employer: `Dječja Kuća, Rijeka, Croatia`, 
        link: `https://djecjakuca.hr/dogadjanje/radionica-foleyja-sinkronizacije-i-zvucnih-efekata/`
    },

    {   
        year: `2022`, 
        position: `Boom operator`, 
        period: `Jan 2022 - Jul 2022`, 
        project: `Dnevnik Pauline P.`,
        description:`- feature film`,
        employer: `Jaka Produkcija, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt27190968/?ref_=nm_knf_t_1`
    },

    {   
        year: `2022`, 
        position: `Boom operator`, 
        period: `Jan 2022 - Feb 2022`, 
        project: `Sirin`,
        description:`- feature film`,
        employer: `Podgorica, Montenegro`, 
        link: `https://www.imdb.com/title/tt11646964/`
    },

    {   
        year: `2021`, 
        position: `Boom operator`, 
        period: `Oct 2021 - Nov 2021`, 
        project: `Sedmo Nebo`,
        description:`- feature film`,
        employer: `Petnaesta Umjetnost, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt28222642/`
    },

    {   
        year: `2021`, 
        position: `Boom operator`, 
        period: `Sep 2021 - Oct 2021`, 
        project: `Hotel Pula`,
        description:`- feature film`,
        employer: `Kinematograf, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt17060982/?ref_=nm_knf_t_3`
    },

    {   
        year: `2021`, 
        position: `Sound mixer`, 
        period: `Sep 2021 - Jul 2022`, 
        project: `Kiddo`,
        description:`- short film`,
        employer: `Antitalent, Rijeka, Croatia`, 
        link: `https://www.imdb.com/title/tt14859416/?ref_=nm_knf_t_3`
    },

    {   
        year: `2021`, 
        position: `Boom operator`, 
        period: `Jun 2021 - Aug 2021`, 
        project: `Burning Days`,
        description:`- feature film`,
        employer: `4Film, Kapadokya, Turkey`, 
        link: `https://www.imdb.com/title/tt14859416/?ref_=nm_knf_t_3`
    },

    {   
        year: `2021`, 
        position: `Boom operator`, 
        period: `May 2021 - Jun 2021`, 
        project: `Stric`,
        description:`- feature film`,
        employer: `ECLECTICA, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt21113810/`
    },

    {   
        year: `2021`, 
        position: `Boom operator`, 
        period: `Apr 2021 - May 2021`, 
        project: `Minus i Plus`,
        description:`- TV sitcom`,
        employer: `Maxima Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt15500770/?ref_=fn_all_ttl_1`
    },

    {   
        year: `2020`, 
        position: `Sound mixer`, 
        period: `Aug 2020 - Apr 2021`, 
        project: `Večera za pet na selu`,
        description:`- TV reality show`,
        employer: `OHT Productions, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt4527002/?ref_=fn_all_ttl_4/`
    },

    {   
        year: `2020`, 
        position: `Sound mixer`, 
        period: `Nov 2020 - Nov 2020`, 
        project: `INA`,
        description:`- TV commercial`,
        employer: `MIT DIZAJN, Osijek, Croatia`, 
        link: `https://www.ina.hr/ina-prijatelj-hrvatskog-rukometa/`
    },

    {   
        year: `2020`, 
        position: `Boom operator`, 
        period: `Jun 2020 - Jun 2020`, 
        project: `Kaufland`,
        description:`- TV commercial`,
        employer: `RIBA RIBI GRIZE REP, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt16194366/?ref_=nm_ov_bio_lk`
    },

    {   
        year: `2020`, 
        position: `Sound designer`, 
        period: `Mar 2020 - May 2020`, 
        project: `Oblaci su Daleko`,
        description:`- indie short film`,
        employer: `BAKA, Sisak, Croatia`, 
        link: `https://www.imdb.com/title/tt16194366/?ref_=nm_ov_bio_lk`
    },

    {   
        year: `2020`, 
        position: `Boom operator`, 
        period: `Jan 2020 - Feb 2020`, 
        project: `Ko te Šiša`,
        description:`- TV sitcom season 5`,
        employer: `Fokus, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt7821088/`
    },

    {   
        year: `2019`, 
        position: `Boom operator`, 
        period: `Nov 2019 - Dec 2019`, 
        project: `Mayday`,
        description:`- feature film`,
        employer: `Antitalent, Pula, Croatia`, 
        link: `https://www.imdb.com/title/tt11271800/`
    },

    {   
        year: `2019`, 
        position: `Boom operator`, 
        period: `Sep 2019 - Nov 2019`, 
        project: `Po Tamburi`,
        description:`- feature film`,
        employer: `KAOS, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt11578464/?ref_=mv_sm`
    },

    {   
        year: `2019`, 
        position: `Lecturer`, 
        period: `Jul 2019 - Jul 2019`, 
        project: `Tobogan`,
        description:`- sound design workshop for kids`,
        employer: `ART KINO, Rijeka, Croatia`, 
        link: `https://visitrijeka.hr/event/tobogan-2025/`
    },

    {   
        year: `2019`, 
        position: `Sound mixer`, 
        period: `May 2019 - Jul 2019`, 
        project: `Ko te Šiša`,
        description:`- TV sitcom season 4`,
        employer: `Plavi Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt7821088/`
    },

    {   
        year: `2019`, 
        position: `Boom operator`, 
        period: `Jan 2019 - Feb 2019`, 
        project: `Ko te Šiša`,
        description:`- TV sitcom season 3`,
        employer: `Plavi Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt7821088/`
    },

    {   
        year: `2018`, 
        position: `Boom operator`, 
        period: `Oct 2018 - Dec 2018`, 
        project: `Na granici`,
        description:`- TV soap opera`,
        employer: `Nova TV, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt8802084/`
    },

    {   
        year: `2018`, 
        position: `Sound utility`, 
        period: `Aug 2018 - Aug 2018`, 
        project: `Glas`,
        description:`- feature film`,
        employer: `Maxima Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt8230080/`
    },

    {   
        year: `2018`, 
        position: `Boom operator`, 
        period: `Jun 2018 - Aug 2018`, 
        project: `Ko Te Šiša`,
        description:`- TV sitcom season 2`,
        employer: `Plavi Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt7821088/`
    },

    {   
        year: `2018`, 
        position: `Small business - Maltempo`, 
        period: `Jul 2018 - Present`, 
        project: `Maltempo`,
        description:`- I became the owner of a small business 
              for sound production`,
        employer: `Kraljevica, Croatia`, 
        link: `https://maltempoeffects.com/`
    },

    {   
        year: `2017`, 
        position: `Boom operator`, 
        period: `Sep 2017 - Dec 2017`, 
        project: `Ko Te Šiša`,
        description:`- TV sitcom season 1`,
        employer: `Plavi Film, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt7821088/`
    },

    {   
        year: `2017`, 
        position: `Boom operator`, 
        period: `Jul 2017 - Sep 2017`, 
        project: `Čista Ljubav`,
        description:`- TV soap opera`,
        employer: `Nova TV, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt7308488/`
    },

    {   
        year: `2017`, 
        position: `Sound Mixer`, 
        period: `Jun 2017 - Jun 2017`, 
        project: `Uvik isto`,
        description:`- feature documentary`,
        employer: `Šibenik, Croatia`, 
        link: `https://zlatnavrata.hr/dogadaj/3-dalmatia-film-festival-dokumentarni-program-2/974`
    },

    {   
        year: `2017`, 
        position: `Boom operator`, 
        period: `May 2017 - Jun 2017`, 
        project: `Duboki Rezovi - Predmeti koji tonu`,
        description:`- short film`,
        employer: `Kinematograf, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt8781538/?ref_=nm_knf_t_1`
    },

    {   
        year: `2017`, 
        position: `Sound designer`, 
        period: `May 2017 - May 2017`, 
        project: `Pijana Ulica`,
        description:`- short documentary`,
        employer: `FILMAKTIV, Rijeka, Croatia`, 
        link: `https://www.liburniafilmfestival.com/Arhiva/15.-LFF/Filmovi/Pijana-ulica`
    },

    {   
        year: `2017`, 
        position: `Sound designer`, 
        period: `Apr 2017 - Apr 2017`, 
        project: `Paštaria`,
        description:`- TV commercial`,
        employer: `PIK Rijeka, Paštaria Rijeka, Rijeka, Croatia`, 
        link: `https://www.youtube.com/watch?v=bYZPypT8rIU`
    },

    {   
        year: `2017`, 
        position: `Boom operator`, 
        period: `Feb 2017 - Feb 2017`, 
        project: `Zlatni Dvori`,
        description:`- TV soap opera`,
        employer: `Nova TV, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt5793764/`
    },

    {   
        year: `2016`, 
        position: `Sound mixer`, 
        period: `Dec 2016 - Sep 2017`, 
        project: `Glavno Jelo`,
        description:`- indie feature`,
        employer: `Association "Poligon", Rijeka, Croatia`, 
        link: `https://www.imdb.com/title/tt11571000/fullcredits/?ref_=tt_cst_sm`
    },

    {   
        year: `2016`, 
        position: `Boom operator`, 
        period: `Apr 2016 - Nov 2016`, 
        project: `Prava Žena`,
        description:`- TV soap opera`,
        employer: `OHT Productions, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt5793796/`
    },

    {   
        year: `2016`, 
        position: `Sound mixer`, 
        period: `Apr 2016 - Jun 2016`, 
        project: `Lux`,
        description:`- indie short documentary`,
        employer: `Rene Gallo, Rijeka, Crotia`, 
        link: `https://www.youtube.com/watch?v=rNR1hrKM3ZA`
    },

    {   
        year: `2016`, 
        position: `Sound mixer`, 
        period: `Feb 2016 - Jul 2017`, 
        project: `Viva Ludež`,
        description:`- feature documentary`,
        employer: `Association Facultas, Rijeka, Croatia`, 
        link: `https://havc.hr/hrvatski-film/katalog-hrvatskih-filmova/viva-ludez-razgovor-s-trojicom-od-ferala`
    },

    {   
        year: `2016`, 
        position: `Sound designer`, 
        period: `Jan 2016 - Mar 2016`, 
        project: `Pick & Play`,
        description:`- theatre play`,
        employer: `Drugo More, Rijeka, Croatia`, 
        link: `https://radio.hrt.hr/radio-rijeka/kultura/pick-play-predstava-za-jednog-izvodaca-i-samo-jednoga-gledatelja-3780234`
    },

    {   
        year: `2015`, 
        position: `Sound mixer`, 
        period: `Dec 2015 - Apr 2016`, 
        project: `Prekid programa zbog znanosti`,
        description:`- educational TV series`,
        employer: `Croatian Radiotelevision, Zagreb, Croatia`, 
        link: `https://www.hrt.hr/`
    },

    {   
        year: `2015`, 
        position: `Sound mixer`, 
        period: `Oct 2015 - Feb 2016`, 
        project: `Fuck Off I Love You`,
        description:`- indie feature film`,
        employer: `DOP Produkcija, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt6436082/`
    },

    {   
        year: `2015`, 
        position: `Dialogue editor`, 
        period: `Jun 2015 - Jul 2015`, 
        project: `Transmania`,
        description:`- feature film`,
        employer: `Zebra Creative Production, Zagreb, Croatia`, 
        link: `https://www.imdb.com/title/tt5898218/`
    },
    
    {   
        year: `2015`, 
        position: `Sound mixer`, 
        period: `Apr 2015 - May 2015`, 
        project: `Miss`,
        description:`- indie short`,
        employer: `Rene Gallo, Rijeka, Croatia`, 
        link: `https://www.youtube.com/watch?v=6L3BUE0g0AM&t=1s`
    },

    {   
        year: `2015`, 
        position: `Sound designer`, 
        period: `Apr 2015 - Apr 2015`, 
        project: `Radenska`,
        description:`- recorded and designed a splash 
              sound effect for a TV commercial for mineral water`,
        employer: `Zaslon S.P., Ljubljana, Slovenia`, 
        link: `https://www.youtube.com/watch?v=bdV7-T_xEyw`
    },

    {   
        year: `2014`, 
        position: `Live sound`, 
        period: `Jan 2014 - Sep 2015`, 
        project: `Concerts`,
        description:`various small music concerts, festivals and events`,
        employer: `Klub "Tunel", Klub "Klub", Rijeka, Croatia`, 
        link: `https://www.imdb.com/title/tt6436082/`
    }
]

function displayResume () {
    let article = ``;
    for (i = 0; i < resumeObject.length; i++) {
        article = `
            <article class="resume-job">
                <div class="job-title">
                    <h3 class="job-position">${resumeObject[i].position}</h3>
                    <p class="job-period">${resumeObject[i].period}</p>
                </div>
                <div class="job-info">
                    <p class="project-title">${resumeObject[i].project}</p>
                    <p class="job-description job-text">
                        ${resumeObject[i].description}
                    </p>
                    <p class="job-employer job-text">${resumeObject[i].employer}</p>
                    <a class="project-button" href="${resumeObject[i].link}" target="_blank">
                        Project Info
                    </a>
                </div>
            </article>`; 
        if (resumeObject[i].year === `2014`) {
            yearOne.innerHTML += article;
        } else if (resumeObject[i].year === `2015`) {
            yearTwo.innerHTML += article;
        } else if (resumeObject[i].year === `2016`) {
            yearThree.innerHTML += article;
        } else if (resumeObject[i].year === `2017`) {
            yearFour.innerHTML += article;
        } else if (resumeObject[i].year === `2018`) {
            yearFive.innerHTML += article;
        }  else if (resumeObject[i].year === `2019`) {
            yearSix.innerHTML += article;
        }  else if (resumeObject[i].year === `2020`) {
            yearSeven.innerHTML += article;
        }  else if (resumeObject[i].year === `2021`) {
            yearEight.innerHTML += article;
        }  else if (resumeObject[i].year === `2022`) {
            yearNine.innerHTML += article;
        }  else if (resumeObject[i].year === `2023`) {
            yearTen.innerHTML += article;
        }  else if (resumeObject[i].year === `2024`) {
            yearEleven.innerHTML += article;
        }  else if (resumeObject[i].year === `2025`) {
            yearTwelve.innerHTML += article;
        }  else if (resumeObject[i].year === `2026`) {
            yearThirteen.innerHTML += article;
        }    
    }
    
}

displayResume();



