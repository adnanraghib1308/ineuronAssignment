import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = require("express").Router();

/**
 * @swagger
 * /api/create:
 *   post:
 *     summary: create a product in the system
 *     description: Returns a success message and a product object with postgress id
 *     responses:
 *       200:
 *         message: Successfully created product
 *         product: { name, description, quantity, salePrice, costPrice, size }
 */
const createProduct = async (req: Request, res: Response) => {
  const {
    name,
    description,
    quantity,
    salePrice,
    costPrice,
    size
  } = req.body;

  if(!name || !description || !quantity || !salePrice || !costPrice || !size) return res.json({ message: "Some mandatory values are missinge. Please provide these values - name, description, quantity, salePrice, costPrice, size"})
  const product = await prisma.product.create({
    data: {
      name,
      description,
      quantity,
      salePrice,
      costPrice,
      size,
    },
  });

  return res.json({
    message: "Successfully created product",
    product
  })
}

router.post('/', createProduct);

export = router;
