const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FashionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  price: {
    type: String
  },
  costEdit: {
    type: String
  },
  date1: {
    type: String
  },
  cost: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  tinhtrang: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Fashion = mongoose.model("fashion", FashionSchema);
