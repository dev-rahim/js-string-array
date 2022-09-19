const products = [
    'MyWay IdeaPad, Legion, ThinkPad,MacBook ThinkBook, Yoga',
    'Elitebook, Envy, Omen, Pavilion, ZBook, Spectre, Victus, ProBook, OmniBook',
    'MyWay Alienware, MacBook G Series, Inspiron, Latitude, Precision, Vostro, XPS',
    'MacBook, MacBook Air, MacBook Pro',
    'MyWay,MacBook GamePower, OfficePower, ExpertStation, PowerStation, Mini-Server'
];
const searcing = 'MyWay';
const output = [];
// for (const product of products) {
//     if (product.toLocaleLowerCase().indexOf(searcing.toLocaleLowerCase()) != -1) {
//         output.push(product);
//     }
// }

// for (const product of products) {
//     if (product.toLocaleLowerCase().includes(searcing.toLocaleLowerCase())) {
//         output.push(product);
//     }
// }

for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searcing.toLocaleLowerCase())) {
        output.push(product);
    }
}
console.log(output);