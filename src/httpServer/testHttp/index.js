import HTTP from '@http/axiosConfig'
import {
    testUrl
} from '@http/urlConfig'

const getTestData = params => {
    return HTTP.post(testUrl.searchUrl, params)
}

module.exports = {
    getTestData
}