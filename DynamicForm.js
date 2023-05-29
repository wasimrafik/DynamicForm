const allLabelDivContainer = document.querySelector(".allLabelDivContainer");
const labelInputs = document.querySelector(".labelInputs");
const labelValues = document.querySelector(".labelValues");
const labelButtons = document.querySelector(".labelButtons");
const allInputDivContainer = document.querySelector(".allInputDivContainer");
const labelSection = document.querySelector(".labelSection");
const inputValueSection = document.querySelector(".inputValueSection");
const printValue = document.querySelector(".printValue");
const printLabelValues = document.querySelector(".printLabelValues");
const printInputValues = document.querySelector(".printInputValues");
const buttonToGetValuesFromSelectElements = document.querySelector(
  "#buttonToGetValuesFromSelectElements"
);

// Get Value from Select Option from selectElements Values
function getOptionsFromSelectElementsList() {
  const getValuesFromElements =
    document.querySelector("#optionsElements").value;
  return getValuesFromElements;
}

function createInputElement() {
  return document.createElement("input");
}

function createLabelElement() {
  return document.createElement("label");
}

function createButtonElement() {
  return document.createElement("button");
}

// Event listener function
function handleButtonClick() {
  var getValuesFromElements = getOptionsFromSelectElementsList();

  if (getValuesFromElements === "Text") {
    // var inputCreate = createInputElement();
    var inputCreate = document.createElement("input");
    inputCreate.setAttribute("type", "text");
    inputCreate.setAttribute("id", "inputCreateLabelId");
    labelInputs.appendChild(inputCreate);

    var addButtonToLabelAdd = createButtonElement();
    addButtonToLabelAdd.innerHTML = "Add";
    addButtonToLabelAdd.setAttribute("type", "submit");
    addButtonToLabelAdd.addEventListener("click", addLabelFromInput);
    labelInputs.appendChild(addButtonToLabelAdd);

    function addLabelFromInput() {
      var createLabel = createLabelElement();
      createLabel.setAttribute("for", "inputCreateLabelId");
      createLabel.innerHTML = document.querySelector(
        "#inputCreateLabelId"
      ).value;
      labelInputs.appendChild(createLabel);
      inputCreate.style.display = "none";
      addButtonToLabelAdd.remove();
    }

    var inputValueFromLabel = createInputElement();
    inputValueFromLabel.setAttribute("type", "text");
    inputValueFromLabel.setAttribute("id", "inputValueFromLabel");
    labelValues.appendChild(inputValueFromLabel);

    var closeButton = createButtonElement();
    closeButton.innerHTML = "X";
    closeButton.setAttribute("type", "submit");
    labelButtons.appendChild(closeButton);
  }
}

// Event listener assignment
buttonToGetValuesFromSelectElements.addEventListener(
  "click",
  handleButtonClick
);
