import "dotenv/config";
import express from "express";
import session from "express-session";
import "dotenv/config";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
const CONNECTION_STRING = "mongodb+srv://giuseppi:supersecretpassword@kanbasmongo.kfbng3h.mongodb.net/kanbas?retryWrites=true&w=majority" 
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);

// import express from "express"
// import cors from "cors"

// import "dotenv/config"

// import Hello from "./hello.js"
// import Lab5 from "./lab5.js"
// import CourseRoutes from "./courses/routes.js";
// import ModuleRoutes from "./modules/routes.js";
// import AssignmentRoutes from "./assignments/routes.js";
// import mongoose from "mongoose";
// import UserRoutes from "./users/routes.js";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

// const app = express()

// app.use(cors())
// app.use(express.json())
// UserRoutes(app);

// const PORT = 4000

// CourseRoutes(app);
// ModuleRoutes(app);
// AssignmentRoutes(app);
// Hello(app)
// Lab5(app)

// app.listen(process.env.PORT || 4000);