// Initializes the page upon load
const pageInitializer = () => {
    function component(text) {
        const element = document.createElement('div');
        element.innerHTML = text;
      
        return element;
      }
      
      document.body.appendChild(component("Hello World, Battleship time!"));

      console.log("page intializer fn ran...");
};


export {
    pageInitializer,
}