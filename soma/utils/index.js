/** UTILS
 * =======================================================================
 *  Contains all the function for handling Utilities
 * =======================================================================
 */

// this is used for pagenating
const pageNate = (req,res,data) => {

    const {page,limit} = req.query
    const startIndex = (page - 1) * limit
    const endIndex = (page * limit)
    const resultUsers = data.slice(startIndex, endIndex)
  
    let info = 
      {
        next: {
          page: resultUsers.length <= limit ? parseInt(page) : parseInt(page) + 1,
          limit: limit
        },
        previous: {
          page: parseInt(page) - 1,
          limit: limit
        },
        results: resultUsers
      }
      return info;
  }





module.exports = {pageNate};