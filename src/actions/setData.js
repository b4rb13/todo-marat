const storage = window.localStorage;

function setData() {
   storage.setItem('state', JSON.stringify({
      ...this.state,
      onSearch: false,
      onAll: true,
      onDone: false,
      onHighPriority: false,
      onLowPriority: false
   }))
}

export default setData