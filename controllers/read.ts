import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = require("express").Router();

/**
 * @swagger
 * /api/read
 *   get:
 *     summary: fetches all the products in the data base
 *     description: Returns an array of products
 *     responses:
 *       200:
 *         products: [{ name, description, quantity, salePrice, costPrice, size }]
 */
const readProducts = async (req: Request, res: Response) => {

  const products = await prisma.product.findMany({});

  return res.json({
    products
  });
};

/**
 * @swagger
 * /api/read/:id
 *   get:
 *     summary: fetches a single product with given id
 *     description: Returns an object of product with given id
 *     responses:
 *       200:
 *         product: { name, description, quantity, salePrice, costPrice, size }
 */
const readSingleProduct = async (req: Request, res: Response) => {

  const { id } = req.params;

  const product = await prisma.product.findFirst({ where: { id: parseInt(id) }});

  return res.json({
    product
  });
};

router.get("/", readProducts);
router.get("/:id", readSingleProduct)

export = router;
