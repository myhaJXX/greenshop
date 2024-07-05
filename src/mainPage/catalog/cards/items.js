import fl1 from '../../../static/flower1.png'
const items = [
    {title:'Barberton Daisy', img:fl1, price:119.00, chapter:'All Plants', category:'Potter Plants All', size:'Small All', ID:'0010281'},
    {title:'Angel Wing Begonia', img:fl1, price:169.00, chapter:'All Plants', category:'House Plants All', size:'Small All', ID:'0018022'},
    {title:'Niger Violet', img:fl1, price:199.00, chapter:'All Plants', category:'Trerrariums All', size:'Medium All', ID:'0010423'},
    {title:'Beach Spider Lily', img:fl1, price:129.00, chapter:'All Plants', category:'House Plants All', size:'Small All', ID:'0012024'},
    {title:'Blushing Bromeliad', img:fl1, price:139.00, chapter:'All Plants', category:'Succulents All', size:'Medium All', ID:'0014025'},
    {title:'Aluminum Plant', img:fl1, price:99.00, chapter:'All Plants', category:'Big Plants All', size:'Large All', ID:'0010525'},
    {title:'Birds Nest Fern', img:fl1, price:119.00, chapter:'All Plants', category:'Succulents All', size:'Small All', ID:'0010526'},
    {title:'Broadleaf Lady Palm', img:fl1, price:59.00, chapter:'All Plants', category:'House Plants All', size:'Small All', ID:'0010527'},
    {title:'Chinese Evergreen', img:fl1, price:79.00, chapter:'All Plants', category:'Trerrariums All', size:'Medium All', ID:'0301022'},
    {title:'Barberton Daisy', img:fl1, price:119.00, chapter:'All Plants', category:'Accessories All', size:'Small All', ID:'0010921'},
    {title:'Angel Wing Begonia', img:fl1, price:169.00, chapter:'All Plants', category:'Trerrariums All', size:'Medium All', ID:'0019022'},
    {title:'Birds Nest Fern', img:fl1, price:199.00, chapter:'All Plants', category:'Big Plants All', size:'Large All', ID:'0201021'},
    {title:'Barberton Daisy', img:fl1, price:119.00, chapter:'All Plants', category:'Potter Plants All', size:'Small All', ID:'0010200'},
    {title:'Angel Wing Begonia', img:fl1, price:169.00, chapter:'All Plants', category:'House Plants All', size:'Small All', ID:'0120102'},
    {title:'African Violet', img:fl1, price:199.00, chapter:'All Plants', category:'Trerrariums All', size:'Medium All', ID:'0013402'},
    {title:'Beach Spider Lily', img:fl1, price:129.00, chapter:'All Plants', category:'House Plants All', size:'Small All', ID:'0016702'},
    {title:'Blushing Bromeliad', img:fl1, price:139.00, chapter:'All Plants', category:'Succulents All', size:'Medium All', ID:'0011202'},
    {title:'Penis Nikitosa', img:fl1, price:99.00, chapter:'All Plants', category:'Big Plants All', size:'Large All', ID:'0011202'},
    {title:'Birds Nest Fern', img:fl1, price:119.00, chapter:'All Plants', category:'Succulents All', size:'Small All', ID:'0011102'},
    {title:'Broadleaf Lady Palm', img:fl1, price:59.00, chapter:'All Plants', category:'House Plants All', size:'Small All', ID:'1100102'},
    {title:'Chinese Evergreen', img:fl1, price:79.00, chapter:'All Plants', category:'Trerrariums All', size:'Medium All', ID:'0220102'},
    {title:'Barberton Daisy', img:fl1, price:119.00, chapter:'All Plants', category:'Accessories All', size:'Small All', ID:'0013302'},
    {title:'Angel Wing Begonia', img:fl1, price:169.00, chapter:'All Plants', category:'Trerrariums All', size:'Medium All', ID:'0014402'},
    {title:'Birds Nest Fern', img:fl1, price:199.00, chapter:'All Plants', category:'Big Plants All', size:'Large All', ID:'0015502'},
]

const comments = [
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 5, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 5, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 5, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'},
        {name: "Sergey", stars: 2, comment: 'No way ypta', date:'05/05/2024'},
        {name: "Alena", stars: 0, comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et', date:'04/05/2024'},
        {name: "Alena", stars: 5, comment: '100/100', date:'02/03/2024'}
    ],
    [
        {name: "Sergey", stars: 4, comment: 'Good Product', date:'02/06/2024'}
    ],
]

items.map((e,i)=>e.id = i)
comments.map((e,i)=>e.id = i)

let links = ['House Plants','Potter Plants','Seeds','Small Plants','Big Plants','Succulents','Trerrariums','Gardening','Accessories', 'All']
let sizes = ['Small','Medium','Large', 'All']

let countCat = []
links.forEach((e,i)=>{
    let k = 0;
    items.forEach(el=>{
        if(el.category.includes(e)) k++
    })
    countCat[i] = k
})

let countSizes = []
sizes.forEach((e,i)=>{
    let k = 0;
    items.forEach(el=>{
        if(el.size.includes(e)) k++
    })
    countSizes[i] = k
})

export default [items, countCat, countSizes, comments]