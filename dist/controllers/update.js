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
 * /api/update/:id:
 *   put:
 *     summary: updates a product in the system with given id
 *     description: Returns a success message and the updated product
 *     responses:
 *       200:
 *         message: Successfully updated product
 *         product: { name, description, quantity, salePrice, costPrice, size }
 */
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const { name, description, quantity, salePrice, costPrice, size } = req.body;
    const product = yield prisma.product.update({
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
});
router.put("/:id", updateProduct);
module.exports = router;
