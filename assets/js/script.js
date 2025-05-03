'use strict';

// ========== EXISTING CODE UP TOP REMAINS UNCHANGED ==========
const musicData = [
    {
        backgroundImage: "./assets/images/poster-1.jpg",
        posterUrl: "./assets/images/poster-1.jpg",
        title: "Allegretto in A Minor",
        album: "Allegretto in A Minor",
        year: 2024,
        artist: "Ulvin Najafov, Ludwig van Beethoven",
        musicPath: "./assets/music/music-1.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-2.jpg",
        posterUrl: "./assets/images/poster-2.jpg",
        title: "Brise d\u2019Hiver",
        album: "Brise d\u2019Hiver",
        year: 2024,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-2.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-3.jpg",
        posterUrl: "./assets/images/poster-3.jpg",
        title: "Chanson des R\u00EAves",
        album: "Chanson des R\u00EAves",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-3.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-4.jpg",
        posterUrl: "./assets/images/poster-4.jpg",
        title: "Drammatico in C minor",
        album: "Drammatico in C minor - Suite for String Orchestra",
        year: 2025,
        artist: "Ulvin Najafov, String Section",
        musicPath: "./assets/music/music-4.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-5.jpg",
        posterUrl: "./assets/images/poster-5.jpg",
        title: "Fantasy Waltz in B minor",
        album: "Fantasy Waltz in B minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-5.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-6.jpg",
        posterUrl: "./assets/images/poster-6.jpg",
        title: "Fugue in F minor",
        album: "Fugue in F minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-6.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-7.jpg",
        posterUrl: "./assets/images/poster-7.jpg",
        title: "Fugue in G minor",
        album: "Fugue in G minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-7.mp3",
    }, {
        backgroundImage: "./assets/images/poster-8.jpg",
        posterUrl: "./assets/images/poster-8.jpg",
        title: "Incubo Notturno",
        album: "Incubo Notturno",
        year: 2025,
        artist: "Ulvin Najafov, Fr\u00E9d\u00E9ric Chopin",
        musicPath: "./assets/music/music-8.mp3",
    }, {
        backgroundImage: "./assets/images/poster-9.jpg",
        posterUrl: "./assets/images/poster-9.jpg",
        title: "Konzert in d-Moll : f\u00FCr Cello und Streicher",
        album: "Konzert in d-Moll : f\u00FCr Cello und Streicher",
        year: 2025,
        artist: "Ulvin Najafov, String Section",
        musicPath: "./assets/music/music-9.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-10.jpg",
        posterUrl: "./assets/images/poster-10.jpg",
        title: "L\u2019Amour et le Destin",
        album: "L\u2019Amour et le Destin - Suite for String Orchestra",
        year: 2025,
        artist: "Ulvin Najafov, String Section",
        musicPath: "./assets/music/music-10.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-11.jpg",
        posterUrl: "./assets/images/poster-11.jpg",
        title: "La Valse Masqu\u00E9e",
        album: "La Valse Masqu\u00E9e",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-11.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-12.jpg",
        posterUrl: "./assets/images/poster-12.jpg",
        title: "Liebestr\u00E4ume",
        album: "Liebestr\u00E4ume",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-12.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-13.jpg",
        posterUrl: "./assets/images/poster-13.jpg",
        title: "Nocturnal Fantasy",
        album: "Nocturnal Fantasy",
        year: 2024,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-13.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-14.jpg",
        posterUrl: "./assets/images/poster-14.jpg",
        title: "Nocturne des Ombres",
        album: "Nocturne des Ombres",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-14.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-15.jpg",
        posterUrl: "./assets/images/poster-15.jpg",
        title: "Nocturne M\u00E9lancolique No.1",
        album: "Nocturne M\u00E9lancolique in B Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-15.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-15.jpg",
        posterUrl: "./assets/images/poster-15.jpg",
        title: "Nocturne M\u00E9lancolique No.2",
        album: "Nocturne M\u00E9lancolique in B Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-16.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-16.jpg",
        posterUrl: "./assets/images/poster-16.jpg",
        title: "Nocturne of Nights",
        album: "Nocturne of Nights",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-17.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-17.jpg",
        posterUrl: "./assets/images/poster-17.jpg",
        title: "Overture - Amor et Mors",
        album: "Overture - Amor et Mors",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-18.mp3",
    }, {
        backgroundImage: "./assets/images/poster-18.jpg",
        posterUrl: "./assets/images/poster-18.jpg",
        title: "Piano Concerto No. 1 in E minor, Moderato",
        album: "Piano Concerto No.1 in E minor",
        year: 2024,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-19.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-18.jpg",
        posterUrl: "./assets/images/poster-18.jpg",
        title: "Piano Concerto No. 1 in E minor, Adagio",
        album: "Piano Concerto No.1 in E minor",
        year: 2024,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-20.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-18.jpg",
        posterUrl: "./assets/images/poster-18.jpg",
        title: "Piano Concerto No. 1 in E minor, Allegro",
        album: "Piano Concerto No.1 in E minor",
        year: 2024,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-21.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-19.jpg",
        posterUrl: "./assets/images/poster-19.jpg",
        title: "Prelude in E minor",
        album: "Prelude in E minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-22.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-20.jpg",
        posterUrl: "./assets/images/poster-20.jpg",
        title: "Scherzo - Tarantella",
        album: "Scherzo - Tarantella",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-23.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-21.jpg",
        posterUrl: "./assets/images/poster-21.jpg",
        title: "She Left in C Minor",
        album: "She Left in C Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-24.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-22.jpg",
        posterUrl: "./assets/images/poster-22.jpg",
        title: "Sinfonia dei Venti, Allegro",
        album: "Sinfonia dei Venti",
        year: 2025,
        artist: "Ulvin Najafov, Daniel Koschitzki - Altblockfl\u00F6te, S\u00FCdwestdeutsches Kammerorchester Pforzheim, Ltg. Douglas Bostock",
        musicPath: "./assets/music/music-25.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-22.jpg",
        posterUrl: "./assets/images/poster-22.jpg",
        title: "Sinfonia dei Venti, Andante",
        album: "Sinfonia dei Venti",
        year: 2025,
        artist: "Ulvin Najafov, Daniel Koschitzki - Altblockfl\u00F6te, S\u00FCdwestdeutsches Kammerorchester Pforzheim, Ltg. Douglas Bostock",
        musicPath: "./assets/music/music-26.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-22.jpg",
        posterUrl: "./assets/images/poster-22.jpg",
        title: "Sinfonia dei Venti, Vivo",
        album: "Sinfonia dei Venti",
        year: 2025,
        artist: "Ulvin Najafov, Daniel Koschitzki - Altblockfl\u00F6te, S\u00FCdwestdeutsches Kammerorchester Pforzheim, Ltg. Douglas Bostock",
        musicPath: "./assets/music/music-27.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-23.jpg",
        posterUrl: "./assets/images/poster-23.jpg",
        title: "Sonate f\u00FCr Violine und Klavier in e-Moll",
        album: "Sonate f\u00FCr Violine und Klavier in e-Moll",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-28.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-24.jpg",
        posterUrl: "./assets/images/poster-24.jpg",
        title: "Dance of the Dunes",
        album: "Suite Arabe",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-29.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-24.jpg",
        posterUrl: "./assets/images/poster-24.jpg",
        title: "The Sheikh's Celebration",
        album: "Suite Arabe",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-30.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-25.jpg",
        posterUrl: "./assets/images/poster-25.jpg",
        title: "Serenata para una Rosa",
        album: "Suite Espa\u00F1ola",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-31.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-25.jpg",
        posterUrl: "./assets/images/poster-25.jpg",
        title: "Baile de Sevilla",
        album: "Suite Espa\u00F1ola",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-32.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-26.jpg",
        posterUrl: "./assets/images/poster-26.jpg",
        title: "Symphony No. 1 in C Minor, Allegro maestoso",
        album: "Symphony No. 1 in C Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-33.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-26.jpg",
        posterUrl: "./assets/images/poster-26.jpg",
        title: "Symphony No. 1 in C Minor, Adagio",
        album: "Symphony No. 1 in C Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-34.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-26.jpg",
        posterUrl: "./assets/images/poster-26.jpg",
        title: "Symphony No. 1 in C Minor, Scherzo. Allegro",
        album: "Symphony No. 1 in C Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-35.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-26.jpg",
        posterUrl: "./assets/images/poster-26.jpg",
        title: "Symphony No. 1 in C Minor, Largo. Allegro con brio",
        album: "Symphony No. 1 in C Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-36.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-27.jpg",
        posterUrl: "./assets/images/poster-27.jpg",
        title: "Tears of the Sky",
        album: "Tears of the Sky",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-37.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-28.jpg",
        posterUrl: "./assets/images/poster-28.jpg",
        title: "The Twilight of Farhad\u2019s Soul",
        album: "The Twilight of Farhad\u2019s Soul",
        year: 2025,
        artist: "Ulvin Najafov, String Section",
        musicPath: "./assets/music/music-38.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-29.jpg",
        posterUrl: "./assets/images/poster-29.jpg",
        title: "Triptych in E Minor - From Devil to Angel",
        album: "Triptych in E Minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-39.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-30.jpg",
        posterUrl: "./assets/images/poster-30.jpg",
        title: "Valse Languide",
        album: "Valse Languide",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-40.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-31.jpg",
        posterUrl: "./assets/images/poster-31.jpg",
        title: "Valse M\u00E9lancolie",
        album: "Valse M\u00E9lancolie",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-41.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-32.jpg",
        posterUrl: "./assets/images/poster-32.jpg",
        title: "Valse Melancolique",
        album: "Valse Melancolique",
        year: 2025,
        artist: "Ulvin Najafov, Aleksandr Dargomyzhsky",
        musicPath: "./assets/music/music-42.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-33.jpg",
        posterUrl: "./assets/images/poster-33.jpg",
        title: "Valse Noire",
        album: "Valse Noire",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-43.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-34.jpg",
        posterUrl: "./assets/images/poster-34.jpg",
        title: "Valse Sans Paroles",
        album: "Valse Sans Paroles",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-44.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-35.jpg",
        posterUrl: "./assets/images/poster-35.jpg",
        title: "Valse Sans Paroles - Violin arrangement",
        album: "Valse Sans Paroles",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-45.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-36.jpg",
        posterUrl: "./assets/images/poster-36.jpg",
        title: "Waltz for No One",
        album: "Waltz for No One",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-46.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-37.jpg",
        posterUrl: "./assets/images/poster-37.jpg",
        title: "Waltz Fun\u00E8bre - Short Version",
        album: "Waltz Fun\u00E8bre",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-47.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-37.jpg",
        posterUrl: "./assets/images/poster-37.jpg",
        title: "Waltz Fun\u00E8bre - Full Version",
        album: "Waltz Fun\u00E8bre",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-48.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-38.jpg",
        posterUrl: "./assets/images/poster-38.jpg",
        title: "Waltz in A minor",
        album: "Waltz in A minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-49.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-39.jpg",
        posterUrl: "./assets/images/poster-39.jpg",
        title: "Waltz of the Forgotten Dream",
        album: "Waltz of the Forgotten Dream",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-50.mp3",
    },
    {
        backgroundImage: "./assets/images/poster-40.jpg",
        posterUrl: "./assets/images/poster-40.jpg",
        title: "Waltz-Ballade in G minor",
        album: "Waltz-Ballade in G minor",
        year: 2025,
        artist: "Ulvin Najafov",
        musicPath: "./assets/music/music-51.mp3",
    },
];

