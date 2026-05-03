export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Annisha Noviera Heryani',
            child: 'Putri ke 1',
            father: 'Noormin Heri Soesanto',
            mother: 'Sumarsini',
            image: './src/assets/images/cewe.jpg'
        },
        P: {
            id: 2,
            name: 'Muhammad Al-falaq Wibisono',
            child: 'Putra ke 1',
            father: 'Yusof Ismail',
            mother: 'Erna Agustatik',
            image: './src/assets/images/cowo.jpg'
        },

        couple: './src/assets/images/couple.jpg'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Juni',
            date: '6',
            day: "Sabtu",
            hours: {
                start: '06.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Juni',
            date: '6',
            day: 'Sabtu',
            hours: {
                start: '11.00',
                finish: '16.00'
            }
        },
        address: 'Sekopek Kulon, Sarirejo Perumahan Graha Raya 2 Blok K No. 802 (Rumah No. 802), KAB. KENDAL, KALIWUNGU, JAWA TENGAH, ID, 51372'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/6UAwquxT1MkD2nof9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Annisha Noviera Heryani',
            icon: './src/assets/images/bca.png',
            rekening: '6975304772'
        },
        {
            id: 2,
            name: 'Muhammad Al-falaq Wibisono',
            icon: './src/assets/images/bca.png',
            rekening: '0300717306'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyQ4fK-fLPhYR2X2y0XQcsgoKOErMLVrmfHhJsoP3bpf-3cDsQjGRHYRWABab8Dw-SyNA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
