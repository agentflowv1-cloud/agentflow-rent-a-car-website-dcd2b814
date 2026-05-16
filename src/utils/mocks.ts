const mockAxiosPost = async (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { message: 'Booking successful' } });
    }, 1000);
  });
};

const mockAxiosGet = async (url: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Car Model Name',
          image: 'https://via.placeholder.com/300',
          features: [
            { id: 1, name: 'Feature 1' },
            { id: 2, name: 'Feature 2' },
            { id: 3, name: 'Feature 3' }
          ]
        }
      });
    }, 1000);
  });
};

export { mockAxiosPost, mockAxiosGet };