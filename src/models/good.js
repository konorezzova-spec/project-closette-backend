import { Schema, model } from "mongoose";
import { GENDER, SIZE } from "../constants/tags.js";

const goodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
      index: true,
    },

    image: String,

    price: {
      value: {
        type: Number,
        index: true,
      },
      currency: { type: String },
    },

    size: {
      type: [String],
      enum: SIZE,
      required: true,
      index: true,
    },

    description: String,

    feedbacks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Feedback",
      },
    ],

    prevDescription: String,

    gender: {
      type: String,
      enum: GENDER,
      index: true,
    },
    characteristics: [String],
  },
  //   { timestamps: true, versionKey: false },
);

export const Good = model("Good", goodSchema);
