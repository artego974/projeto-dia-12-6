function atualizarContador() {
    const inicio = new Date("2024-10-05T00:00:00");
    const agora = new Date();
    const diff = agora - inicio;

    const segundosTotais = Math.floor(diff / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    const anos = Math.floor(diasTotais / 365);
    const meses = Math.floor((diasTotais % 365) / 30.44); // média
    const dias = Math.floor((diasTotais % 365) % 30.44);
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    document.getElementById("contador").textContent =
        `Estamos juntos há: ${anos > 0 ? anos + " ano(s), " : ""}${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s) 💞`;
}

setInterval(atualizarContador, 1000);
