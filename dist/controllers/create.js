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
 * /api/create:
 *   post:
 *     summary: create a product in the system
 *     description: Returns a success message and a product object with postgress id
 *     responses:
 *       200:
 *         message: Successfully created product
 *         product: { name, description, quantity, salePrice, costPrice, size }
 */
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, quantity, salePrice, costPrice, size } = req.body;
    const product = yield prisma.product.create({
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
    });
});
router.post('/', createProduct);
module.exports = router;
