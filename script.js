// Videos de YouTube dentro de la página: se cargan al tocar (rápido y liviano)
document.querySelectorAll('.video').forEach(function (box) {
  var id = box.dataset.yt, title = box.dataset.title || 'Video', poster = box.dataset.poster;
  function load() {
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0" title="' + title + '" loading="lazy" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>' +
      '<a class="fallback" href="https://youtu.be/' + id + '" target="_blank" rel="noopener">Abrir en YouTube</a>';
  }
  var b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('aria-label', 'Reproducir: ' + title);
  b.style.backgroundImage = 'url(' + (poster || 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg') + ')';
  b.innerHTML = '<span aria-hidden="true">▶</span>';
  b.addEventListener('click', load);
  box.appendChild(b);
});
