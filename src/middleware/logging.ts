import { Express, Request, Response, NextFunction } from 'express';

export const logging = (req: Request, res: Response, next: NextFunction) => {
    res.on("finish", function() {
        console.log(new Date().toLocaleString(), `et ${req.method} kall ble gjort mot ${req.url}`, res.status, res.statusMessage);
      });
    next();
  };