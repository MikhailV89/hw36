const buttonLink = document.getElementById('buttonLink');
const inputUrl = document.getElementById('inputUrl');

buttonLink.addEventListener('click', () => {
    const url = inputUrl.value.trim();
    const checkUrl = url.indexOf('http://') === 0 || url.indexOf('https://') === 0 ? url : `http://${url}`;
    window.location.href = checkUrl;
});