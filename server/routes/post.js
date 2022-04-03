import express from "express";


const router = express.Router();
router.post('/the', (req,res)=>{
    res.send("This Works");
})
export default router;