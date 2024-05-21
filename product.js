const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("error!");
        console.log(err);
    })

//스키마에 없으면 저장이 안됨
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 12
    },
    price: {
        type: Number,
        required: true,
        min: [0, '0이아님']//0이아님이 에러메시지 커스텀
    },
    onSale:{
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online:{
            type : Number,
            default: 0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type: String,
        enum:['S','M'] //배열로 유효성 검사
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name:'Bike44',
    price: 555,
    categories:['Cycling', 'Safety'],
    size: 'XS'
})

bike.save()
.then(data =>{
    console.log("try!");
    console.log(data);
})
.catch(err=>{
    console.log("error!");
    console.log(err);
})

//업데이트 할떈 유효성 검사를 안함 -> 그래서 명령어로 유효성검사를 하라고 해야함 --> runValidators
// Product.findOneAndUpdate({name: 'Bike2'},{price: -22}, {new:true, runValidators:true} )
// .then(data =>{
//     console.log("try!");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("error!");
//     console.log(err);
// })

