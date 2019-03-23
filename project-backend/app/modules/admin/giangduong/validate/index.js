'use strict'

import Joi from 'joi'
import { join } from 'path';
Joi.objectId = require('joi-objectid')(Joi)
const GiangDuongVal = {
    save: {
        payload:{
            ten: Joi.string().required(),
            soTang: Joi.number().required(),
            hinhAnhs: Joi.string().required()
        }
    },
    getbyid:{
        params:{
            id: Joi.objectId()
        }
    }
}

export default GiangDuongVal