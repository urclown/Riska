document.getElementById('openBtn').addEventListener('click', function() {
  var letter = document.getElementById('letter');
  var firstMessage = document.getElementById('firstMessage');
  var messageBtn = document.getElementById('messageBtn');

  // Jika surat belum terbuka, munculkan surat + pesan pertama + tombol kedua
  if (letter.classList.contains('hidden')) {
      letter.classList.remove('hidden');
      firstMessage.classList.remove('hidden');
      messageBtn.classList.remove('hidden');
  }
});

// Menambahkan event listener untuk tombol kedua
document.getElementById('messageBtn').addEventListener('click', function() {
  alert("Tetap semangat ya!❤️");
});
