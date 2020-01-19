import { Router } from "express";
import notificationController from "../controllers/notification.controller";

class NotificationRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/", notificationController.getItems);
    this.router.get("/:url", notificationController.getItem);
    this.router.post("/", notificationController.createItem);
    this.router.put("/:url", notificationController.updateItem);
    this.router.delete("/:url", notificationController.deleteItem);

    this.router.post("/:url", notificationController.getLastItem);
  }
}

const itemRoutes = new NotificationRoutes();
export default itemRoutes.router;
