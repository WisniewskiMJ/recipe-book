document.querySelectorAll("a[data-form-prepend]").forEach(i => {
    i.addEventListener("click", e => {
        e.preventDefault()
        let obj = document.createElement('fieldset')
        obj.innerHTML = i.getAttribute("data-form-prepend").replaceAll("FIELDSET_INDEX", Math.floor(100000 + Math.random() * 900000));
        obj.querySelector(".delete-ingredient").addEventListener('click', e => {
            e.preventDefault()
            e.target.parentNode.parentNode.remove()
        })
        i.parentNode.insertBefore(obj, i);
    })
})

document.querySelectorAll("fieldset[data_form]").forEach(i => {
    let data = i.getAttribute("data_form");
    let unit = i.getAttribute("data_unit");
    let quantity = i.getAttribute("data_quantity");
    let ingredient = i.getAttribute("data_ingredient");

    i.removeAttribute("data_form")
    i.removeAttribute("data_unit")
    i.removeAttribute("data_ingredient")
    i.removeAttribute("data_quantity")

    i.innerHTML = data.replaceAll("FIELDSET_INDEX", Math.floor(100000 + Math.random() * 900000));
    i.querySelector("input[list]").value = ingredient;
    i.querySelector("input[step]").value = quantity;
    i.querySelector("select").selectedIndex = unit;

    i.querySelector(".delete-ingredient").addEventListener("click", e => {
        e.preventDefault()
        e.target.parentNode.parentNode.remove()
    })
});