const addEventOnElements = (elements, eventType, callback) =>
    elements.forEach(el => el.addEventListener(eventType, callback));

// ========== DOM REFERENCES ==========

const playlist = document.querySelector("[data-music-list]");
const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");
const playlistItems = [];
const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");
const playerRunningTime = document.querySelector("[data-running-time]");
const ranges = document.querySelectorAll("[data-range]");
const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");
const playBtn = document.querySelector("[data-play-btn]");
const playerSkipNextBtn = document.querySelector("[data-skip-next]");
const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");
const playerShuffleBtn = document.querySelector("[data-shuffle]");
const playerRepeatBtn = document.querySelector("[data-repeat]");
const rangeFill = document.querySelector("[data-range-fill]");

const shortcutPopup = document.querySelector(".shortcut-help");
const closeHelpBtn = document.querySelector(".close-help");
const helpBox = document.querySelector(".help-box"); 

// ========== INIT STATE ==========
let currentMusic = 0;
let lastPlayedMusic = 0;
let isShuffled = false;
let playInterval;
let audioSource = new Audio(musicData[currentMusic].musicPath);
let repeatMode = 0; // 0 = off, 1 = repeat all, 2 = repeat one

// ========== HELP POPUP ==========
const showHelp = () => {
    shortcutPopup.classList.remove("hidden");
    helpBox.focus();
};
const hideHelp = () => shortcutPopup.classList.add("hidden");
const toggleHelp = () => shortcutPopup.classList.toggle("hidden");
window.addEventListener("DOMContentLoaded", () => {
    showHelp();
    updateRepeatButtonIcon(); // set initial repeat icon

    const helpBtn = document.querySelector("[data-help-btn]");
    if (helpBtn) helpBtn.addEventListener("click", toggleHelp);
});
closeHelpBtn.addEventListener("click", hideHelp);
helpBox.addEventListener("click", e => e.stopPropagation());
document.addEventListener("click", e => {
    if (!shortcutPopup.classList.contains("hidden") && !helpBox.contains(e.target)) hideHelp();
});


