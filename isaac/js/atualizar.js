function toggleEdit(id) {
    const input = document.getElementById(id);

    if (input.disabled) {
        input.disabled = false;
        input.focus();
        input.select();
    } else {
        input.disabled = true;
        alert(`${id} atualizado com sucesso para: ${input.value}`);
        // Aqui você pode enviar o valor atualizado para o backend
    }
}
