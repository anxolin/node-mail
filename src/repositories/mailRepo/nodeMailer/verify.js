module.exports = ({ transporter }) => () => {
  return new Promise((resolve, reject) => {    
    transporter.verify((error, success) => {
      if (error) {
        reject(error)
      } else {
        resolve(success)
      }
    })
  })
}
