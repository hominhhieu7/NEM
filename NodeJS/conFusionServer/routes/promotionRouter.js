const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Promo = require('../models/promotion');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
    .get((req, res, next) => {
        Promo.find({}).then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);
        }, (err) => next(err))
            .catch((err) => next(err))
    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
        Promo.create(req.body).then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);
        }, (err) => next(err))
            .catch((err) => next(err))
    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /promotions");
    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
        Promo.remove({}).then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
            .catch((err) => next(err))
    });
promotionRouter.route('/:promotionId')
    .get((req, res, next) => {
        Promo.findById(req.params.promotionId).then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);
        }, (err) => next(err))
            .catch((err) => next(err))
    })
    .post(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
        res.end("POST operation not supported on /promotions/" + req.params.promotionId);
    })
    .put(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
        Promo.findByIdAndUpdate(req.params.promotionId, { $set: req.body }, { new: true }).then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);
        }, (err) => next(err))
            .catch((err) => next(err))
    })
    .delete(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
        Promo.findByIdAndRemove(req.params.promotionId).then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
            .catch((err) => next(err))
    });
module.exports = promotionRouter;