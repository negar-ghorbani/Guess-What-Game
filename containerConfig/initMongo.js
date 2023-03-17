/* global db */
db.createUser(
  {
    user: 'saltadmin',
    pwd: 'episalt',
    roles: [
      {
        role: 'readWrite',
        db: 'salthack',
      },
    ],
  },
);
db.createCollection('category');

db.category.insertMany([
  {
    name: 'animals',
    value: ['Ant', 'Tiger', 'Bird', 'Butterfly', 'Cat', 'Chicken', 'Dog',
      'Fish', 'Frog', 'Gorilla', 'Horse',
      'Jellyfish', 'Penguin', 'Snake', 'Swan', 'Zebra']
  },
  {
    name: 'fruit',
    value: ['Papaya', 'Pomegranate', 'Pear', 'Lemon', 'Grape', 'Blueberry']
  },
  {
    name: 'food',
    value: ['Cheese', 'Bread', 'Kebab', 'Pizza',
    ]
  }
])