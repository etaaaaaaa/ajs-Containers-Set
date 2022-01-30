import Team from './index';

test('test', () => {
  const team = new Team();
  team.add({
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
  expect(team.members.size).toEqual(1);
});


test('test ', () => {
  const team = new Team();
  team.add({
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
  expect(() => team.add({
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  })).toThrow(Error);
});

test('test', () => {
  const team = new Team();
  team.addAll({
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'igor', type: 'Zombie', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
  expect(team.members.size).toEqual(2);
});

test('test', () => {
  const team = new Team();
  team.addAll({
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'igor', type: 'Zombie', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
  expect(team.toArray()).toEqual([{
    name: 'ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'igor', type: 'Zombie', health: 100, level: 1, attack: 25, defence: 25,
  }]);
});