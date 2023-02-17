import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = require("express").Router();

/**
 * @swagger
 * /api/update/:id:
 *   put:
 *     summary: updates a product in the system with given id
 *     description: Returns a success message and the updated product
 *     responses:
 *       200:
 *         message: Successfully updated product
 *         product: { name, description, quantity, salePrice, costPrice, size }
 */
const updateProduct = async (req: Request, res: Response) => {
  let { id }= req.params;
  const { name, description, quantity, salePrice, costPrice, size } = req.body;

  const existingProduct = await prisma.product.findFirst({ where: { id: parseInt(id) } });
  if (!existingProduct) return res.json({ message: "Can't update. No product found with this id " });

  const product = await prisma.product.update({
    where: {
      id: parseInt(id)
    },
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
    message: "Successfully updated product",
    product
  });
};

router.put("/:id", updateProduct);

export = router;
