import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = require("express").Router();

/**
 * @swagger
 * /api/delete/:id
 *   get:
 *     summary: deletes a product from the database with given id
 *     description: Returns a success message that the product is deleted
 *     responses:
 *       200:
 *         message: Successfully deleted product with id ${id}
 */
const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await prisma.product.findFirst({ where: {id: parseInt(id)}});
  if(!product) return res.json({ message: "No record found with this id "});
  
  await prisma.product.delete({
    where: {
      id: parseInt(id)
    }
  });

  return res.json({
    message: `Successfully deleted product with id ${id}`,
  });
};

router.delete("/:id", deleteProduct);

export = router;
