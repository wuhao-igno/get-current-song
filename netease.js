const plist = require("simple-plist");
const HISTORY_PATH = `${process.env.HOME}/Library/Containers/com.netease.163music/Data/Documents/storage/file_storage/webdata/file/history`;

export const getListeningSong = () => new Promise((resolve, reject) => {
  plist.readFile(HISTORY_PATH, (err, data) => {
    if (err) {
      reject(err);
    }
    const songs = JSON.parse(data.$objects[1]);
    // 播放列表队列第一条就是当前播放的曲目
    const currentSong = songs[0].track;
    // 返回格式：{歌曲名} - {歌手名}
    resolve(
      `${currentSong.name} - ${currentSong.artists
        .map((artist) => artist.name)
        .join(", ")}`
    );
  });
});
