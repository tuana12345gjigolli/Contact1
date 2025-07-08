
const booksData = {
  children: [
    {
      title: "Libri i Magjishëm",
      img: "https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg",
      quote: "Imagjinata është fillimi i gjithçkaje!"
    },
    {
      title: "Aventurat e Fëmijëve",
      img: "Aventurat e femijeve.jfif",
      quote: "Çdo fëmijë meriton një aventurë."
    },
    {
      title: "Përralla për Natën",
      img: "Perralla per naten.jpg",
      quote: "Nata sjell ëndrra të bukura."
    },
    {
      title: "Magjia e Shkollës",
      img: "https://m.media-amazon.com/images/I/81VStYnDGrL.jpg",
      quote: "Mësimi është një magji më vete!"
    },
    {
      title: "Udhëtimi i Ëndrrave",
      img: "udhetimi i anijes me vela.jpg",
      quote: "Çdo ëndërr na udhëheq drejt të pamundurës."
    },
    {
      title: "Botë Fantastike",
      img: "bote fantastike.jpg",
      quote: "Imagjinata ska kufi!"
    },
    {
      title: "Deti i Përrallave",
      img: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
      quote: "Një det me histori magjike."
    },
    {
      title: "Sekreti i Pyllit",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
      quote: "Zbulo sekretet e natyrës."
    }
  ],
  teens: [
    {
      title: "Hapat e Ëndrrave",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
      quote: "Mos ndalo së ëndërruari."
    },
    {
      title: "Sekretet e Miqësisë",
      img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      quote: "Miqtë janë thesari më i çmuar."
    },
    {
      title: "Rrugët e Parë",
      img: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
      quote: "Çdo hap na çon më afër qëllimeve tona."
    },
    {
      title: "Liria e Adoleshencës",
      img: "https://m.media-amazon.com/images/I/71xLmdLOQ0L.jpg",
      quote: "Liria fillon me të vërtetën tënde."
    },
    {
      title: "Fjala e Artë",
      img: "fjala e arte.jfif",
      quote: "Fjala e mirë është dhuratë që mbetet përherë."
    },
    {
      title: "Zemra e Fortë",
      img: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
      quote: "Besimi i vërtetë lind nga zemra."
    },
    {
      title: "Ëndrrat e Guximit",
      img: "enderrat e guximit.jfif",
      quote: "Ëndrrat i përkasin guximtarëve."
    },
    {
      title: "Universi i Brendshëm",
      img: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
      quote: "Zbulo vetveten, zbulo botën."
    }
  ],
  adults: [
    {
      title: "Filozofia e Jetës",
      img: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
      quote: "Jeta është ajo që bëjmë prej saj."
    },
    {
      title: "Rrugët e Suksesit",
      img: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
      quote: "Suksesi është një udhëtim, jo një destinacion."
    },
    {
      title: "Forca e Mendjes",
      img: "https://m.media-amazon.com/images/I/71KilybDOoL.jpg",
      quote: "Mendja e fortë ndryshon botën."
    },
    {
      title: "Kujtimet",
      img: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
      quote: "Kujtimet janë pasuria jonë më e madhe."
    },
    {
      title: "Rruga e qumeshtit",
      img: "rruga e qumeshtit.jpg",
      quote: "Nëpër yje e qumësht galaktik, ëndrrat marrin fluturim."
    },
    {
      title: "Dritat e Mendimit",
      img: "dritat e mendimit.jfif",
      quote: "Ndriço mendjen, ndriço jetën."
    },
    {
      title: "Horizontet e Hapura",
      img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
      quote: "Mos i vër kufij ëndrrave të tua."
    },
    {
      title: "Universi i Brendshëm",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
      quote: "Bota jashtë pasqyron botën brenda."
    }
  ]
};

// Fshi gjithçka nga grid kur klikon Home
function showHome() {
  document.getElementById('booksGrid').innerHTML = '';
  document.getElementById('quote').innerText = '';
}

// Shfaq kategori sipas zgjedhjes
function showCategory(category) {
  const booksGrid = document.getElementById('booksGrid');
  const quote = document.getElementById('quote');
  booksGrid.innerHTML = '';
  quote.innerText = '';

  booksData[category].forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `<img src="${book.img}" alt="${book.title}"><h3>${book.title}</h3>`;
    card.addEventListener('click', () => {
      quote.innerText = `"${book.quote}"`;
    });
    booksGrid.appendChild(card);
  });
}

showHome();
