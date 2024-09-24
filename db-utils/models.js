// Mongoose Models used in the application
import { model, Schema } from "mongoose";

// No/Empty Scheme --> No validation

const userScheme = new Schema({
  password: {
    type: "string",
    minLength: [6, "Should be 6 characters in length"],
    maxLength: 12,
    required: true,
  },
});

export const userModel = new model("user", userScheme, "users");