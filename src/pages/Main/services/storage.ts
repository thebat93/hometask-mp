const LOCALSTORAGE_KEY = 'meeting-package-hotels-data';

const storage = {
  getData: () => {
    const persistedRawData = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if (persistedRawData !== null) {
      try {
        return JSON.parse(persistedRawData);

      } catch (error) {
        console.error(error);

        return null;
      }
    }

    return null;
  },
  setData: (data: any) => {
    const hotelsJson = JSON.stringify(data);

    window.localStorage.setItem(LOCALSTORAGE_KEY, hotelsJson);
  }
};

export { storage };
