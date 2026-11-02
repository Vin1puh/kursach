const pool = require('../db'); // Подключение к pg-pool

async function checkPropertyOwner(req, res, next) {
    const propertyId = req.params.id;
    const userId = req.user.id;

    const result = await pool.query('SELECT owner_id FROM properties WHERE id = $1', [propertyId]);
    
    if (result.rows.length === 0 || result.rows[0].owner_id !== userId) {
        return res.status(403).json({ error: "Access Denied: Вы не являетесь владельцем объекта" });
    }
    next();
}
module.exports = checkPropertyOwner;
