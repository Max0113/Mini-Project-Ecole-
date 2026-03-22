export function FormField(field) {
    const gridClass = field.grid === "half" ? "form-field form-field--half" : "form-field form-field--full";

    if (field.type === "select") {
        const optionsMarkup = field.options.map((option) => `<option value="${option.value}">${option.label}</option>`).join("");
        return `
            <label class="${gridClass}">
                <span class="field-label">${field.label}</span>
                <div class="select-wrapper">
                    <select name="${field.name}" class="field-input">
                        ${optionsMarkup}
                    </select>
                    <i class="fa-solid fa-chevron-down select-icon"></i>
                </div>
            </label>
        `;
    }

    if (field.type === "textarea") {
        return `
            <label class="${gridClass}">
                <span class="field-label">${field.label}</span>
                <textarea name="${field.name}" class="field-input field-textarea" placeholder="${field.placeholder}" rows="4"></textarea>
            </label>
        `;
    }

    return `
        <label class="${gridClass}">
            <span class="field-label">${field.label}</span>
            <input type="${field.type}" name="${field.name}" class="field-input" placeholder="${field.placeholder}" />
        </label>
    `;
}
