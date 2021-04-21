// Exercício 2 e 3

const users = {
4: { name: 'Mark' },
5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
    return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Check if user was found or not', () => {
  it('if user was found', async () => {
    expect.assertions(1);
    const findUser = await getUserName(4);
    expect(findUser).toBe('Mark');
  });

  it('if user was not found', async () => {
    try {
      await getUserName(6);
    } catch(error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  });
});