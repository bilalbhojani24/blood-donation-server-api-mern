import { bloodGroupEnum } from "../utils/constants.js";

import { check, validationResult } from "express-validator";

export const validateCreateDonor = [
  check("donorName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Donor name is must"),

  check("mobile")
    .trim()
    .isMobilePhone()
    .isLength({ min: 10, max: 10 })
    .withMessage("Invalid mobile number"),

  check("bloodGroup")
    .trim()
    .isIn(bloodGroupEnum)
    .withMessage("Invalid blood group number"),

  check("isActive").isBoolean().withMessage("Must be a boolean value"),

  check("district").optional(),

  check("state").optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ error: true, message: errors.array() });
    next();
  },
];
