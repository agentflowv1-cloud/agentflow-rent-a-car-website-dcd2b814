const mockAxiosPost = async (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { message: 'Booking successful' } });
    }, 1000);
  });
};

export { mockAxiosPost };