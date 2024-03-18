"use strict";
const input = document.getElementById("input");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const output_selection = document.getElementById("output_selection");

add.onclick = () => {
    if (input.value === "") {
        return;
    }
    output_selection.add(new Option(input.value));
};

remove.onclick = () => {
    for (const node of output_selection.selectedOptions) {
        output_selection.removeChild(node);
    }
};
