"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
const readProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany({});
    return res.json({
        products
    });
});
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
const readSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield prisma.product.findFirst({ where: { id: parseInt(id) } });
    return res.json({
        product
    });
});
router.get("/", readProducts);
router.get("/:id", readSingleProduct);
module.exports = router;
