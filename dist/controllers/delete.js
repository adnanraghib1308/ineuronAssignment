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
 * /api/delete/:id
 *   get:
 *     summary: deletes a product from the database with given id
 *     description: Returns a success message that the product is deleted
 *     responses:
 *       200:
 *         message: Successfully deleted product with id ${id}
 */
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield prisma.product.delete({
        where: {
            id: parseInt(id)
        }
    });
    return res.json({
        message: `Successfully deleted product with id ${id}`,
    });
});
router.delete("/:id", deleteProduct);
module.exports = router;
