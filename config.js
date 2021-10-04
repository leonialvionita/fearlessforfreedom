var config = {
    style: 'mapbox://styles/leonialvionita/ckpifhyqe1qyd17rtcob4716c',
    accessToken: 'pk.eyJ1IjoibGVvbmlhbHZpb25pdGEiLCJhIjoiY2twOG5uNW12MGE3bzJ2bXhxYjIzOWRvcCJ9.tgMJwbM9kn2DSprJ-_zYHg',
    showMarkers: true,
    markerColor: '#000000',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Jejak Pembunuhan Terhadap Jurnalis di Indonesia',
    subtitle: 'Menjelajahi sebaran lokasi pembunuhan 12 jurnalis Indonesia akibat pemberitaan',
    byline: '#Fearless_for_Freedom',
    footer: 'Sebenarnya, bagaimana kondisi kebebasan pers di Indonesia?',
    chapters: [
        {
            id: 'pembunuhan1',
            alignment: 'left',
            hidden: false,
            title: 'PEMBUNUHAN MUHAMMAD JAMALUDDIN',
            image: 'images/1.png',
            description: 'Muhammad Jamaluddin adalah seorang juru kamera TVRI. Ia bekerja di Aceh dan hilang sejak 20 Mei 2003. Jamaluddin ditemukan satu bulan kemudian di sebuah sungai dalam kondisi terikat dan sudah tak bernyawa. Di jasadnya ditemukan banyak luka. Pembunuhan Jamaluddin diduga terkait dengan liputannya mengenai konflik Aceh yang saat itu sedang memuncak dengan diberlakukannya Daerah Operasi Militer (DOM) di Aceh oleh presiden Megawati.',
            location: {
              center: [95.36055, 5.57245],
              zoom: 4.01,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'pembunuhan2',
            alignment: 'right',
            hidden: false,
            title: 'PEMBUNUHAN JURNALIS RCTI ERSA SIREGAR',
            image: 'images/2.png',
            description: 'Pada 1 Juli 2003, Ersa dan juru kamera Ferry Santoro dilaporkan hilang di Kuala Langsa, Aceh Timur. Pada 5 Juli, Kijang yang dipakai Ersa dkk ditemukan di Langsa, Aceh Timur, yang dikenal sebagai basis GAM. Pada 29 Desember, Ersa ditemukan tewas dalam baku tembak di Kuala Maniham, Simpang Ulim, Aceh Timur. Kepala Staf TNI AD mengakui bahwa peluru yang membunuh Ersa Siregar merupakan peluru TNI.',
            location: {
              center: [97.54032, 5.09177],
              zoom: 9.01,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan3',
            alignment: 'left',
            hidden: false,
            title: 'PEMBUNUHAN DUA JURNALIS PINDO MERDEKA',
            image: 'images/source.png',
            description: 'Pada 30 Oktober 2019, Maraden Sianipar & Martua Siregar ditemukan tewas di areal perkebunan kelapa sawit PT SAB/KSU Amelia, Desa Wonosari, Kecamatan Panai Hilir, Kabupaten Labuhanbatu, Sumatera Utara. Pembunuhan diduga terkait sengketa lahan perkebunan sawit yang telah disita untuk dijadikan kawasan hutan. Inspektur Jenderal Agus Andrianto, Kapolda Sumut, mengatakan bahwa otak pembunuhan adalah pemilik perkebunan kelapa sawit KSU Amelia, HR, yang memerintahkan 8 orang untuk membunuh kedua wartawan ini.',
            location: {
              center: [99.94347, 2.03595],
              zoom: 7.10,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan4',
            alignment: 'right',
            hidden: false,
            title: 'PEMBUNUHAN NAIMULLAH',
            image: 'images/3.png',
            description: 'Naimullah adalah jurnalis Harian Sinar Pagi yang berbasis di Kalimantan Barat. Ia dibunuh di mobilnya yang terparkir di Pantai Penimbungan pada 25 Juli 1997. Sebelumnya, Naimullah diketahui banyak menulis berita tentang hubungan antara polisi dengan jaringan pembalakan liar di Kalimantan. Dari apa yang pernah ditulis Naimullah dan kasus yang menimpanya, muncul dugaan bahwa polisi menjadi dalang dari pembunuhan tersebut. Tidak ada pengusutan yang serius oleh polisi mengenai kasus ini.',
            location: {
              center: [109.31639, 0.19755],
              zoom: 5.12,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan5',
            alignment: 'left',
            hidden: false,
            title: 'PEMBUNUHAN UDIN',
            image: 'images/4.png',
            description: 'Fuad Muhammad Syafruddin atau biasa dipanggil Udin adalah jurnalis Harian Bernas, Yogyakarta. Ia meninggal setelah dianiaya pada 16 Agustus 1996. Sebelum dibunuh, Udin kerap menulis tentang isu korupsi di Bantul. Kasus ini pernah sampai ke pengadilan dan sempat ditetapkan tersangkanya, namun kemudian diketahui bahwa ada rekayasa dalam penuntasan kasus tersebut. Sampai saat ini, pembunuh Udin yang sebenarnya belum terungkap.',
            location: {
              center: [110.33441, -7.87918],
              zoom: 10.68,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan6',
            alignment: 'right',
            hidden: false,
            title: 'PEMBUNUHAN HERLIYANTO',
            image: 'images/5.png',
            description: 'Herliyanto adalah jurnalis Tabloid Delta Pos Sidoarjo. Ia ditemukan dalam kondisi meninggal pada 29 April 2006 di hutan jati di Probolinggo. Ia diduga dibunuh berkaitan dengan berita-berita yang ia tulis, yaitu kasus korupsi penyelewengan beras yang memenjarakan kepala desa. Polisi sempat menangkap tiga orang yang dijadikan tersangka sebelum pengadilan akhirnya membebaskannya. Tidak ada tersangka baru dalam kasus tersebut.',
            location: {
              center: [113.24754, -7.78566],
              zoom: 7.96,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan7',
            alignment: 'left',
            hidden: false,
            title: 'PEMBUNUHAN PRABANGSA',
            image: './path/to/image/source.png',
            description: 'Jurnalis Radar Bali ini dibunuh karena memberitakan penyimpangan proyek pembangunan di Kabupaten Bangli pada 16 Februari 2009. Dalang pembunuhan adalah Nyoman Susrama, adik Bupati Bangli Nengah Arnawa. Susrama juga merupakan pengawas proyek Dinas Pendidikan Bangli. Ia mulanya mendapatkan hukuman seumur hidup, tetapi mendapatkan perubahan menjadi 20 tahun penjara setelah mendapatkan remisi dari presiden Jokowi. Kebijakan ini lalu menuai protes. Aliansi Jurnalis Independen menganggap kasus ini adalah satu-satunya kasus pembunuhan wartawan di Indonesia yang tuntas di pengadilan dan pelaku mendapatkan hukuman berat, tetapi malah mendapat keringanan. Jokowi akhirnya menarik kembali remisi tersebut.',
            location: {
              center: [115.50675, -8.52603],
              zoom: 12.25,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan8',
            alignment: 'right',
            hidden: false,
            title: 'PEMBUNUHAN JURNALIS ASIA PRESS',
            image: 'images/6.png',
            description: 'Agus Mulyawan adalah jurnalis Asia Press yang meliput di Timor Timur beberapa waktu setelah referendum tahun 1999 yang menandai lepasnya Timor Timur dari Indonesia. Tanggal 25 September 1999, Agus meninggal dalam penembakan di pelabuhan Qom, Los Palos, yang juga menewaskan 7 orang lainnya. Ia diduga dibunuh oleh milisi yang dibina oleh militer Indonesia.',
            location: {
              center: [125.78062, -8.61773],
              zoom: 6.04,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan9',
            alignment: 'left',
            hidden: false,
            title: 'PEMBUNUHAN ALFRED MIRULEWAN',
            image: 'images/7.png',
            description: 'Alfred adalah jurnalis Tabloid Pelangi di Maluku. Pada 18 Desember 2010, ia ditemukan tewas dan diduga dibunuh karena liputannya mengenai kelangkaan bensin di Pulau Kisar. Dalam penuntasan kasus ini, polisi sudah menetapkan empat orang sebagai tersangka dan divonis bersalah oleh pengadilan. Akan tetapi, seperti dicatat oleh Aliansi Jurnalis Independen (AJI), terdapat pengaduan ke Komisi Nasional Hak Asasi Manusia yang menyebutkan bahwa penetapan tersangka direkayasa dan pelaku sebenarnya belum tertangkap.',
            location: {
              center: [127.18462, -8.07581],
              zoom: 11.98,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan10',
            alignment: 'right',
            hidden: false,
            title: 'PEMBUNUHAN JURNALIS SUN TV',
            image: './path/to/image/source.png',
            description: 'Jurnalis SUN TV, Ridwan Salamun, tewas dikeroyok massa ketika meliput kerusuhan antarwarga di Kota Tual, Maluku Tenggara, pada 21 Agustus 2010.',
            location: {
              center: [132.77724, -5.65429],
              zoom: 7.17,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pembunuhan11',
            alignment: 'left',
            hidden: false,
            title: 'PEMBUNUHAN JURNALIS DI MERAUKE',
            image: 'images/8.png',
            description: 'Ardiansyah Matra’is Wibisono merupakan jurnalis stasiun televisi lokal di Merauke (Merauke TV dan Tabloid Jubi). Ia ditemukan meninggal pada 29 Juli 2010. Sebelumnya, Matra’is meliput tentang persaingan politik para pejabat daerah dalam memperebutkan proyek agrobisnis. Liputan ini yang diduga menjadi penyebab Matra’is dibunuh. Mabes Polri pernah mengeluarkan rilis yang menyebut bahwa Matra’is masih hidup saat diceburkan ke sungai. Akan tetapi tidak ada tindak lanjut dan penyelidikan untuk mencari pelaku pembunuhan.',
            location: {
              center: [140.39311, -8.17280],
              zoom: 6.41,
              pitch: 44.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