// ========== PLAYLIST INIT ==========
musicData.forEach((track, i) => {
    const el = document.createElement("li");
    el.innerHTML = `
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${track.posterUrl}" class="img-cover" width="800" height="800" alt="${track.title} Album Poster">
      <div class="item-icon"><span class="material-symbols-rounded">equalizer</span></div>
    </button>
  `;
    playlist.appendChild(el);
    playlistItems.push(el.querySelector("button"));
});

// ========== UI + AUDIO STATE ==========
const updateRangeFill = function () {
    const rangeValue = (this.value / this.max) * 100;
    this.nextElementSibling.style.width = `${rangeValue}%`;
};

const getTimecode = secs => {
    const min = Math.floor(secs / 60);
    const sec = Math.ceil(secs % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

const updateDuration = () => {
    playerSeekRange.max = Math.ceil(audioSource.duration);
    playerDuration.textContent = getTimecode(audioSource.duration);
};

const updateRunningTime = () => {
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill.call(playerSeekRange);

    if (audioSource.ended) {
        clearInterval(playInterval);
        switch (repeatMode) {
            case 0:
                playBtn.classList.remove("active");
                break;
            case 1:
                skipNext();
                break;
            case 2:
                audioSource.currentTime = 0;
                audioSource.play();
                playInterval = setInterval(updateRunningTime, 500);
                break;
        }
    }
};

const changeVolume = () => {
    const volume = Math.max(0, Math.min(playerVolumeRange.value, 1));
    audioSource.volume = volume;
    audioSource.muted = volume === 0;

    playerVolumeBtn.children[0].textContent =
        volume <= 0.05 ? "volume_mute" :
            volume <= 0.5 ? "volume_down" : "volume_up";

    updateRangeFill.call(playerVolumeRange);
};

// ========== PLAYBACK ==========
const playMusic = () => {
    if (audioSource.paused) {
        audioSource.play();
        playBtn.classList.add("active");
        playInterval = setInterval(updateRunningTime, 500);
    } else {
        audioSource.pause();
        playBtn.classList.remove("active");
        clearInterval(playInterval);
    }
};

const changePlayerInfo = () => {
    audioSource.pause();
    clearInterval(playInterval);
    audioSource = new Audio(musicData[currentMusic].musicPath);
    audioSource.addEventListener("loadeddata", updateDuration);
    document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
    playerBanner.src = musicData[currentMusic].posterUrl;
    playerBanner.alt = `${musicData[currentMusic].title} Album Poster`;
    playerTitle.textContent = musicData[currentMusic].title;
    playerAlbum.textContent = musicData[currentMusic].album;
    playerYear.textContent = musicData[currentMusic].year;
    playerArtist.textContent = musicData[currentMusic].artist;

    changeVolume();
    playMusic();
};

const changePlaylistItem = () => {
    playlistItems[lastPlayedMusic].classList.remove("playing");
    playlistItems[currentMusic].classList.add("playing");
};

// ========== CONTROLS ==========
const togglePlaylist = () => {
    playlistSideModal.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("modalActive");
};

const seek = () => {
    audioSource.currentTime = playerSeekRange.value;
    updateRunningTime();
};

const skipNext = () => {
    lastPlayedMusic = currentMusic;
    currentMusic = isShuffled ? Math.floor(Math.random() * musicData.length) : (currentMusic + 1) % musicData.length;
    changePlaylistItem();
    changePlayerInfo();
};

const skipPrev = () => {
    lastPlayedMusic = currentMusic;
    currentMusic = isShuffled ? Math.floor(Math.random() * musicData.length) : (currentMusic - 1 + musicData.length) % musicData.length;
    changePlaylistItem();
    changePlayerInfo();
};

const shuffle = () => {
    isShuffled = !isShuffled;
    playerShuffleBtn.classList.toggle("active");
};

// ===== REPEAT MODES (0=Off, 1=All, 2=One) =====
const updateRepeatButtonIcon = () => {
    const icon = playerRepeatBtn.querySelector(".material-symbols-rounded");

    if (repeatMode === 0) {
        icon.textContent = "repeat";
        icon.style.color = "white";
        playerRepeatBtn.classList.remove("active");
    } else if (repeatMode === 1) {
        icon.textContent = "repeat";
        icon.style.color = "#75d1ff";
        playerRepeatBtn.classList.remove("active"); // <-- not active yet
    } else if (repeatMode === 2) {
        icon.textContent = "repeat_one";
        icon.style.color = "#75d1ff";
        playerRepeatBtn.classList.add("active"); // <-- only now it's active
    }
};

const toggleRepeatMode = () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonIcon();
};

const muteVolume = () => {
    if (!audioSource.muted) {
        audioSource.muted = true;
        playerVolumeBtn.children[0].textContent = "volume_off";
    } else {
        changeVolume();
    }
};

// ========== EVENT BINDING ==========
addEventOnElements([...playlistTogglers], "click", togglePlaylist);
addEventOnElements(playlistItems, "click", function () {
    lastPlayedMusic = currentMusic;
    currentMusic = Number(this.dataset.playlistItem);
    changePlaylistItem();
    changePlayerInfo();
});
addEventOnElements(ranges, "input", updateRangeFill);
playerSeekRange.addEventListener("input", seek);
playerVolumeRange.addEventListener("input", changeVolume);
playerVolumeBtn.addEventListener("click", muteVolume);
playBtn.addEventListener("click", playMusic);
playerSkipNextBtn.addEventListener("click", skipNext);
playerSkipPrevBtn.addEventListener("click", skipPrev);
playerShuffleBtn.addEventListener("click", shuffle);
playerRepeatBtn.addEventListener("click", toggleRepeatMode);

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    switch (e.key.toLowerCase()) {
        case " ":
            e.preventDefault();
            playMusic();
            break;
        case "arrowright":
            audioSource.currentTime = Math.min(audioSource.currentTime + 5, audioSource.duration);
            break;
        case "arrowleft":
            audioSource.currentTime = Math.max(audioSource.currentTime - 5, 0);
            break;
        case "arrowup":
            e.preventDefault();
            playerVolumeRange.value = Math.min(Number(playerVolumeRange.value) + 0.05, 1);
            changeVolume();
            break;
        case "arrowdown":
            e.preventDefault();
            playerVolumeRange.value = Math.max(Number(playerVolumeRange.value) - 0.05, 0);
            changeVolume();
            break;
        case "r":
            toggleRepeatMode();
            break;
        case "s":
            playerShuffleBtn.click();
            break;
        case "n":
            playerSkipNextBtn.click();
            break;
        case "p":
            playerSkipPrevBtn.click();
            break;
        case "h":
            toggleHelp();
            break;
        case "escape":
            hideHelp();
            break;
    }
});
