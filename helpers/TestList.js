let List = {

  data: {
    distinctArtist: true,
    songList: [
      {
        id: 1,
        artist: 'Aco Pejović',
        songTitle: 'Prevara',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/prevara.mp3',
        maleArtist: true
      },
      {
        id: 2,
        artist: 'Maya Berović',
        songTitle: 'Broj',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/broj.mp3',
        maleArtist: false
      },
      {
        id: 3,
        artist: 'Milica Pavlović',
        songTitle: 'Demantujem',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/demantujem.mp3',
        maleArtist: false
      },
      {
        id: 4,
        artist: 'Katarina Grujić',
        songTitle: 'Emotivno dno',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/emotivnodno.mp3',
        maleArtist: false
      },
      {
        id: 5,
        artist: 'Aca Lukas',
        songTitle: '1000 puta',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/hiljaduputa.mp3',
        maleArtist: true
      },
      {
        id: 6,
        artist: 'Aleksandra Mladenović',
        songTitle: 'Ljubav ili ludilo',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/ljubavililudilo.mp3',
        maleArtist: false
      },
      {
        id: 7,
        artist: 'Stefani Pavlović ft. Milena Ćeranić',
        songTitle: 'Gad',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/gad.mp3',
        maleArtist: false
      },
      {
        id: 8,
        artist: 'Aca Lukas',
        songTitle: 'Ako ti još fali krevet moj',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/akotijosfalikrevetmoj.mp3',
        maleArtist: true
      },
      {
        id: 9,
        artist: 'Sinan Sakić',
        songTitle: 'Da se opet rodim',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/daseopetrodim.mp3',
        maleArtist: true
      },
      {
        id: 10,
        artist: 'Vesna Pisarović',
        songTitle: 'Dolje na koljena',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/doljenakoljena.mp3',
        maleArtist: false
      },
      {
        id: 11,
        artist: 'Ivan Gavrilović',
        songTitle: '200 na sat',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/dvestanasat.mp3',
        maleArtist: true
      },
      {
        id: 12,
        artist: 'Aco Pejović',
        songTitle: 'Fatalna doza',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/fatalnadoza.mp3',
        maleArtist: true
      },
      {
        id: 13,
        artist: 'Trik FX',
        songTitle: 'Hitna pomoć',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/hitnapomoc.mp3',
        maleArtist: false
      },
      {
        id: 14,
        artist: 'Marko Bulat',
        songTitle: 'Kad sam dečak bio',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/kadsamdecakbio.mp3',
        maleArtist: true
      },
      {
        id: 15,
        artist: 'Sennidah',
        songTitle: 'Sladjana',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/sladjana.mp3',
        maleArtist: false
      },
      {
        id: 16,
        artist: 'Jala Brat X Buba Corelli',
        songTitle: 'Klinka',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/klinka.mp3',
        maleArtist: true
      },
      {
        id: 17,
        artist: 'Zoran Vanev',
        songTitle: 'Lila',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/lila.mp3',
        maleArtist: true
      },
      {
        id: 18,
        artist: 'Bebi Dol',
        songTitle: 'Mustafa',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/mustafa.mp3',
        maleArtist: false
      },
      {
        id: 19,
        artist: 'Bojan Tomović',
        songTitle: 'Na distanci',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/nadistanci.mp3',
        maleArtist: true
      },
      {
        id: 20,
        artist: 'Mimi Mercedez',
        songTitle: 'Patike za trčanje',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/patikazatrcanje.mp3',
        maleArtist: false
      },
      {
        id: 21,
        artist: 'Denis i Denis',
        songTitle: 'Soba 23',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/soba23.mp3',
        maleArtist: false
      },
      {
        id: 22,
        artist: 'Gazda Paja',
        songTitle: '1000 evra',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/somaevra.mp3',
        maleArtist: true
      },
      {
        id: 23,
        artist: 'Nipplepeople',
        songTitle: 'Sutra',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/sutra.mp3',
        maleArtist: false
      },
      {
        id: 24,
        artist: 'Dino Dvornik',
        songTitle: 'Ti si mi u mislima',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/tisimiumislima.mp3',
        maleArtist: true
      },
      {
        id: 25,
        artist: 'Tea Tairović',
        songTitle: 'Polako',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/polako.mp3',
        maleArtist: false
      },
      {
        id: 26,
        artist: 'Tea Tairović',
        songTitle: 'Meni odgovara',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/meniodgovara.mp3',
        maleArtist: false
      },
      {
        id: 27,
        artist: 'Rina',
        songTitle: 'Samo bahato',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/samobahato.mp3',
        maleArtist: false
      },
      {
        id: 28,
        artist: 'Mia Borisavljević',
        songTitle: 'Ništa lično',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/nistalicno.mp3',
        maleArtist: false
      },
      {
        id: 29,
        artist: 'Maya Berović',
        songTitle: 'Harem',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/harem.mp3',
        maleArtist: false
      },
      {
        id: 30,
        artist: 'Ivana Pavković',
        songTitle: 'Beli veo',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/beliveo.mp3',
        maleArtist: false
      },
      {
        id: 31,
        artist: 'Colonia',
        songTitle: 'Tako ti je mali moj',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/takotijemalimoj.mp3',
        maleArtist: false
      },
      {
        id: 32,
        artist: 'Aleksandra Prijović',
        songTitle: 'Separe',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/separe.mp3',
        maleArtist: false
      },
      {
        id: 33,
        artist: 'Željko Vasić',
        songTitle: 'Svrati na piće',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/svratinapice.mp3',
        maleArtist: true
      },
      {
        id: 34,
        artist: 'Željko Samardžić',
        songTitle: 'Surovo',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/surovo.mp3',
        maleArtist: true
      },
      {
        id: 35,
        artist: 'Željko Samardžić',
        songTitle: 'Ohladi',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/ohladi.mp3',
        maleArtist: true
      },
      {
        id: 36,
        artist: 'Željko Joksimović',
        songTitle: 'Varnice',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/varnice.mp3',
        maleArtist: true
      },
      {
        id: 37,
        artist: 'MC Stojan',
        songTitle: 'Navučen na tebe',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/navucennatebe.mp3',
        maleArtist: true
      },
      {
        id: 38,
        artist: 'Knez',
        songTitle: 'Mia bella signorina',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/miabellasignorina.mp3',
        maleArtist: true
      },
      {
        id: 39,
        artist: 'Dženan Lončarević',
        songTitle: 'Piješ sine',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/pijessine.mp3',
        maleArtist: true
      },
      {
        id: 40,
        artist: 'Amar Gile',
        songTitle: 'Pijano',
        mp3: 'https://raw.githubusercontent.com/BlagojeV93/Pjesme/master/pijano.mp3',
        maleArtist: true
      }
    ]
  }
};


module.exports = List;

