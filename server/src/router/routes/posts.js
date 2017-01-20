import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        success: true,
        info: 'posts root'
    })
});

export default router;