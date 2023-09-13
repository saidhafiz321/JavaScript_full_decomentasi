/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

const util = require('util');

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === 'id') {
        resolve([
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
      } else {
        reject(new Error('Country not found'));
      }
    }, 1000);
  });
}

// Ekspor dengan nama yang sama
module.exports = { getProvinces };
