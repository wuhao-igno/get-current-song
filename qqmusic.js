import sqlite3 from "sqlite3";

const DB_PATH = `${process.env.HOME}/Library/Containers/com.tencent.QQMusicMac/Data/Library/Application Support/QQMusicMac/qqmusic.sqlite`;

const db = new sqlite3.Database(
  DB_PATH,
  (err) => {
    if (err) {
      throw err;
    }
  }
);

export const getListeningSong = () => new Promise((resolve, reject) => {
  db.all("select name, singer from SONGS;", (err, rows) => {
    if (err) {
      reject(err);
    }
    const { name, singer } = rows[rows.length - 1];
    resolve(`${name} - ${singer}`);
  });
});
