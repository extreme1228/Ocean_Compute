export const authService = {
    async login(username, password) {
      // 模拟登录
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'admin') {
            resolve();
          } else {
            reject();
          }
        }, 1000);
      });
    }
  };
  