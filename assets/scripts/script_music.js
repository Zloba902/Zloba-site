import Webamp from "https://unpkg.com/webamp@^2/butterchurn";
const webamp = new Webamp({
    windowLayout: {
        main: {
            position: { top: 20, left: 60 },
            shadeMode: false,
            closed: false,
        },
        equalizer: {
            position: { top: 230, left: 0 },
            shadeMode: false,
            closed: false,
        },
        playlist: {
            position: { top: 28, left: 0 },
            shadeMode: false,
            size: { extraHeight: 3, extraWidth: 11 },
            closed: false,
        },
        milkdrop: {
            position: { top: 28, left: 0 },
            shadeMode: false,
            size: { extraHeight: 3, extraWidth: 11 },
            closed: true,
        },
    }, 

     
    initialTracks: [
        {
            metaData: {
                artist: "Pilotredsun",
                title: "Greetings",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Pilotredsun%20-%20Greetings%20%5B1pWbt50HjMs%5D.mp3",

        },
        {
            metaData: {
                artist: "???",
                title: "Great Fairy Fountain",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Great%20Fairy%20Fountain%20%5B_VjJZtF5qtA%5D.mp3",

        },
        {
            metaData: {
                artist: "Black Souls",
                title: "Name, Alice",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Black%20Souls%20-%20Name%2C%20Alice%20%5Bt0nrfxFIPpg%5D.mp3",

        },
        {
            metaData: {
                artist: "DS2-OST",
                title: "Majula",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Majula.mp3",

        },
        {
            metaData: {
                artist: "???",
                title: "The Bohemian Library",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Black%20Souls%20-%20Name%2C%20Alice%20%5Bt0nrfxFIPpg%5D.mp3",
            
        },
        {
            metaData: {
                artist: "shiftyz",
                title: "Temporary",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Temporary%20%5B7Xg6RNI3yk0%5D.mp3",
            
        },
        {
            metaData: {
                artist: "???",
                title: "First Date",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/First%20Date%20%5BMIAL5c_CJrY%5D.mp3",

        },
        {
            metaData: {
                artist: "???",
                title: "i think i love you 2",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/i%20think%20i%20love%20you%202%20%5BfwI8Q1Dn35Q%5D.mp3",

        },
        {
            metaData: {
                artist: "???",
                title: "Бабочка в правильном геликоде",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/%D0%B1%D0%B0%D0%B1%D0%BE%D1%87%D0%BA%D0%B0%20%D0%B2%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D0%B3%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B8%D0%B4%D0%B5.%20%5Bm8i4YubnLSI%5D.mp3",

        },
        {
            metaData: {
                artist: "???",
                title: "all ill ever amount to is nothing at all",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/all%20ill%20ever%20amount%20to%20is%20nothing%20at%20all%20%5BzqelyrorDUI%5D.mp3",
  
        },
        {
            metaData: {
                artist: "???",
                title: "rises the moon",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/rises%20the%20moon%20%5B5e1zT7miep8%5D.mp3",

        },
        {
            metaData: {
                artist: "GAKHED",
                title: "we still have so much time",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/we%20still%20have%20so%20much%20time%20%5BP0VwQrCAAbc%5D.mp3",

        },
        {
            metaData: {
                artist: "Reminor band",
                title: "Город",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%20%5BTxOlKi-9nFU%5D.mp3",

        },
           {
            metaData: {
                artist: "Sad-artist",
                title: "credits song for my death remix",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/past%20the%20credits%20%EF%BD%9C%EF%BD%9C%20credits%20song%20for%20my%20death%20remix%20%5BrQrCIxzIgs0%5D.mp3",

        },
           {
            metaData: {
                artist: "breakcore gir и lKarōshi",
                title: "anybody can find love (except you.) (breakcore, slowed + reverb instrumental)",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/anybody%20can%20find%20love%20(except%20you.)%20(breakcore%2C%20slowed%20%2B%20reverb%20instrumental)%20%5BqAfI5E4p6mA%5D.mp3",

        },
         {
            metaData: {
                artist: "Omo the Maid",
                title: "Werewolf - Beatdown Competition",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Werewolf%20-%20Beatdown%20Competition%20%5B2062526712%5D.mp3",

        },
          {
            metaData: {
                artist: "Yakui The Maid",
                title: "Bring Me The #2007",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Yakui%20The%20Maid%20-%20Bring%20Me%20The%20%232007%20%5B1214473294%5D.mp3",

        },
          {
            metaData: {
                artist: "Dorei The Maid",
                title: "Painful And Sad",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Dorei%20The%20Maid%20-%20Painful%20And%20Sad%20%5B1599359625%5D.mp3",

        },
          {
            metaData: {
                artist: "Village (Remake)",
                title: "Komak The Maid",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Village%20(Remake)%20%5B1523262772%5D.mp3",

        },
        {
            metaData: {
                artist: "Dracodraco",
                title: "Freefall",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/Dracodraco%20-%20Freefall%20%5B1786209753%5D.mp3",

        },
        {
            metaData: {
                artist: "Doodles",
                title: "CASTLE VEIN (COVER) ⧸⧸⧸ CHILD OF BLASPHEMY Feat. Kasane Teto ",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/CASTLE%20VEIN%20(COVER)%20%E2%A7%B8%E2%A7%B8%E2%A7%B8%20CHILD%20OF%20BLASPHEMY%20Feat.%20Kasane%20Teto%20%5BthXUHWEJLYU%5D.mp3",

        },
    ]
});

webamp.renderInto(document.getElementById("app"));