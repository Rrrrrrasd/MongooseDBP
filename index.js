const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviewApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("error!");
        console.log(err);
    }) 

//스키마 정의
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
    });


const Movie = mongoose.model('Movie', movieSchema);//'Movie' 집합 생성
//const amadeus = new Movie({title: 'Amadeus',year:1986,score:9.2,rating:'R'});
//amadeus.save();


//이 메서드를 사용할떈 save를 사용안해도 됨
// Movie.insertMany([
//     {title:"1",year:1,score:1,rating:"1"},
//     {title:"2",year:2,score:2,rating:"2"}
// ])
// .then(data =>{
//     console.log("it worked!");
//     console.log(data)
// })


//이런식으로 사용-> 여기 then은 프로미스랑 다름
//Movie.find({rating: '2'}).then(data => console.log(data))

//첫번쨰꺼만 반환
//Movie.findOne({}).then(m => console.log(m))

//id로 찾는거
//Movie.find({_id:'66479046f83088a8e9f06a64'}).then(data => console.log(data))

//upda
//Movie.updateOne({title:'1',year:111}).then(res=>console.log(res));
//Movie.updateMany({title: {$in:['1','2']}}, {score:1212}).then(res=>console.log(res));

//findoneandupdate ...--> 디폴트 동작이 -> 바꾸기전이 표시됨 -> 세번째인수로 -> {new:true} 설정해주면 ->  수정된 문서가 표시됨
Movie.findOneAndUpdate({title:1}, {year:123}, {new :true}).then(res => console.log(res));

//Movie.findById('66479046f83088a8e9f06a64').then(m =>console.log(m))


//delete findoneanddelete --> 등등 알아서 찾아서 쓰셈
Movie.deleteMany({title:'1'}).then(msg => console.log(msg));