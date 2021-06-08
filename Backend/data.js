import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: 'sidd',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      name: "closer",
      category: "coat",
      image: "/images/a(1).jpeg",
      price: 150,
      countInstock: 10,
      brand: "loffer",
      ratting: 4.3,
      numReviews: 10,
      description: "happy to shop",
    },
    {
      name: "fitinto",
      category: "shirt",
      image: "/images/a(1).jpg",
      price: 130,
      countInstock: 5,
      brand: "loffer",
      ratting: 4.1,
      numReviews: 10,
      description: "happy to shop",
    },
    {
      name: "blaser",
      category: "coat",
      image: "/images/a(2).jpg",
      price: 120,
      countInstock: 0,
      brand: "nike",
      ratting: 3.3,
      numReviews: 10,
      description: "happy to shop",
    },
    {
      name: "buff browser",
      category: "blaser",
      image: "/images/a(3).jpg",
      price: 110,
      countInstock: 7,
      brand: "Browser",
      ratting: 2.3,
      numReviews: 3,
      description: "carry to shop",
    },
    {
      name: "inside shirt",
      category: "shirt",
      image: "/images/a(1).jpeg",
      price: 160,
      countInstock: 6,
      brand: "loffer",
      ratting: 4.3,
      numReviews: 10,
      description: "happy to shop",
    },
    {
      name: "loser",
      category: "blaser",
      image: "/images/a(4).jpg",
      price: 140,
      countInstock: 1,
      brand: "loffer",
      ratting: 4.5,
      numReviews: 5,
      description: "bring back to shop",
    },
  ],
};

export default data;
