
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().message({
      'string.empty': '{{#label}} is not allowed to be empty',
      'string.trim': '{{#label}} must not have leading or trailing whitespace',
      'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
      'string.min': '{{#label}} length must be at least {{#limit}} characters long'
    }),
    description: Joi.string().required().min(3).max(100).trim().strict()
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error.message)))
  }
}

export const boardValidation = {
  createNew
}