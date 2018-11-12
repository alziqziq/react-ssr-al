export const getMahasiswa = () => {
  return fetch('http://demo0888028.mockable.io/mahasiswa', {
    method: 'GET'
  });
};