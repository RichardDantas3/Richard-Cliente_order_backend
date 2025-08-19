const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get ('/:id', async(req,res) =>{
    try{
        const clients = await pool.query('SELECT * FROM clients WHERE clients_id = ?', [req.params.id]);
        if (clients.length === 0){
            return res.status(404). json({error:'Cliente não encontrado'});
        }
        res.json(clients[0]);
    } catch(error) {
        res.sendStatus(500).json({error:error.menssage})
    };
})

router.post('/', async (req,res) =>{
    const {name,email,addres } = req.body;
    if (!name|| !email) {
        return res.status(400).json({error:'Nome e email são onrigatótios'});
    } try{
        const result = await pool.query(
            'INSERT INTO clients (name, email, address) VALUES (?, ?, ?)',[name, email, address]
        );
        res.status(201).json({
            client_id: result.affectedRows.client_id,menssage:'cliente criado com sucesso'
        });
    }catch (error) {
            if (error.code === 'ER_DUP_ENTRY'){
                res.status(409).json({error:'Email já cadastrado'});
            } else {
                res.status(500).json({error:error.message});
            }
        }
    });
    router.put('/:id', async (req,res) =>{
        const {name,email,address} = req.body;
        try{
            const result = await pool.query(
                'UPDATE clients SET same = ?, email = ?, address =?',
                [name, email, address, req.params.id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).json({error:'cliente não encontrado'});
            }
            res.json({message:'Cliente atualizado com sucesso'});
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    });
    router.dalete('/:id',async (req,res) =>{
        try {
            const result = await pool.query('DELETE FROM clients WHERE client_id = ?',
                [req.params.id]);
                if (result.affectedRows ===0) {
                    return res.status(404).json({error:"Cliente não encontrado"});
                }
                res.json({message:"Cliente excluido com sucesso"});

        }catch (error){
            res.status(500).json({error:error.message})
        }
    });
module.exports = router;

