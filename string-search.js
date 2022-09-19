const products = [
    'IdeaPad, Legion, ThinkPad,MacBook ThinkBook, Yoga',
    'Elitebook, Envy, Omen, Pavilion, ZBook, Spectre, Victus, ProBook, OmniBook',
    'Alienware, MacBook G Series, Inspiron, Latitude, Precision, Vostro, XPS',
    'MacBook, MacBook Air, MacBook Pro',
    'MyWay,MacBook GamePower, OfficePower, ExpertStation, PowerStation, Mini-Server'
];
const searcing = 'MacBook';
const output = [];
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searcing.toLocaleLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);