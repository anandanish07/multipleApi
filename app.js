const fs = require('node:fs');
const zlib = require('node:zlib');
const gzip = zlib.createGzip()
const eventListener = require('node:events');
const event = new eventListener();
const PizzaShop = require('./pizza-shop');
const { sign } = require('node:crypto');

const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping) =>{
    console.log(`order received! Baking a ${size} pizza with ${topping}`);
    drinkMachine.serveDrink(size);
})
pizzaShop.order('large', 'mushroom');
pizzaShop.displayOrderNumber();
// event.on('order-pizza', (size,topping) => {
//     console.log(`order received! Baking a ${size} pizza with ${topping}`);  
// });
// event.on('order-pizza', (size) =>{
//     if (size === 'large') {
//         console.log('serving a complimentary drink')
//     }
// })
// event.emit('order-pizza','large', 'vegetables');
// const data = new Uint8Array(Buffer.from('Hello Node.js welcome'));

// fs.writeFile("greet.txt",data,{flag:"a"})
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error("Error reading file:", err.message);
//   });

//   async function fileRead(){
//     try {
//        const data = await fs.readFile('greet.txt', "utf-8")
//        console.log(data)
//     } catch (error) {
//         console.error(error);
        
//     }
//   }

//   fileRead()

// const readableStream = fs.createReadStream('greet.txt',{
//     encoding: "utf-8",
//     highWaterMark: 2,
// });

// const writeableStream = fs.createWriteStream('newgreet.txt');

// readableStream.pipe(writeableStream)

// readableStream.pipe(gzip).pipe(fs.WriteStream('greet.txt.gz'))

// readableStream.on('data', (chunk) =>{
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

