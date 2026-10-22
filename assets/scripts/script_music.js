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

     initialSkin: {
          url: "https://file.garden/atWE_KEZunvJtot9/Kohime%20Ouse%20-%20Kaleidoscope.wsz",
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
                artist: "Reminor band",
                title: "Город",
            },
            url: "https://file.garden/atWE_KEZunvJtot9/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%20%5BTxOlKi-9nFU%5D.mp3",

        },
    ]
});

webamp.renderInto(document.getElementById("app"));