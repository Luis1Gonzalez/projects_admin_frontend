export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    // const nuevaFecha = new Date(fecha.split('T')[0].split('-')) A el profesor le daba un error con el dia de la semana pero a mi no; el corrgio el error con este codigo.

    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones)
}