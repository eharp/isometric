var murals = {
    Ballard: {
        Div: "blue1",
        Path: 'ballard.json',
        Artist: 'Kyler Martz',
        Location: 'Shilshole Ave & NW Dock Pl, Ballard Hardware',
        Year: "2011",
        Description: "blah blah"
    },
    Cinerama: {
        Div: "blue4",
        Path: 'cinerama.json',
        Artist: 'Invisible Creatures',
        Location: 'Cinerama Downtown',
        Year: "2011",
        Description: "blah blah"
    },
    Sodo: {
        Div: "blue7",
        Path: 'ballard.json',
        Artist: 'Velvet & Zoer',
        Location: 'Sodo Track',
        Year: "2011",
        Description: "Zoer and Velvet, fine artists and muralists who find ample inspiration in the scrap yards of Paris, were right at home painting on the Pacific Iron & Metal building in SODO. Known for their collage style of painting, often incorporating the automobile with abstracted representational objects and lush colors, they developed Everything with the freedom of mobility in mind. An interpretation of the American-born hippie movement, they revisit a “concept that crossed borders and has been reinterpreted all over the world.” source Sodo Track"
    },
    Georgetown: {
        Div: "blue9",
        Path: 'ballard.json',
        Artist: 'Stacey Rozich ',
        Location: 'Ciudad, Georgetown',
        Year: "2011",
        Description: "blah blah"
    },
    James: {
        Div: "blue6",
        Path: 'freeway.json',
        Artist: 'Nathan Watkins',
        Location: 'James st freeway pillars',
        Year: "2011",
        Description: "blah blah"
    },
    Sorrento: {
        Div: "blue5",
        Path: 'ballard.json',
        Artist: 'Ellen Picken',
        Location: '9th and Madison, Sorrento Hotel, First Hill',
        Year: "2011",
        Description: "blah blah"
    },
       About: {
        Div: "about",
        Path: 'roll.json',
        Artist: 'MADE BY',
        Location: 'Dominic and Elise',
        Year: "2019",
        Description: "Interactive Winter Quarter"
    },
};

Object.keys(murals).forEach(function (key) {
    var mural = murals[key];
    mural.animation = bodymovin.loadAnimation({
        container: document.getElementById(mural.Div),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'animation/' + mural.Path
    });
});

function clickHandler(muralName) {
    var mural = murals[muralName];
    scrollToMural(mural);
    playAnimationAfterDelay(mural);
    updateArtistInfo(mural);
}

function scrollToMural(mural) {
    var elmnt = document.getElementById(mural.Div);
    elmnt.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

function playAnimationAfterDelay(mural) {
    setTimeout(function () {
        mural.animation.play()
    }, 2000);
}

function updateArtistInfo(mural) {
    document.getElementById("artist").innerHTML = mural.Artist;
    document.getElementById("location").innerHTML = mural.Location;
    document.getElementById("year").innerHTML = mural.Year;
    document.getElementById("description").innerHTML = mural.Description;
}
