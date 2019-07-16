import Entities from 'html-entities';
const entities = new Entities.XmlEntities();

export function removeb(query) {
  query = entities.decode(query);
  query = query.split('-');

  let author = query[0].split('|')[0];
  let title = query[1] ?
    query[1]
    .replace(/\(.*?\)/g, '')
    .replace(/\[.*?\]/g, '')
    .split('|')[0] :
    '';
  return {
    author,
    title,
  };
}
//item.snippet.thumbnails.default.url
export function transformPlayable(items) {
  let ids = [];
  let songs = items.map(item => {
    const {
      author,
      title
    } = removeb(item.snippet.title);
    ids.push(item.id.videoId);
    return {
      id: item.id.videoId,
      name: title.substring(0, 20),
      singer: author.substring(0, 10),
      img: `http://img.youtube.com/vi/${item.id.videoId}/sddefault.jpg`,
      src: `https://musiq-app-0396.appspot.com/api/listen/${item.id.videoId}`,
    };
  });
  songs = songs.filter(item => item.name !== '');
  return songs;
}

export function transformPlaylistPlayable(items) {
  let ids = [];
  let songs = items.map(item => {
    const {
      author,
      title
    } = removeb(item.name);
    ids.push(item.id.videoId);
    return {
      id: item.id,
      name: title.substring(0, 20),
      singer: author.substring(0, 10),
      img: `http://img.youtube.com/vi/${item.id}/sddefault.jpg`,
      src: `https://musiq-app-0396.appspot.com/api/listen/${item.id}`,
    };
  });
  songs = songs.filter(item => item.name !== '');
  return songs;
}

export function transformRecectPlayable(items) {
  let songs = items.map(item => {

    return {
      id: item.songId,
      name: item.name,
      singer: item.author,
      img: `http://img.youtube.com/vi/${item.songId}/sddefault.jpg`,
      src: `https://musiq-app-0396.appspot.com/api/listen/${item.songId}`,
    };
  });
  return songs;

}

export function lrtrim(str) {
  if (str == null) return str;
  str = str.replace(/^\s+/g, '');
  return str
    .replace(/\s+$/g, '')
    .split(' ')
    .join('-');
}