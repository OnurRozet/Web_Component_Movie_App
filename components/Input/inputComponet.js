const inputTemplate = document.createElement("template");
inputTemplate.innerHTML = `
<style>
    input{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
    }
</style>
<input class="search_text" />
`;
class InputComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(inputTemplate.content.cloneNode(true));
    const inputElement = this.shadowRoot.querySelector(".search_text");
    const placeholder = this.getAttribute("placeholder");
    if (placeholder) {
      inputElement.setAttribute("placeholder", placeholder);
    }
  }


  connectedCallback() {
    this.shadowRoot
      .querySelector(".search_text")
      .addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
          const search_text =
            this.shadowRoot.querySelector(".search_text").value;
          searchMovie(search_text);
        }
      });
  }
}

window.customElements.define("app-input", InputComponent);
