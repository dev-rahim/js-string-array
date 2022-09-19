const products = [
    'MyWay IdeaPad, Legion, ThinkPad,MacBook ThinkBook, Yoga ExpertStation',
    'Elitebook, Envy, Omen, Pavilion, ZBook, Spectre, Victus, ProBook, OmniBook',
    'MyWay Alienware, MacBook G Series, Inspiron, Latitude, Precision, Vostro, XPS',
    'MacBook, MacBook Air, MacBook Pro ExpertStation',
    'MyWay,MacBook GamePower, OfficePower, ExpertStation, PowerStation, Mini-Server ExpertStation'
];
const searcing = 'ExpertStation';
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

// for (const product of products) {
//     if (product.toLocaleLowerCase().startsWith(searcing.toLocaleLowerCase())) {
//         output.push(product);
//     }
// }

for (const product of products) {
    if (product.toLocaleLowerCase().endsWith(searcing.toLocaleLowerCase())) {
        output.push(product);
    }
}
console.log(output);