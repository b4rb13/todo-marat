const dateGenerator = (ms) => {
   return `${new Date(ms).toDateString().slice(3)}
           ${new Date(ms).toLocaleTimeString()}`
                      
}

export default dateGenerator;