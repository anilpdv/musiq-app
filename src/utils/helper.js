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
        title
    };
}

export function transformPlayable(items) {
    let ids = [];
    let songs = items.map(item => {
        const {
            author,
            title
        } = removeb(item.snippet.title);
        ids.push(item.id.videoId);
        return {
            name: title.substring(0, 20),
            singer: author.substring(0, 10),
            cover: item.snippet.thumbnails.default.url,
            musicSrc: `https://warm-springs-86808.herokuapp.com/api/download/${
        item.id.videoId
      }/song/${title}`
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
            name: title.substring(0, 20),
            singer: author.substring(0, 10),
            cover: `http://img.youtube.com/vi/${item.id}/sddefault.jpg`,
            musicSrc: `https://warm-springs-86808.herokuapp.com/api/download/${
        item.id
      }/song/${title}`
        };
    });
    songs = songs.filter(item => item.name !== '');
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