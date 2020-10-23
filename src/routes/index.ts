import { Express } from 'express';
import express from 'express';
import colmeiaRoute from './colmeiaRoute';

export default (app: Express) => {
    app.use(express.json());
    app.use(colmeiaRoute);
}