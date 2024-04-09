const input = document.getElementById("input");
        console.log("input", input);
        const button = document.getElementById("button");
        const label = document.getElementById("label");

        button.addEventListener("click", () => {
            label.textContent = input.value
        })