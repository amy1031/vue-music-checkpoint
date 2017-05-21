import $ from 'jquery'

export default {
  getMusicByArtist(artist) {
    var url = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist;
    var url3 = '&media=music';
    var apiUrl = url + encodeURIComponent(url2 + url3);
    return $.get(apiUrl)
  }
}