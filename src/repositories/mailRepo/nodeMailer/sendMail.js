module.exports = ({ transporter }) => ({
  from,
  to,
  subject,
  text,
  html
} = {}) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from,
      to,
      subject,
      text,
      html
    }, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }      
    })
  })  
}
