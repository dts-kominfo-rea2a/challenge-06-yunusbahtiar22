// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
const { parse } = require('path');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// helper function
const asyncMap = (list, fn, onFinish) => {
  const result = [];
  let nRemaining = list.length;

  list.forEach((item, index) => {
    fn(item, (err, data) => {
      if (err) return onFinish(err, null);

      result[index] = JSON.parse(data);

      nRemaining--;

      if (!nRemaining) return onFinish(null, result);
    });
  });
};

const bacaData = (fnCallback) => {

  const files = [file1, file2, file3];
  const formatted = [];

  asyncMap(files, fs.readFile, (err, data) => {
    if (err) return fnCallback(err, null);

    // seharusnya bisa dipecahkan dengan reduce
    formatted.push(data[0].message.split(' ')[1]);
    formatted.push(data[1][0].message.split(' ')[1]);
    formatted.push(data[2][0].data.message.split(' ')[1]);

    return fnCallback(null, formatted);
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
