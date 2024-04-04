
//sample Food
export const sample_foods: any[] = [
  {
    id:'1',
    name: 'Pizza',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpeg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Burger',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpeg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Pasta',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpeg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Sushi',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpeg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Tacos',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpeg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Sushi Roll',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpeg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]

//sample Tags
export const sample_tags:any[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]

//Sample Users for login
export const sample_users: any[] = [
  {
    name: 'Patel Akshay',
    email: 'akkipatel@gmail.com',
    password: '1234',
    address: 'Txass',
    isAdmin: true,
  },
  {
    name: 'Patel Priyanshu',
    email: 'priyanshu@gmail.com',
    password: '1234',
    address: 'Shicago',
    isAdmin: false,
  },
];