const db = {
  productsAll: [
    {
      category: 'starwars',
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwars--big.png',
      price: '60.00',
      title: 'Produto XYZ',
      id: 1,
    },
    {
      category: 'starwars',
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsFunko.png',
      price: '60.00',
      title: 'Produto XYZ',
      id: 2,
    },
    {
      category: 'starwars',
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsJedi.png',
      price: '60.00',
      title: 'Produto XYZ',
      id: 3,
    },
    {
      id: 4,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsTrooper.png',
      category: 'starwars',
    },
    {
      id: 5,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsbbYoda.png',
      category: 'starwars',
    },
    {
      id: 6,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsfds.png',
      category: 'starwars',
    },
    {
      id: 7,
      title: 'Controle XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/xbox-cntrl.png',
      category: 'consoles',
    },
    {
      id: 8,
      title: 'Controle e Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/console-and-cntrl.png',
      category: 'consoles',
    },
    {
      id: 9,
      title: 'Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/nintendo-old.png',
      category: 'consoles',
    },
    {
      id: 10,
      title: 'Controle XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/nintendo-new.png',
      category: 'consoles',
    },
    {
      id: 11,
      title: 'Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/xbox-console.png',
      category: 'consoles',
    },
    {
      id: 12,
      title: 'Game Boy Color',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/gameboy.png',
      category: 'consoles',
    },
    {
      id: 13,
      title: 'Camisa Atari',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/camisa-atari.png',
      category: 'diversos',
    },
    {
      id: 14,
      title: 'Camisa SNES',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/camisa-SNES.png',
      category: 'diversos',
    },
    {
      id: 15,
      title: 'Controle e Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/sonic.png',
      category: 'diversos',
    },
    {
      id: 16,
      title: 'Controle Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/clock.png',
      category: 'diversos',
    },
    {
      id: 17,
      title: 'Controle e console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/rift.png',
      category: 'diversos',
    },
    {
      id: 18,
      title: 'Controle e Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/pikachu.png',
      category: 'diversos',
    },
  ],
  productsHome: [
    {
      id: 1,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwars--big.png',
      category: 'star wars',
    },
    {
      id: 2,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsFunko.png',
      category: 'star wars',
    },
    {
      id: 3,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsJedi.png',
      category: 'star wars',
    },
    {
      id: 4,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsTrooper.png',
      category: 'star wars',
    },
    {
      id: 5,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsbbYoda.png',
      category: 'star wars',
    },
    {
      id: 6,
      title: 'Produto XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/starwarsfds.png',
      category: 'star wars',
    },
    {
      id: 7,
      title: 'Controle XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/xbox-cntrl.png',
      category: 'consoles',
    },
    {
      id: 8,
      title: 'Controle e Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/console-and-cntrl.png',
      category: 'consoles',
    },
    {
      id: 9,
      title: 'Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/nintendo-old.png',
      category: 'consoles',
    },
    {
      id: 10,
      title: 'Controle XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/nintendo-new.png',
      category: 'consoles',
    },
    {
      id: 11,
      title: 'Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/xbox-console.png',
      category: 'consoles',
    },
    {
      id: 12,
      title: 'Game Boy Color',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/gameboy.png',
      category: 'consoles',
    },
    {
      id: 13,
      title: 'Camisa Atari',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/camisa-atari.png',
      category: 'diversos',
    },
    {
      id: 14,
      title: 'Camisa SNES',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/camisa-SNES.png',
      category: 'diversos',
    },
    {
      id: 15,
      title: 'Controle e Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/sonic.png',
      category: 'diversos',
    },
    {
      id: 16,
      title: 'Controle Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/clock.png',
      category: 'diversos',
    },
    {
      id: 17,
      title: 'Controle e console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/rift.png',
      category: 'diversos',
    },
    {
      id: 18,
      title: 'Controle e Console XYZ',
      price: 60,
      description: 'Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
      imgUrl: './imgs/pikachu.png',
      category: 'diversos',
    },
  ],
};

export default db;
