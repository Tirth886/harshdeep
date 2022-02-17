const reactComponents = {
    "./components/global/": ["StylingComponent.js", "WizardLayout.js", "ButtonLayout.js"],
    "./components/module/WizardForm/": ["StepOne.js", "StepTwo.js", "WizardForm.js"],
    "./components/": ["App.js", "index.js"]
}

const body = document.querySelector("body")

for (path in reactComponents) {
    reactComponents[path].forEach(e => {
        body.innerHTML += `<script type="text/jsx" src="${path}${e}"></script>`
    })
}