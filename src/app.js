export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }],
      games: [{ name: '冒险岛', id: 1 }, { name: '冒险岛2', id: 2 }],
    },
  },
};
