"use strict";
const c = require("chai");
const chaihttp = require("chai-http");
const expect = c.expect;
const app = require("../server");
c.use(chaihttp);
// TEST CASES
describe("Product API", () => {
    let products;
    // CREATES a new product
    it("should create a new product", (done) => {
        const product = {
            name: "test product1",
            description: "desc 1",
            quantity: 30,
            salePrice: 200,
            costPrice: 150,
            size: "10",
        };
        c.request(app)
            .post("/api/create")
            .send(product)
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.product).to.be.an("object");
            expect(res.body.product).to.have.property("name").equal("test product1");
            expect(res.body.product).to.have.property("description").equal("desc 1");
            expect(res.body.product).to.have.property("quantity").equal(30);
            expect(res.body.product).to.have.property("salePrice").equal(200);
            expect(res.body.product).to.have.property("costPrice").equal(150);
            expect(res.body.product).to.have.property("size").equal("10");
            done();
        });
    });
    // FETCHES All products
    it("Get All Products", (done) => {
        c.request(app)
            .get("/api/read")
            .end((err, res) => {
            products = res.body.products;
            done();
        });
    });
    // Test case for updating a product
    it("updates a product", (done) => {
        c.request(app)
            .put(`/api/update/${products[0].id}`)
            .send({
            name: "Updated Product",
            salePrice: 20,
        })
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.product).to.be.an("object");
            expect(res.body).to.have.property("message").equal("Successfully updated product");
            expect(res.body.product).to.have.property("name").equal("Updated Product");
            expect(res.body.product).to.have.property("salePrice").equal(20);
            done();
        });
    });
    // Test case for getting a product by ID
    it("gets a product by ID", (done) => {
        c.request(app)
            .get(`/api/read/${products[0].id}`)
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.product).to.be.an("object");
            expect(res.body.product).to.have.property("name");
            expect(res.body.product).to.have.property("salePrice");
            expect(res.body.product).to.have.property("costPrice");
            expect(res.body.product).to.have.property("description");
            expect(res.body.product).to.have.property("quantity");
            expect(res.body.product).to.have.property("size");
            done();
        });
    });
    // Test case for deleting a product
    it("deletes a product", (done) => {
        c.request(app)
            .delete(`/api/delete/${products[0].id}`)
            .end((err, res) => {
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property("message").eql(`Successfully deleted product with id ${products[0].id}`);
            done();
        });
    });
});
