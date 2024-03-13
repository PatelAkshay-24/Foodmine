import express from 'express'
import cors from 'cors'
import { sample_foods, sample_tags } from '../backend/src/data'

const app = express();



app.use(cors({
    credentials:true,
    origin:['https://foodmine-seven.vercel.app/']

}))


//get api for All foods
app.get('/api/foods',(req,res)=>{
    res.send(sample_foods)
})

//get api for search food

app.get('/api/foods/search/:searchTerm',(req,res)=>{
    const searchTerm = req.params.searchTerm
    const foods = sample_foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(foods)
})

//get api for All tags
app.get('/api/foods/tags',(req,res)=>{
    res.send(sample_tags)
})

//get api for food by tag 
app.get('/api/foods/tags/:tagName',(req,res)=>{
    const tagName = req.params.tagName
    const foods = sample_foods.filter(food=>food.tags?.includes(tagName))
    res.send(foods)
})

//get api for food by id
app.get('/api/foods/:foodId',(req,res)=>{
    const foodId = req.params.foodId
    const foods = sample_foods.find(food=>food.id == foodId)
    res.send(foods)
})

app.get('/',(req,res)=>{
   res.send("hello");
})


const port = 5000;
app.listen(port,()=>{
    console.log("welcome server is run on http:/localhost:",+port);
    
})




export default {};
