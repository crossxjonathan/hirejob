/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'#FFFFFF'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Opensans: ['Open Sans', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '6/7': '95.555555%',
        'full': '100%',
        'screen': '100vw',
      },
      left: {
        '4/3':'85%'
      }
    }
  }
}



// HTML (Hypertext Markup Language):

// HTML adalah bahasa markup yang digunakan untuk membuat struktur dan konten dari halaman web.
// Ini digunakan untuk menentukan elemen-elemen seperti teks, gambar, video, tautan, dan banyak lagi.
// HTML mengatur elemen-elemen ini dalam struktur hierarkis menggunakan tag yang ditafsirkan oleh browser untuk menampilkan halaman web.
// CSS (Cascading Style Sheets):

// CSS adalah bahasa gaya yang digunakan untuk mengatur tampilan dan tata letak elemen-elemen HTML di halaman web.
// Ini memungkinkan Anda untuk mengontrol warna, font, ukuran, posisi, dan banyak lagi dari elemen-elemen tersebut.
// CSS bekerja dengan memilih elemen HTML menggunakan selektor dan menerapkan aturan gaya untuk mengubah tampilan mereka.


// Tailwind CSS adalah sebuah kerangka kerja CSS yang dirancang untuk mempercepat pengembangan web dengan memberikan sejumlah besar kelas yang dapat digunakan langsung di HTML Anda. Ini berbeda dari kerangka kerja tradisional seperti Bootstrap di mana Anda biasanya harus menyesuaikan gaya melalui file CSS terpisah atau variabel SASS/LESS.



