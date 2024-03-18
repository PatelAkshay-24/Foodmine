import { Router } from "express"
import { sample_foods, sample_tags } from "../data";
import asynceHanler from 'express-async-handler'
import { FoodModel } from "../models/food.model";

const router = Router();

router.get('/seed',asynceHanler(
    async (req,res)=>{
        const foodCount = await FoodModel.countDocuments()
        if(foodCount> 0){
            res.send('send is already done')
            return;
        }
    await FoodModel.create(sample_foods)
    res.send("seed Is Done!")
}))

//get api for All foods
router.get('/',(req,res)=>{
    res.send(sample_foods)
})

//get api for search food
router.get('/search/:searchTerm',(req,res)=>{
    const searchTerm = req.params.searchTerm
    const foods = sample_foods.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(foods)
})

//get api for All tags
router.get('/tags',(req,res)=>{
    res.send(sample_tags)
})

//get api for food by tag 
router.get('/tags/:tagName',(req,res)=>{
    const tagName = req.params.tagName
    const foods = sample_foods.filter(food=>food.tags?.includes(tagName))
    res.send(foods)
})

//get api for food by id
router.get('/:foodId',(req,res)=>{
    const foodId = req.params.foodId
    const foods = sample_foods.find(food=>food.id == foodId)
    res.send(foods)
})

export default router;